import { act, cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { getCountdown } from "../src/lib/countdown";
import { getPurchaseUrl } from "../src/lib/tickets";
import { Countdown } from "../src/components/Countdown";
import { TicketButton } from "../src/components/TicketButton";
import { eventConfig } from "../src/config";

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

describe("instante absoluto da virada", () => {
  const target = Date.parse("2026-12-31T22:00:00-03:00");
  it("fixa o alvo e a data confirmados", () => {
    expect(eventConfig.countdownTarget).toBe("2026-12-31T22:00:00-03:00");
    expect(eventConfig.date).toBe("2026-12-31");
  });
  it("decompõe dias, horas, minutos e segundos", () => {
    expect(getCountdown(target, target - 93784000)).toEqual({
      days: 1,
      hours: 2,
      minutes: 3,
      seconds: 4,
      finished: false,
    });
  });
  it("equivale ao mesmo instante em UTC", () => {
    expect(target).toBe(Date.parse("2027-01-01T01:00:00Z"));
  });
  it("não encerra no último segundo parcial", () => {
    expect(getCountdown(target, target - 1).finished).toBe(false);
    expect(getCountdown(target, target - 1).seconds).toBe(1);
  });
  it.each([target, target + 1000, target + 365 * 86400000])(
    "zera e encerra em %s",
    (now) => {
      expect(getCountdown(target, now)).toEqual({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        finished: true,
      });
    },
  );
  it("protege entradas não finitas", () => {
    expect(Object.values(getCountdown(NaN, target))).not.toContain(NaN);
    expect(getCountdown(target, Infinity).finished).toBe(true);
  });
  it("atualiza, celebra uma vez e remove o intervalo", () => {
    vi.useFakeTimers();
    vi.setSystemTime(target - 2000);
    const clear = vi.spyOn(window, "clearInterval");
    render(<Countdown />);
    expect(screen.getByLabelText("Segundos").textContent).toContain("02");
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(screen.getByLabelText("Segundos").textContent).toContain("01");
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(screen.getByRole("status").textContent).toBe(
      eventConfig.copy.celebration,
    );
    expect(clear).toHaveBeenCalled();
    expect(vi.getTimerCount()).toBe(0);
  });
  it("não cria intervalo após a virada", () => {
    vi.useFakeTimers();
    vi.setSystemTime(target + 1);
    render(<Countdown />);
    expect(vi.getTimerCount()).toBe(0);
  });
  it("sincroniza se o alvo passar entre a renderização e o efeito", () => {
    vi.spyOn(Date, "now")
      .mockReturnValueOnce(target - 1)
      .mockReturnValue(target + 1);
    render(<Countdown />);
    expect(screen.getByRole("status").textContent).toBe(
      eventConfig.copy.celebration,
    );
    expect(screen.queryByLabelText("Segundos")).toBeNull();
  });
  it("remove intervalo ao desmontar e não anuncia os números a cada segundo", () => {
    vi.useFakeTimers();
    vi.setSystemTime(target - 10000);
    const view = render(<Countdown />);
    expect(view.container.querySelector('[aria-live="off"]')).not.toBeNull();
    view.unmount();
    expect(vi.getTimerCount()).toBe(0);
  });
});

describe("ingressos externos", () => {
  it.each([
    "",
    " ",
    "#",
    "javascript:alert(1)",
    "https://",
    "http://example.com",
  ])("desativa URL ausente ou inválida: %s", (url) => {
    expect(getPurchaseUrl(url)).toBeNull();
    const { unmount } = render(<TicketButton url={url} />);
    expect((screen.getByRole("button") as HTMLButtonElement).disabled).toBe(
      true,
    );
    expect(screen.getByRole("button").textContent).toContain("Vendas em breve");
    unmount();
  });
  it("ativa a plataforma externa sem simular checkout", () => {
    render(<TicketButton url=" https://example.com/salto " />);
    const link = screen.getByRole("link");
    expect(link.textContent).toContain("Comprar ingresso");
    expect(link.getAttribute("href")).toBe("https://example.com/salto");
    expect(link.getAttribute("rel")).toContain("noopener");
  });
});
