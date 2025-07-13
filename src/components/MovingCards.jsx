import { cn } from "../utils";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!start) {
      addAnimation();
    }
  }, []);

  function addAnimation() {
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
  }

  const getDirection = () => {
    containerRef.current?.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
  };

  const getSpeed = () => {
    let duration = "40s"; // default: normal
    if (speed === "fast") duration = "20s";
    if (speed === "slow") duration = "80s";
    containerRef.current?.style.setProperty("--animation-duration", duration);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden mx-auto [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-6 py-4 animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
         <li
         className="w-[350px] md:w-[450px] shrink-0 rounded-2xl border border-teal-300 bg-white text-left px-6 py-6 shadow-md transition hover:scale-[1.02]"
         key={`${item.name}-${idx}`}
       >
         <blockquote>
           <h3 className="text-lg md:text-xl font-semibold text-teal-700 mb-2">{item.name}</h3>
           <p className="text-sm text-teal-500 mb-1 font-medium italic">{item.title}</p>
           <p className="text-gray-700 text-sm leading-relaxed mb-3">{item.quote}</p>
           <p className="text-sm text-gray-500 font-semibold italic">“{item.tagline}”</p>
         </blockquote>
       </li>       
        ))}
      </ul>
    </div>
  );
};
