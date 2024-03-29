import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationDirection, setAnimationDirection] = useState("down");

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
      setAnimationDirection("down");
    } else {
      setAnimationDirection("up");
      setTimeout(() => setIsVisible(false), 100); // Delay hiding the button after the animation
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          className={`bg-primary-one fixed bottom-4 z-50 right-4 w-10 h-10 rounded-full text-white flex items-center justify-center ${
            animationDirection === "down"
              ? "animate__slideInDown"
              : "animate__slideOutUp"
          }`}
          onClick={scrollToTop}
          title="Back to top"
        >
          <div>
            <FontAwesomeIcon icon={faArrowUp} />
          </div>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
