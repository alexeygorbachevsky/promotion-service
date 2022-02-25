import { useState } from "react";

export const useIsScroll = () => {
  const [containerRef, setContainerRef] = useState(null);
  const [isScroll, setIsScroll] = useState(false);

  const containerRefCallback = node => {
    setContainerRef(node);
    if (node) {
      setIsScroll(node.scrollHeight > node.clientHeight);
    }
  };

  return {
    isScroll,
    containerRefCallback,
    containerRef,
  };
};
