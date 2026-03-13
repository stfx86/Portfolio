import { useState, useEffect } from "react";
import { NAV_ITEMS } from "../constants/nav";

export default function Navbar({ active }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header role="banner" style={{ position:"fixed", top:0, left:0, right:0, zIndex:100, background:scrolled?"rgba(5,8,16,.92)":"rgba(5,8,16,.6)", backdropFilter:"blur(20px)", WebkitBackdropFilter:"blur(20px)", borderBottom:scrolled?"1px solid rgba(56,189,248,.12)":"1px solid transparent", transition:"all .4s" }}>
      <div style={{ maxWidth:1040, margin:"0 auto", padding:"0 clamp(1.5rem,5vw,4.5rem)", height:58, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <a href="#about" style={{ textDecoration:"none", display:"flex", alignItems:"center", gap:".5rem" }}>
          <span style={{ fontFamily:"var(--font-display)", fontWeight:800, fontSize:"1.1rem", background:"linear-gradient(135deg,#38bdf8,#c9a84c)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", letterSpacing:"-.02em" }}>NY.</span>
        </a>
        <nav aria-label="Navigation principale" style={{ display:"flex", gap:".05rem" }}>
          {NAV_ITEMS.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <a key={id} href={`#${id}`}
                style={{ fontFamily:"var(--font-mono)", fontSize:".68rem", letterSpacing:".07em", textTransform:"uppercase", color:isActive?"var(--gold-light)":"var(--muted)", textDecoration:"none", padding:".38rem .72rem", borderRadius:"var(--radius-sm)", background:isActive?"rgba(201,168,76,.08)":"transparent", border:`1px solid ${isActive?"rgba(201,168,76,.25)":"transparent"}`, transition:"all .25s", position:"relative" }}
              >{label}</a>
            );
          })}
        </nav>
      </div>
      {/* Gold-blue progress bar */}
      <div style={{ position:"absolute", bottom:0, left:0, height:"1px", width:"100%", background:"linear-gradient(90deg, transparent, rgba(56,189,248,.5) 30%, rgba(201,168,76,.6) 70%, transparent)", opacity:scrolled?1:0, transition:"opacity .4s" }} />
    </header>
  );
}
