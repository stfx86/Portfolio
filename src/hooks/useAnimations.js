import { useState, useEffect, useRef, useCallback } from "react";

export function useFadeIn(delay = 0, threshold = 0.06) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const ob = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => setVisible(true), delay); ob.disconnect(); }
    }, { threshold });
    ob.observe(el);
    return () => ob.disconnect();
  }, [delay, threshold]);
  return [ref, visible];
}

export function useCounter(target, trigger) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let n = 0; const step = Math.ceil(target / 45);
    const t = setInterval(() => { n = Math.min(n + step, target); setVal(n); if (n >= target) clearInterval(t); }, 25);
    return () => clearInterval(t);
  }, [trigger, target]);
  return val;
}

export function useTypewriter(text, speed = 38) {
  const [output, setOutput] = useState("");
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => { setOutput(text.slice(0, i + 1)); i++; if (i >= text.length) clearInterval(t); }, speed);
    return () => clearInterval(t);
  }, [text, speed]);
  return output;
}

export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const ob = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { threshold: 0.3 });
    ids.forEach(id => { const el = document.getElementById(id); if (el) ob.observe(el); });
    return () => ob.disconnect();
  }, [ids]);
  return active;
}

export function useMagnet(strength = 0.3) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const onMove = useCallback((e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    setOffset({ x: (e.clientX - cx) * strength, y: (e.clientY - cy) * strength });
  }, [strength]);
  const onLeave = useCallback(() => setOffset({ x: 0, y: 0 }), []);
  return [ref, offset, onMove, onLeave];
}
