import { useLayoutEffect } from "react";

export function useLockBodyScroll(lock = true) {
  useLayoutEffect(() => {
    const body = document.body;
    const originalStyle = window.getComputedStyle(body).overflow;

    if (lock) {
      body.style.overflow = "hidden"; // chặn scroll
    }

    return () => {
      body.style.overflow = originalStyle; // restore lại
    };
  }, [lock]);
}
