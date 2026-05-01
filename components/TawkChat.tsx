"use client";

import { useEffect } from "react";

export default function TawkChat() {
  useEffect(() => {
    // Optional: customize position via Tawk API
    (window as any).Tawk_API = (window as any).Tawk_API || {};
    (window as any).Tawk_API.customStyle = {
      zIndex: 9998, // just below WhatsApp button's 9999
    };

    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/69eb171447a5081c306496c2/default";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode?.insertBefore(s1, s0);
  }, []);

  return null;
}