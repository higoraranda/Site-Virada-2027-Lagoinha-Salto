import { eventConfig } from "../config";
import { getPurchaseUrl } from "../lib/tickets";

type Props = {
  url?: string;
  className?: string;
};

export function TicketButton({
  url = eventConfig.ticketUrl,
  className = "",
}: Props) {
  const href = getPurchaseUrl(url);
  const classes = `ticket-button ticket-button--yellow ${className}`;
  if (!href) {
    return (
      <button type="button" className={classes} disabled data-ticket>
        {eventConfig.copy.unavailable}
        <span aria-hidden="true">↗</span>
      </button>
    );
  }
  return (
    <a
      className={classes}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-ticket
    >
      {eventConfig.copy.available}
      <span aria-hidden="true">↗</span>
      <span className="sr-only"> — {eventConfig.copy.external}</span>
    </a>
  );
}
