import { useState } from "react";
import { FadeIn, Eyebrow, SectionHeading, GhostBtn, GlowCard } from "./UI";
import { profile, activities } from "../data/portfolio";

const LINKS = [
  { label:"E-mail",    value:profile.email,           href:`mailto:${profile.email}`,  ext:false },
  { label:"Téléphone", value:profile.phone,            href:`tel:+212684706156`,         ext:false },
  { label:"GitHub",    value:profile.github.label,     href:profile.github.url,          ext:true  },
  { label:"LinkedIn",  value:profile.linkedin.label,   href:profile.linkedin.url,        ext:true  },
  { label:"Instagram", value:profile.instagram.label,  href:profile.instagram.url,       ext:true  },
  { label:"Facebook", value:profile.Facebook.label,  href:profile.Facebook.url,       ext:true  },
];

function LinkCard({ item, index }) {
  const [h, setH] = useState(false);
  return (
    <a href={item.href} target={item.ext?"_blank":undefined} rel={item.ext?"noopener noreferrer":undefined}
      aria-label={`${item.label}${item.ext?" (nouvel onglet)":""}`}
      style={{ display:"flex", justifyContent:"space-between", alignItems:"center", gap:"1rem", padding:"1.1rem 1.4rem", background:h?"rgba(201,168,76,.05)":"rgba(56,189,248,.02)", border:`1px solid ${h?"rgba(201,168,76,.35)":"rgba(56,189,248,.1)"}`, borderRadius:"var(--radius)", textDecoration:"none", color:"inherit", transition:"all .3s", transform:h?"translateX(4px)":"none", boxShadow:h?"0 4px 24px rgba(201,168,76,.1)":"none" }}
      onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    >
      <div>
        <div style={{ fontFamily:"var(--font-mono)", fontSize:".62rem", letterSpacing:".1em", textTransform:"uppercase", color:h?"var(--gold)":"var(--muted)", marginBottom:".2rem", transition:"color .25s" }}>{item.label}</div>
        <div style={{ fontFamily:"var(--font-body)", fontSize:".875rem", fontWeight:600, color:h?"var(--gold-light)":"var(--text)", transition:"color .25s" }}>{item.value}</div>
      </div>
      <span aria-hidden="true" style={{ fontFamily:"var(--font-mono)", fontSize:".75rem", color:h?"var(--gold-light)":"var(--muted)", transition:"all .25s", transform:h?"translate(2px,-2px)":"none" }}>{item.ext?"↗":"→"}</span>
    </a>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [actOpen, setActOpen] = useState(null);
  const copy = () => { try{navigator.clipboard?.writeText(profile.email);}catch(_){} setCopied(true); setTimeout(()=>setCopied(false),2200); };

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="section-wrap" style={{ paddingBottom:"7rem" }}>
        <FadeIn>
          <Eyebrow>05 — Contact</Eyebrow>
          <SectionHeading id="contact-heading">Prendre contact</SectionHeading>
          <p style={{ fontFamily:"var(--font-body)", color:"var(--sub)", fontSize:".9375rem", maxWidth:450, marginBottom:"2.5rem", lineHeight:1.78 }}>
            Disponible pour un stage en IA, Data Science ou développement.
          </p>
        </FadeIn>

        {/* Contact links grid */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))", gap:".75rem", marginBottom:"1.5rem" }}>
          {LINKS.map((l,i) => <FadeIn key={l.label} delay={i*55}><LinkCard item={l} index={i} /></FadeIn>)}
        </div>

        <FadeIn delay={320}>
          <GhostBtn onClick={copy}>{copied ? "✓ Copié !" : "Copier l'e-mail"}</GhostBtn>
        </FadeIn>

        {/* Activities */}
        <FadeIn delay={420}>
          <div style={{ marginTop:"3.5rem", paddingTop:"2.5rem", borderTop:"1px solid rgba(56,189,248,.08)" }}>
            <p style={{ fontFamily:"var(--font-mono)", fontSize:".65rem", letterSpacing:".14em", textTransform:"uppercase", color:"var(--accent)", marginBottom:"1.25rem" }}>Activités & distinctions</p>
            <div style={{ display:"flex", flexDirection:"column", gap:".65rem" }}>
              {activities.map((a, i) => (
                <FadeIn key={i} delay={i * 60}>
                  <GlowCard active={actOpen===i} onClick={()=>setActOpen(actOpen===i?null:i)} style={{ padding:"1.1rem 1.4rem" }}>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:"1rem" }}>
                      <div>
                        <p style={{ fontFamily:"var(--font-display)", fontWeight:700, fontSize:".95rem", color:"var(--text)", marginBottom:".2rem" }}>{a.title}</p>
                        <p style={{ fontFamily:"var(--font-mono)", fontSize:".68rem", color:actOpen===i?"var(--gold-light)":"var(--accent)", transition:"color .25s" }}>{a.org}</p>
                      </div>
                      <span aria-hidden="true" style={{ fontFamily:"var(--font-mono)", fontSize:"1rem", color:actOpen===i?"var(--gold-light)":"var(--muted)", transform:actOpen===i?"rotate(45deg)":"none", transition:"all .3s cubic-bezier(.34,1.56,.64,1)", flexShrink:0 }}>+</span>
                    </div>
                    <div style={{ maxHeight:actOpen===i?"80px":"0", overflow:"hidden", transition:"max-height .32s ease" }}>
                      <p style={{ fontFamily:"var(--font-body)", fontWeight:400, fontSize:".875rem", color:"var(--sub)", lineHeight:1.7, paddingTop:".75rem", borderTop:"1px solid rgba(201,168,76,.1)", marginTop:".75rem" }}>{a.desc}</p>
                    </div>
                  </GlowCard>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
