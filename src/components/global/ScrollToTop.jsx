import { useState, useEffect, useCallback } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = useCallback(() => {
    setIsVisible(window.scrollY > 300);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    isVisible && (
      <div
        onClick={scrollToTop}
        className="fixed bottom-12 right-10 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center cursor-pointer mix-blend-screen z-[2000]"
      >
        <i className="fi fi-sr-angle-small-up text-2xl text-white"></i>
      </div>
    )
  );
};

export default ScrollToTop;
