import { useState, type CSSProperties } from "react";
import type { ImageAsset, Photo } from "../config";

export function Artwork({
  asset,
  className = "",
  fallback,
}: {
  asset: ImageAsset | null;
  className?: string;
  fallback?: React.ReactNode;
}) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  return asset && failedSrc !== asset.src ? (
    <img
      className={`artwork ${className}`}
      src={asset.src}
      alt={asset.alt}
      width={asset.width}
      height={asset.height}
      onError={() => setFailedSrc(asset.src)}
    />
  ) : (
    fallback
  );
}

export function PhotoSlot({
  photo,
  fallback,
  caption,
  className = "",
}: {
  photo: Photo | null;
  fallback: string;
  caption: string;
  className?: string;
}) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);
  const style = {
    "--photo-ratio": photo?.aspectRatio ?? "4 / 3",
    "--photo-position": photo?.position ?? "50% 50%",
    "--photo-fit": photo?.fit ?? "contain",
  } as CSSProperties;
  return (
    <figure className={`photo-slot ${className}`} style={style}>
      <div className="photo-frame">
        {photo && photo.src !== failedSrc ? (
          <img
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            onError={() => setFailedSrc(photo.src)}
          />
        ) : (
          <p className="photo-fallback">{fallback}</p>
        )}
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
