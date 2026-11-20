import { cleanup, render, within } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import App from "../src/App";

afterEach(cleanup);

it("substitui as dúvidas antigas pelas dez perguntas aprovadas", () => {
  const { container } = render(<App />);
  const summaries = container.querySelectorAll("#duvidas summary");
  expect(Array.from(summaries, (item) => item.textContent?.trim())).toEqual([
    "Quem pode participar do evento? Preciso comprar ingresso?",
    "Como posso comprar meu ingresso e quais são as formas de pagamento?",
    "Como funcionará a confirmação e a entrada no jantar?",
    "Qual será a programação e o horário do culto e do jantar?",
    "Onde acontecerão o culto e o jantar? Haverá estacionamento e acessibilidade?",
    "O que está incluído no ingresso do jantar da virada?",
    "Crianças pagam ingresso? Haverá espaço kids?",
    "Os lugares e as mesas serão reservados?",
    "Posso transferir, cancelar ou solicitar reembolso do meu ingresso?",
    "Como posso entrar em contato com a organização?",
  ]);
});

it("preserva as condições de venda, crianças e direitos legais", () => {
  const { container } = render(<App />);
  const details =
    container.querySelectorAll<HTMLDetailsElement>("#duvidas details");
  details.forEach((item) => {
    item.open = true;
  });
  expect(details[0].textContent).toContain(
    "O culto é gratuito e aberto a todos",
  );
  expect(details[1].textContent).toContain(
    "pagamentos com cartão estão sujeitos à taxa da máquina",
  );
  expect(details[1].textContent).toContain(
    "Não haverá venda de ingressos no dia do evento.",
  );
  expect(details[3].textContent).toContain("22h do dia 31 de dezembro de 2026");
  expect(details[3].textContent).toContain(
    "sem um horário exato de início definido",
  );
  expect(
    within(details[6])
      .getAllByRole("listitem")
      .map((item) => item.textContent),
  ).toEqual([
    "Até 6 anos: entrada gratuita.",
    "De 7 a 12 anos: meia-entrada.",
    "A partir de 13 anos: ingresso com valor integral.",
  ]);
  expect(details[8].textContent).toContain(
    "informados presencialmente na igreja",
  );
  expect(details[8].textContent).toContain(
    "direitos obrigatórios previstos na legislação aplicável",
  );
});
