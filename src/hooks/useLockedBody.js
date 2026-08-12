import { useEffect, useLayoutEffect } from "react";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function useLockedBody(locked = false) {
  useIsomorphicLayoutEffect(() => {
    if (!locked) {
      return;
    }

    // Guardar el padding original y el overflow original
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    // Prevenir el salto del layout al ocultar la barra de scroll (solo en pantallas no táctiles)
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = originalPaddingRight;
      }
    };
  }, [locked]);
}
