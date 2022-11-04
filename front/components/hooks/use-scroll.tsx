import * as React from "react";

const THRESHOLD = 30;

type Direction = "up" | "down";

function useScroll() {
  const [scrollDirection, setScrollDirection] = React.useState<Direction>("up");
  const [isTopPage, setIsTopPage] = React.useState<boolean>(true);

  const blocking = React.useRef(false);
  const prevScrollY = React.useRef(0);

  React.useEffect(() => {
    prevScrollY.current = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - prevScrollY.current) >= THRESHOLD) {
        const newScrollDirection =
          scrollY > prevScrollY.current ? "down" : "up";

        setScrollDirection(newScrollDirection);

        const newIsTopPage = scrollY - THRESHOLD <= 0;

        setIsTopPage(newIsTopPage);

        prevScrollY.current = scrollY > 0 ? scrollY : 0;
      }

      blocking.current = false;
    };

    const onScroll = () => {
      if (!blocking.current) {
        blocking.current = true;
        window.requestAnimationFrame(updateScrollDirection);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDirection]);

  return { scrollDirection, isTopPage };
}

export { useScroll };
