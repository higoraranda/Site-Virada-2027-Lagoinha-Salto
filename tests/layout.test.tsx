import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import App from "../src/App";
import { eventConfig } from "../src/config";
import { PastDinner } from "../src/components/RingDinner";
import { NewYearStrip } from "../src/components/NewYearStrip";
afterEach(cleanup);
it("mantém a faixa seguida do contador e da galeria, com Welcome no rodapé", () => {
  const { container } = render(<App />);
  expect(container.querySelector(".below-hero, #sobre")).toBeNull();
  expect(
    container.querySelector(".new-year-strip")?.nextElementSibling?.id,
  ).toBe("virada");
  expect(container.querySelector("#virada")?.nextElementSibling?.id).toBe(
    "ano-passado",
  );
  const welcome = screen.getByRole("img", {
    name: eventConfig.artworks.belowHero!.alt,
  });
  expect(welcome.closest("footer")).not.toBeNull();
  expect(welcome.previousElementSibling?.id).toBe("closing-title");
  expect(welcome.nextElementSibling?.hasAttribute("data-ticket")).toBe(true);
  for (const link of container.querySelectorAll('a[href^="#"]')) {
    expect(container.querySelector(link.getAttribute("href")!)).not.toBeNull();
  }
});
it("mostra a faixa contínua sem botão de pausa", () => {
  const { container } = render(<NewYearStrip />);
  expect(container.querySelector("button")).toBeNull();
  expect(container.textContent).toContain("VIVA O NOVO ANO");
});
it("exibe fotos reais sem controles e suporta arquivo com falha", () => {
  const previous = eventConfig.photos.pastDinner;
  eventConfig.photos.pastDinner = [
    { src: "/media/foto.jpg", alt: "Famílias no jantar" },
  ];
  try {
    const { container } = render(<PastDinner />);
    expect(
      screen
        .getByRole("img", { name: "Famílias no jantar" })
        .getAttribute("src"),
    ).toBe("/media/foto.jpg");
    expect(container.querySelector("button")).toBeNull();
    expect(container.querySelector(".dinner-heading")?.textContent).toContain(
      "na presença de Deus",
    );
    fireEvent.error(screen.getByRole("img"));
    expect(screen.getByText("Fotos da última virada em breve")).toBeDefined();
  } finally {
    eventConfig.photos.pastDinner = previous;
  }
});
