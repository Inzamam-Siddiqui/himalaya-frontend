import { cn } from "../utils";
import React, { useEffect, useState } from "react";

export const ProductBanner = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className = ""
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!start) {
      addAnimation();
    }
  }, []);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  };

  const getDirection = () => {
    containerRef.current?.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
  };

  const getSpeed = () => {
    let duration = "40s";
    if (speed === "fast") duration = "20s";
    if (speed === "slow") duration = "80s";
    containerRef.current?.style.setProperty("--animation-duration", duration);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative w-full",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 sm:gap-10 md:gap-12 animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={`card-${idx}`}
            className="shrink-0 w-[80px] sm:w-[120px] md:w-[160px] lg:w-[200px] transition hover:scale-150"
          >
            <img
              src={item}
              alt={`banner-${idx}`}
              className="rounded-xl object-cover w-full h-24 sm:h-32 md:h-40 lg:h-48"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
