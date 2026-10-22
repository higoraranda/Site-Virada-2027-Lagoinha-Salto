import { eventConfig } from "../config";

export function Locations() {
  const { copy, venues } = eventConfig;
  return (
    <section
      id="localizacao"
      className="locations-section section-pad"
      aria-labelledby="locations-title"
    >
      <div className="shell">
        <p className="eyebrow">{copy.locationEyebrow}</p>
        <h2 id="locations-title">{copy.locationTitle}</h2>
        <p className="locations-intro">{copy.locationDescription}</p>
        <div className="locations-grid">
          {venues.map((venue) => {
            const query = encodeURIComponent(venue.mapQuery);
            return (
              <article className="location" key={venue.name}>
                <div className="location-heading">
                  <p className="eyebrow">{venue.label}</p>
                  <h3>{venue.name}</h3>
                  <p>{venue.city}</p>
                </div>
                <iframe
                  title={`Localização de ${venue.name} em ${venue.city}`}
                  src={`https://www.google.com/maps?q=${query}&output=embed&hl=pt-BR`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <a
                  className="text-link"
                  href={`https://www.google.com/maps/search/?api=1&query=${query}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {copy.openMap}
                  <span aria-hidden="true">↗</span>
                  <span className="sr-only">
                    {" "}
                    — {venue.name}, abre em nova aba
                  </span>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
