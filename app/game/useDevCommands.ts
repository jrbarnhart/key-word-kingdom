import { useEffect } from "react";

export default function useDevCommands({ keyWords }: { keyWords: string[] }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Object.defineProperty(window, "showKeyWords", {
        get() {
          return keyWords;
        },
        configurable: true,
      });
    }

    return () => {
      if (typeof window !== "undefined" && "showKeyWords" in window) {
        delete window.showKeyWords;
      }
    };
  }, [keyWords]);
}
