"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Wraps the category grid and swaps the mouse pointer for the hovered card's
 * illustrated icon. Uses a single floating element (pointer-events: none) that
 * tracks the cursor via requestAnimationFrame — no per-card listeners, no React
 * state churn on every mouse move. Only engages for fine pointers (real mice);
 * touch devices keep their native behavior untouched.
 */
export default function CategoryCursor({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const root = rootRef.current;
    const cur = cursorRef.current;
    const img = imgRef.current;
    if (!root || !cur || !img) return;

    let raf = 0;
    let x = 0;
    let y = 0;
    let active = false;
    let src = "";

    const render = () => {
      raf = 0;
      cur.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;

      const card = (e.target as HTMLElement | null)?.closest<HTMLElement>(
        "[data-cursor]",
      );
      const next = card?.dataset.cursor ?? "";

      if (next) {
        if (next !== src) {
          src = next;
          img.src = next;
        }
        if (!active) {
          active = true;
          root.classList.add("cc-on");
        }
      } else if (active) {
        active = false;
        src = "";
        root.classList.remove("cc-on");
      }

      if (!raf) raf = requestAnimationFrame(render);
    };

    const onLeave = () => {
      if (!active) return;
      active = false;
      src = "";
      root.classList.remove("cc-on");
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("blur", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("blur", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={rootRef} className="cc-root">
      {children}
      <div ref={cursorRef} aria-hidden className="cc-cursor">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img ref={imgRef} alt="" draggable={false} />
      </div>
    </div>
  );
}
