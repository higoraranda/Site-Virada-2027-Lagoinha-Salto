import { useEffect, useState } from "react";
import { eventConfig } from "../config";
import { getCountdown } from "../lib/countdown";

const target = Date.parse(eventConfig.countdownTarget);
const units = [
  ["days", "Dias"],
  ["hours", "Horas"],
  ["minutes", "Minutos"],
  ["seconds", "Segundos"],
] as const;

export function Countdown() {
  const [count, setCount] = useState(() => getCountdown(target, Date.now()));
  useEffect(() => {
    const current = getCountdown(target, Date.now());
    setCount(current);
    if (current.finished) return;
    const interval = window.setInterval(() => {
      const next = getCountdown(target, Date.now());
      setCount(next);
      if (next.finished) window.clearInterval(interval);
    }, 1000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="countdown">
      <div role="status" aria-atomic="true">
        {count.finished && (
          <p className="celebration">{eventConfig.copy.celebration}</p>
        )}
      </div>
      {!count.finished && (
        <div
          className="countdown-grid"
          aria-live="off"
          role="group"
          aria-label={eventConfig.copy.countdownLabel}
        >
          {units.map(([key, label]) => (
            <div className="countdown-unit" key={key} aria-label={label}>
              <span className="countdown-number">
                {String(count[key]).padStart(2, "0")}
              </span>
              <span className="countdown-label">{label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
