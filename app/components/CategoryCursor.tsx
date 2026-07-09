"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

/**
 * Wraps the category grid and swaps the mouse pointer for the hovered card's
 * illustrated icon. Uses a single floating element (pointer-events: none) that
 * tracks the cursor via requestAnimationFrame — no per-card listeners, no React
 * state churn on every mouse move. Only engages for fine pointers (real mice);
 * touch devices keep their native behavior untouched.
 *
 * The icon is portalled into <body> rather than left inside the grid: it is
 * positioned with viewport coordinates (pointermove's clientX/clientY), and
 * ScrollRevealer puts `transform`/`filter`/`will-change` on every <section>,
 * which makes that section — not the viewport — the containing block for any
 * `position: fixed` descendant. Portalling keeps the two coordinate spaces the
 * same no matter what the surrounding sections animate.
 */
export default function CategoryCursor({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  // <body> only exists once we're on the client, so the portal waits for mount.
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
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

    // `cc-on` lands on the root (to hide the OS pointer over the cards) and on
    // the icon itself (to fade it in) — they're no longer nested.
    const show = () => {
      active = true;
      root.classList.add("cc-on");
      cur.classList.add("cc-on");
    };
    const hide = () => {
      active = false;
      src = "";
      root.classList.remove("cc-on");
      cur.classList.remove("cc-on");
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
        if (!active) show();
      } else if (active) {
        hide();
      }

      if (!raf) raf = requestAnimationFrame(render);
    };

    const onLeave = () => {
      if (!active) return;
      hide();
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("blur", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("blur", onLeave);
      if (raf) cancelAnimationFrame(raf);
      root.classList.remove("cc-on");
      cur.classList.remove("cc-on");
    };
  }, [mounted]);

  return (
    <div ref={rootRef} className="cc-root">
      {children}
      {mounted &&
        createPortal(
          <div ref={cursorRef} aria-hidden className="cc-cursor">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img ref={imgRef} alt="" draggable={false} />
          </div>,
          document.body,
        )}
    </div>
  );
}
