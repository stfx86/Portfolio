import { useState } from "react";
import { FadeIn, Eyebrow, SectionHeading, Pill } from "./UI";
import { projects } from "../data/portfolio";

export default function Projects() {
  const [active, setActive] = useState(null);
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" aria-labelledby="projects-heading">
      <div className="section-wrap">
        <FadeIn>
          <Eyebrow>04 — Projets</Eyebrow>
          <SectionHeading id="projects-heading">Projets académiques</SectionHeading>
        </FadeIn>

        <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:0 }} aria-label="Projets">
          {projects.map((p, i) => {
            const isActive = active === i;
            const isHov = hovered === i;
            return (
              <FadeIn key={i} delay={i * 65}>
                <li
                  onClick={() => setActive(isActive ? null : i)}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  tabIndex={0}
                  onKeyDown={e => e.key === "Enter" && setActive(isActive ? null : i)}
                  aria-expanded={isActive}
                  style={{ borderBottom:"1px solid rgba(56,189,248,.07)", cursor:"pointer", outline:"none", transition:"background .25s", background:isHov||isActive?"rgba(201,168,76,.03)":"transparent" }}
                >
                  <div style={{ display:"flex", alignItems:"center", gap:"1.25rem", padding:"1.4rem 0" }}>
                    {/* Number */}
                    <span style={{ fontFamily:"var(--font-mono)", fontSize:".65rem", color:isActive?"var(--gold-light)":isHov?"var(--accent)":"var(--muted)", flexShrink:0, width:24, transition:"color .25s" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Content */}
                    <div style={{ flex:1, minWidth:0 }}>
                      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"baseline", gap:".75rem", marginBottom:".5rem" }}>
                        <h3 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(1rem,2vw,1.25rem)", fontWeight:700, color:isActive?"var(--gold-light)":isHov?"var(--accent)":"var(--text)", transition:"color .25s", lineHeight:1.2 }}>{p.title}</h3>
                        <span style={{ fontFamily:"var(--font-mono)", fontSize:".65rem", color:"var(--muted)", flexShrink:0 }}>{p.year}</span>
                      </div>

                      {/* Animated expand */}
                      <div style={{ maxHeight:isActive?"140px":"0", overflow:"hidden", transition:"max-height .38s cubic-bezier(.25,.46,.45,.94)" }}>
                        <p style={{ fontFamily:"var(--font-body)", fontWeight:400, fontSize:".875rem", color:"var(--sub)", lineHeight:1.7, marginBottom:".85rem" }}>{p.desc}</p>
                      </div>

                      <ul style={{ listStyle:"none", display:"flex", flexWrap:"wrap", gap:".35rem" }}>
                        {p.tags.map(t => <li key={t}><Pill label={t} color={isActive?"gold":isHov?"blue":"default"} /></li>)}
                      </ul>
                    </div>

                    {/* +/- icon */}
                    <span aria-hidden="true" style={{ fontFamily:"var(--font-mono)", fontSize:"1.1rem", fontWeight:300, color:isActive?"var(--gold-light)":isHov?"var(--accent)":"var(--muted)", flexShrink:0, width:20, textAlign:"center", transform:isActive?"rotate(45deg)":"none", transition:"all .3s cubic-bezier(.34,1.56,.64,1)" }}>+</span>
                  </div>
                </li>
              </FadeIn>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
