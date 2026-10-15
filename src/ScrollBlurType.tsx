// Adaptado por FlowCore Soluções LTDA · flowcoresolucoes.com.br/codigos
// Original: inspirado em Codrops (Scroll Blur Typography). Mantenha este crédito.

// Scroll Blur Typography — adaptado pela FlowCore Soluções
// Letras com blur que limpa quando entra em foco no scroll.
import { useEffect, useState } from "react";

const ScrollBlurType = ({ text = "FLOWCORE ENGENHARIA TÉCNICA" }: { text?: string }) => {
  const [focus, setFocus] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setFocus((f) => (f + 1) % text.length), 180);
    return () => clearInterval(id);
  }, [text.length]);
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#020617", borderRadius: 12, padding: 24 }}>
      <h2 style={{ fontFamily: "Impact, sans-serif", fontSize: "clamp(28px, 5.5vw, 64px)", fontWeight: 900, color: "#3FB5FF", margin: 0, lineHeight: 1.05, textAlign: "center", textTransform: "uppercase", letterSpacing: "0.04em" }}>
        {text.split("").map((ch, i) => {
          const dist = Math.abs(i - focus);
          const blur = Math.min(8, dist * 1.2);
          return <span key={i} style={{ filter: `blur(${blur}px)`, opacity: 1 - dist * 0.04, transition: "filter 0.2s linear, opacity 0.2s linear" }}>{ch}</span>;
        })}
      </h2>
    </div>
  );
};

export default ScrollBlurType;
