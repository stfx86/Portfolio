import { useState } from "react";
import { FadeIn, Eyebrow, SectionHeading, GlowCard } from "./UI";
import { formation } from "../data/portfolio";

export default function Formation() {
  const [open, setOpen] = useState(null);
  const [hovered, setHovered] = useState(null);

  return (
    <section id="formation" aria-labelledby="formation-heading">
      <div className="section-wrap">
        <FadeIn>
          <Eyebrow>02 — Formation</Eyebrow>
          <SectionHeading id="formation-heading">Parcours académique</SectionHeading>
        </FadeIn>

        <ol style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:".75rem" }}>
          {formation.map((item, i) => (
            <FadeIn key={i} delay={i * 75}>
              <li>
                <GlowCard
                  active={open === i}
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{ padding:"1.4rem 1.6rem" }}
                >
                  <div style={{ display:"flex", alignItems:"center", gap:"1.25rem" }}
                    onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>

                    {/* Year badge */}
                    <div style={{ fontFamily:"var(--font-mono)", fontSize:".65rem", letterSpacing:".06em", color:open===i||hovered===i?"var(--gold-light)":"var(--muted)", background:open===i||hovered===i?"rgba(201,168,76,.1)":"rgba(56,189,248,.05)", border:`1px solid ${open===i||hovered===i?"rgba(201,168,76,.3)":"rgba(56,189,248,.1)"}`, padding:".3rem .65rem", borderRadius:"4px", flexShrink:0, transition:"all .3s" }}>{item.year}</div>

                    {/* Content */}
                    <div style={{ flex:1, minWidth:0 }}>
                      <p style={{ fontFamily:"var(--font-display)", fontWeight:700, fontSize:"1rem", color:"var(--text)", lineHeight:1.25, marginBottom:".2rem" }}>
                        {item.degree} <span style={{ fontWeight:400, color:open===i||hovered===i?"var(--gold-light)":"var(--sub)", transition:"color .3s" }}>— {item.field}</span>
                      </p>
                      <p style={{ fontFamily:"var(--font-mono)", fontSize:".7rem", color:open===i?"var(--accent)":"var(--muted)", transition:"color .3s" }}>{item.school}</p>
                    </div>

                    {/* Chevron */}
                    <span aria-hidden="true" style={{ color:open===i?"var(--gold-light)":"var(--muted)", fontSize:".8rem", flexShrink:0, transform:open===i?"rotate(180deg)":"none", transition:"all .3s cubic-bezier(.34,1.56,.64,1)" }}>▾</span>
                  </div>

                  {/* Expand panel */}
                  <div style={{ maxHeight:open===i?"80px":"0", overflow:"hidden", transition:"max-height .35s ease" }}>
                    {item.note && (
                      <p style={{ fontFamily:"var(--font-body)", fontWeight:300, fontSize:".875rem", color:"var(--sub)", lineHeight:1.7, paddingTop:".85rem", paddingLeft:"calc(1.25rem + 60px)", borderTop:`1px solid rgba(201,168,76,.1)`, marginTop:".85rem" }}>{item.note}</p>
                    )}
                  </div>
                </GlowCard>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
