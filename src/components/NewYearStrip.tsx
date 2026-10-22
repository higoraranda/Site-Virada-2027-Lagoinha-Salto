import { eventConfig } from "../config";

export function NewYearStrip() {
  return (
    <div className="new-year-strip">
      <p className="sr-only">{eventConfig.copy.newYearStrip}</p>
      <div className="marquee-viewport" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((group) => (
            <div className="marquee-group" key={group}>
              {[0, 1, 2, 3].map((item) => (
                <span key={item}>{eventConfig.copy.newYearStrip}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
