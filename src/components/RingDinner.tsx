import { useState } from "react";
import { eventConfig, type Photo } from "../config";

function MemoryPhoto({
  photo,
  decorative,
}: {
  photo: Photo | null;
  decorative: boolean;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="memory-card">
      {photo && !failed ? (
        <img
          src={photo.src}
          alt={decorative ? "" : photo.alt}
          loading="lazy"
          style={{
            objectFit: photo.fit ?? "cover",
            objectPosition: photo.position ?? "center",
          }}
          onError={() => setFailed(true)}
        />
      ) : (
        <span>{eventConfig.copy.dinnerPhotosPending}</span>
      )}
    </div>
  );
}

export function PastDinner() {
  const { copy, photos } = eventConfig;
  const pictures = photos.pastDinner.length
    ? photos.pastDinner
    : Array.from({ length: 6 }, () => null);
  return (
    <section
      id="ano-passado"
      className="past-dinner section-pad"
      aria-labelledby="past-dinner-title"
    >
      <div className="shell dinner-heading">
        <div>
          <p className="eyebrow">{copy.dinnerEyebrow}</p>
          <h2 id="past-dinner-title">{copy.dinnerTitle}</h2>
        </div>
        <p>{copy.dinnerDescription}</p>
      </div>
      <div
        className="photo-marquee"
        role="region"
        aria-roledescription="carrossel"
        aria-label={copy.dinnerGalleryLabel}
      >
        <div className="photo-marquee-track">
          {[0, 1].map((group) => (
            <div
              className="photo-marquee-group"
              key={group}
              aria-hidden={group === 1 ? true : undefined}
            >
              {pictures.map((photo, i) => (
                <MemoryPhoto
                  key={photo?.src ?? i}
                  photo={photo}
                  decorative={group === 1}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
