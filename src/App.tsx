import { eventConfig as event } from "./config";
import { TicketButton } from "./components/TicketButton";
import { Countdown } from "./components/Countdown";
import { Artwork, PhotoSlot } from "./components/Media";
import { getPurchaseUrl } from "./lib/tickets";
import { Locations } from "./components/Locations";
import { NewYearStrip } from "./components/NewYearStrip";
import { PastDinner } from "./components/RingDinner";

export default function App() {
  const { copy, artworks, photos } = event;
  const selling = Boolean(getPurchaseUrl(event.ticketUrl));
  const ticketDescription = selling ? copy.ticketAvailable : copy.ticketPending;
  return (
    <>
      <a className="skip-link" href="#conteudo">
        {copy.skip}
      </a>
      <main id="conteudo" tabIndex={-1}>
        <section
          id="inicio"
          className="hero hero-bh"
          aria-labelledby="hero-title"
        >
          <div className="shell hero-home">
            <div className="hero-corners">
              {artworks.logo && (
                <a
                  className="hero-brand"
                  href="#inicio"
                  aria-label={`${event.church} — início`}
                >
                  <Artwork asset={artworks.logo} />
                </a>
              )}
              <TicketButton />
            </div>
            <div className="hero-stage">
              <p className="hero-event-date">
                <time dateTime={event.date}>{event.shortDate}</time>
                <span>{copy.eventType}</span>
              </p>
              <h1
                id="hero-title"
                className="hero-title"
                aria-label={event.name}
              >
                <Artwork
                  asset={artworks.hero}
                  fallback={
                    <>
                      <span className="hero-word">
                        {copy.heroTitleLines[0]}
                      </span>
                      <span className="hero-word">
                        {copy.heroTitleLines[1]}
                        <span className="hero-year">{copy.heroYear}</span>
                      </span>
                    </>
                  }
                />
                {artworks.hero && <span className="sr-only">{event.name}</span>}
              </h1>
            </div>
          </div>
        </section>
        {artworks.belowHero && (
          <div className="below-hero">
            <div className="shell">
              <Artwork asset={artworks.belowHero} />
              <div className="below-hero-actions">
                <TicketButton />
                <a className="hero-discover" href="#sobre">
                  {copy.discover}
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </div>
        )}
        <NewYearStrip />

        <section
          id="sobre"
          className="about section-pad"
          aria-labelledby="about-title"
        >
          <div className="shell about-grid">
            <div>
              <p className="eyebrow">{copy.aboutEyebrow}</p>
              <h2 id="about-title">{copy.aboutTitle}</h2>
            </div>
            <div className="about-copy">
              {copy.aboutParagraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <TicketButton />
            </div>
          </div>
          {artworks.newYear && (
            <div className="shell artwork-section">
              <Artwork asset={artworks.newYear} />
            </div>
          )}
        </section>

        <section
          id="virada"
          className="countdown-section section-pad"
          aria-labelledby="countdown-title"
        >
          <div className="shell">
            <div className="countdown-heading">
              <p className="eyebrow">{copy.countdownEyebrow}</p>
              <h2 id="countdown-title">{copy.countdownTitle}</h2>
            </div>
            <Countdown />
            <p className="countdown-note">{copy.countdownNote}</p>
          </div>
        </section>

        <PastDinner />

        <Locations />

        <section
          id="ingressos"
          className="tickets-section section-pad"
          aria-labelledby="tickets-title"
        >
          <div className="shell tickets-grid">
            <div className="event-details">
              <p className="eyebrow">{copy.ticketsEyebrow}</p>
              <h2 id="tickets-title">{copy.ticketsTitle}</h2>
              <dl>
                <div>
                  <dt>{copy.dateField}</dt>
                  <dd>
                    <time dateTime={event.date}>{event.dateLabel}</time>
                  </dd>
                </div>
                <div>
                  <dt>{copy.churchField}</dt>
                  <dd>{event.companions}</dd>
                </div>
                {event.location && (
                  <div>
                    <dt>{copy.locationField}</dt>
                    <dd>{event.location}</dd>
                  </div>
                )}
                {event.startTime && (
                  <div>
                    <dt>{copy.timeField}</dt>
                    <dd>{event.startTime}</dd>
                  </div>
                )}
              </dl>
              {(!event.location || !event.startTime) && (
                <p className="event-note">
                  {!event.location && !event.startTime
                    ? copy.detailsPending
                    : !event.location
                      ? copy.locationPending
                      : copy.timePending}
                </p>
              )}
              <PhotoSlot
                photo={photos.venue}
                fallback={copy.venueFallback}
                caption={copy.venueCaption}
                className="photo-slot--venue"
              />
            </div>
            <div className="ticket-panel">
              <span className="eyebrow">{event.name}</span>
              <h3>{copy.ticketTitle}</h3>
              <p>{ticketDescription}</p>
              <TicketButton />
              <span className="ticket-panel-footnote">
                {copy.ticketFootnote}
              </span>
            </div>
          </div>
        </section>

        <section
          id="duvidas"
          className="faq-section section-pad"
          aria-labelledby="faq-title"
        >
          <div className="shell faq-grid">
            <div>
              <p className="eyebrow">{copy.faqEyebrow}</p>
              <h2 id="faq-title">{copy.faqTitle}</h2>
            </div>
            <div className="faq-list">
              {event.faq.map((item) => (
                <details key={item.question}>
                  <summary>
                    {item.question}
                    <span className="faq-indicator" aria-hidden="true" />
                  </summary>
                  <p>
                    {item.kind === "tickets" ? ticketDescription : item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          className="closing section-pad"
          aria-labelledby="closing-title"
        >
          <div className="shell">
            <p className="eyebrow">{copy.closingEyebrow}</p>
            <h2 id="closing-title">{copy.closingTitle}</h2>
            {artworks.closing && (
              <Artwork asset={artworks.closing} className="closing-art" />
            )}
            <TicketButton />
            {artworks.logo && (
              <Artwork asset={artworks.logo} className="closing-brand" />
            )}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <div>
            <span className="footer-church">{event.church}</span>
            <p>{copy.footerLine}</p>
          </div>
          <nav className="footer-navigation" aria-label="Navegação pelo site">
            {event.navigation.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#inicio" className="text-link">
            {copy.backToTop}
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </footer>
      <div className="mobile-ticket">
        <span>
          {event.name}
          <small>{event.shortDate}</small>
        </span>
        <TicketButton />
      </div>
    </>
  );
}
