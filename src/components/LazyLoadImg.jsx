import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function LazyLoadImg({ link, name, className }) {
  return (
    <LazyLoadImage
      src={link}
      alt={name}
      effect="blur"
      className={className}
      wrapperClassName="w-full h-full"
      placeholderSrc="/portfolioImg/placeholder.png" // Path to your placeholder image
      placeholder={
        <img
          src="/portfolioImg/placeholder.png"
          alt={`Loading ${name}`}
          className={className}
        />
      }
      threshold={100} // Load when 100px from viewport
    />
  );
}
