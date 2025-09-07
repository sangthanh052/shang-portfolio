import { useLayoutEffect } from "react";

export function useLockBodyScroll(lock = true) {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (lock) {
      document.body.style.overflow = "hidden"; // chặn scroll
    }

    return () => {
      document.body.style.overflow = originalStyle; // restore lại
    };
  }, [lock]);
}
