import { eventConfig } from "./config";

export async function loadBrandFonts() {
  const families = {
    display: "Salto Monument",
    condensed: "Salto Condensed",
    body: "Salto Neue Haas",
  };
  await Promise.all(
    Object.entries(eventConfig.fonts).map(async ([role, asset]) => {
      if (!asset) return;
      const family = families[role as keyof typeof families];
      try {
        const face = new FontFace(family, `url(${JSON.stringify(asset.src)})`, {
          weight: asset.weight,
          display: "swap",
        });
        await face.load();
        document.fonts.add(face);
        document.documentElement.style.setProperty(
          `--font-${role}`,
          role === "body"
            ? `"${family}", Arial, sans-serif`
            : `"${family}", system-ui, sans-serif`,
        );
      } catch {
        console.warn(
          `Fonte de ${role} não carregada. Confira o arquivo em src/config.ts.`,
        );
      }
    }),
  );
}
