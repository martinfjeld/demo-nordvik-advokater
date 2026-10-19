(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,[727059,e=>{var t=e.i(843476),n=e.i(271645);e.s(["Cursor",0,function(){let e=(0,n.useRef)(null);return(0,n.useEffect)(()=>{if(!matchMedia("(pointer: fine)").matches)return;let t=e.current,n=e=>{t.style.transform=`translate(${e.clientX}px, ${e.clientY}px)`},s=e=>t.classList.toggle("is-big",!!e.target.closest?.("a, button, .seat, .ds-row"));return addEventListener("pointermove",n),addEventListener("pointerover",s),()=>{removeEventListener("pointermove",n),removeEventListener("pointerover",s)}},[]),(0,t.jsx)("div",{ref:e,className:"cursor","aria-hidden":"true"})}])},828260,e=>{var t=e.i(843476),n=e.i(271645);e.s(["FitText",0,function({children:e,className:s,max:a=520}){let r=(0,n.useRef)(null),o=(0,n.useRef)(null),[i,l]=(0,n.useState)(null);return(0,n.useLayoutEffect)(()=>{let e=r.current,t=o.current;if(!e||!t)return;let n=()=>{let n=e.clientWidth;t.style.fontSize="100px";let s=Math.min(a,n/(t.getBoundingClientRect().width||1)*100);t.style.fontSize=`${s}px`,s=Math.min(a,s*(n/(t.getBoundingClientRect().width||1))),t.style.fontSize="",l(s)};n();let s=new ResizeObserver(n);return s.observe(e),s.observe(t),document.fonts?.ready.then(n),document.fonts?.addEventListener?.("loadingdone",n),()=>{s.disconnect(),document.fonts?.removeEventListener?.("loadingdone",n)}},[a]),(0,t.jsx)("div",{ref:r,className:s,style:{fontSize:i??void 0,visibility:null===i?"hidden":void 0},children:(0,t.jsx)("span",{ref:o,style:{display:"inline-block",whiteSpace:"nowrap"},children:e})})}])},596199,e=>{var t=e.i(30747),n=e.i(271645);let s="[data-reveal], .ed-card, .ed-figure, .ed-links li, .ed-h2, .ed-body, .hero-film__inner > *, .ed-band__text > *, .ed-signup__text > *, .ed-signup__form > *, .ed-tile-wrap, .ed-shortcuts__intro, .ed-logo-wrap, .ed-hs__pin, .ed-chap__title, .ed-chap__link, .ed-shape__text > *, .ed-shape__list li, .ed-people__intro > *, .ed-pillcta__btn";e.s(["Reveal",0,function(){return(0,n.useEffect)(()=>{if((0,t.f)())return;let e=[...document.querySelectorAll(s)],n=[];for(let t of e){let e=t.parentElement?[...t.parentElement.children].filter(e=>e.matches(s)):[t];t.style.setProperty("--ri",String(e.indexOf(t))),t.classList.add("rv");let a=t.getBoundingClientRect();a.top<innerHeight&&a.bottom>0&&n.push(t)}document.getElementById("prehide-style")?.remove();let a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>n.forEach(e=>e.classList.add("rv-in")))}),r=(e,t)=>{for(let n of e)n.isIntersecting&&(n.target.classList.add("rv-in"),t.unobserve(n.target))},o=new IntersectionObserver(r,{rootMargin:"0px 0px -8% 0px",threshold:.05}),i=new IntersectionObserver(r,{threshold:.01});return e.forEach(e=>(e.closest(".ed-footer")?i:o).observe(e)),()=>{cancelAnimationFrame(a),o.disconnect(),i.disconnect()}},[]),null}],596199)},393076,e=>{var t=e.i(843476),n=e.i(30747),s=e.i(271645);e.s(["SmoothScroll",0,function({children:e,enabled:a=!0}){let r=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let e=r.current;if(!e)return;let t=document.documentElement,s=!a||matchMedia("(pointer: coarse)").matches||(0,n.f)(),o=scrollY,i=0,l=!1,d=()=>t.style.setProperty("--sy",`${o.toFixed(2)}px`);if(s){let e=()=>{i||(i=requestAnimationFrame(()=>{o=scrollY,d(),i=0}))};return d(),addEventListener("scroll",e,{passive:!0}),()=>{removeEventListener("scroll",e),cancelAnimationFrame(i),t.style.removeProperty("--sy")}}e.classList.add("is-smooth");let c=document.createElement("div");c.setAttribute("aria-hidden","true"),c.className="smooth-spacer",document.body.appendChild(c);let h=()=>{c.style.height=`${e.scrollHeight}px`};h();let f=new ResizeObserver(h);f.observe(e);let m=()=>{let t=scrollY;if(o+=(t-o)*.1,.3>Math.abs(t-o)&&(o=t),e.style.transform=`translate3d(0, ${-o.toFixed(2)}px, 0)`,d(),o===t){l=!1,i=0;return}i=requestAnimationFrame(m)},p=()=>{l||(l=!0,i=requestAnimationFrame(m))};p(),addEventListener("scroll",p,{passive:!0}),addEventListener("resize",h);let u=(e,t=!1)=>{let n=e&&"#"!==e&&"#top"!==e?document.querySelector(decodeURIComponent(e)):null,s=n?Math.max(0,n.getBoundingClientRect().top+o):0;t&&(o=s),scrollTo({top:s,behavior:"auto"}),p()},g=e=>{let t=e.target.closest('a[href*="#"]');if(!t||"_blank"===t.target||e.metaKey||e.ctrlKey)return;let n=new URL(t.href,location.href);n.pathname===location.pathname&&n.hash&&(e.preventDefault(),history.pushState(null,"",n.hash),u(n.hash))},y=()=>u(location.hash);return document.addEventListener("click",g),addEventListener("hashchange",y),location.hash&&requestAnimationFrame(()=>u(location.hash,!0)),()=>{removeEventListener("scroll",p),removeEventListener("resize",h),removeEventListener("hashchange",y),document.removeEventListener("click",g),f.disconnect(),cancelAnimationFrame(i),c.remove(),e.classList.remove("is-smooth"),e.style.transform="",t.style.removeProperty("--sy")}},[a]),(0,t.jsx)("div",{ref:r,className:"smooth",children:e})}])},369429,e=>{let t={fish:{label:"Fisk",motion:"swim",code:`// Fish, side view: body, tail, dorsal fin and an eye.
const points = []
const S = (a) => (rand() * 2 - 1) * a
for (let j = 0; j < N; j++) {
  let x, y, z
  const r = rand()
  if (r < 0.78) {            // body: a tapered ellipse, mostly on the surface
    x = S(1)
    const h = 0.42 * Math.pow(1 - x * x, 0.6) * (1 - 0.15 * x)
    y = S(h)
    const zt = 0.24 * Math.sqrt(Math.max(0, 1 - (y / h) ** 2)) * Math.sqrt(1 - x * x)
    z = rand() < 0.75 ? (rand() < 0.5 ? -zt : zt) : S(zt)
    if (rand() < 0.06) {     // eye ring
      const a = rand() * 6.283
      x = 0.68 + Math.cos(a) * 0.07; y = 0.1 + Math.sin(a) * 0.07; z = zt + 0.02
    }
  } else if (r < 0.94) {     // tail fan
    const u = rand()
    x = -1 - u * 0.6; y = S(0.06 + u * 0.44); z = S(0.02)
  } else {                   // dorsal fin
    x = -0.35 + rand() * 0.75
    const h = 0.42 * Math.pow(1 - x * x, 0.6)
    y = h + rand() * 0.28 * (1 - Math.abs(x) * 1.3); z = S(0.015)
  }
  points.push([x, y, z])
}
return points`},scallop:{label:"Kamskjell",motion:"float",code:`// Scallop, half open: fan of ribs, hinge and a pearl.
const points = []
const S = (a) => (rand() * 2 - 1) * a
const hy = -0.95, open = -0.62
for (let j = 0; j < N; j++) {
  let x, y, z
  const r = rand()
  if (r < 0.88) {            // two shells with radial ribs
    let th = S(1.12)
    if (rand() < 0.62) th = Math.round(th * 7) / 7 + S(0.012)
    const edge = 1.75 + 0.07 * Math.cos(th * 14)
    let rr = 0.18 + Math.sqrt(rand()) * (edge - 0.18)
    if (rand() < 0.12) rr = edge * (0.4 + Math.floor(rand() * 5) * 0.12)
    x = Math.sin(th) * rr; y = hy + Math.cos(th) * rr
    z = 0.34 * (1 - (rr / 1.9) ** 2) * Math.cos(th * 0.85) + 0.035 * Math.cos(th * 14)
    if (rand() < 0.5) {      // the lower shell, hinged open
      z = -z
      const dy = y - hy, c = Math.cos(open), s = Math.sin(open)
      const ny = hy + dy * c - z * s, nz = dy * s + z * c
      y = ny; z = nz - 0.05
    }
  } else if (r < 0.95) {     // hinge
    x = S(0.48); y = hy - 0.12 + rand() * 0.26; z = S(0.03)
  } else {                   // pearl
    const u = rand() * 6.283, v = Math.acos(S(1))
    x = 0.19 * Math.sin(v) * Math.cos(u); y = -0.25 + 0.19 * Math.sin(v) * Math.sin(u); z = 0.3 + 0.19 * Math.cos(v)
  }
  points.push([x, y, z])
}
return points`},langoustine:{label:"Sjøkreps",motion:"swim",code:`// Langoustine, side view facing right: carapace, segmented tail, tail fan, two long claws, antennae and legs.
const points = []
const S = (a) => (rand() * 2 - 1) * a
for (let j = 0; j < N; j++) {
  let x, y, z
  const r = rand()
  if (r < 0.26) {            // carapace: an elongated oval
    const a = rand() * 6.283, rr = Math.sqrt(rand())
    x = 0.35 + Math.cos(a) * 0.62 * rr; y = Math.sin(a) * 0.25 * rr; z = S(0.26) * Math.sqrt(1 - rr * rr)
  } else if (r < 0.5) {      // tail: six shrinking segments
    const seg = Math.floor(rand() * 6), a = rand() * 6.283
    const w = 0.21 - seg * 0.016
    x = -0.2 - seg * 0.21 + Math.cos(a) * 0.17; y = -seg * 0.012 + Math.sin(a) * w; z = S(0.22 - seg * 0.02)
  } else if (r < 0.58) {     // tail fan
    const k = Math.floor(rand() * 5) - 2, u = rand()
    const ang = k * 0.42, L = 0.42 * u
    x = -1.5 - Math.cos(ang) * L; y = -0.02 + Math.sin(ang) * L + S(0.07 * (1 - u)); z = k * 0.012
  } else if (r < 0.82) {     // claws: two long arms with open pincers
    const s = rand() < 0.5 ? 1 : -1, u = rand()
    if (u < 0.7) { x = 0.82 + u / 0.7 * 1.3; y = 0.12 * s + S(0.05); z = 0.11 * s + S(0.04) }
    else { const v = (u - 0.7) / 0.3, f = rand() < 0.5 ? 1 : -1; x = 2.12 + v * 0.46; y = 0.12 * s + f * (0.03 + v * 0.11); z = 0.11 * s + S(0.03) }
  } else if (r < 0.92) {     // antennae curving back over the body
    const s = rand() < 0.5 ? 1 : -1, u = rand()
    x = 1.0 + Math.sin(u * 2.4) * 0.7 - u * 1.5; y = 0.12 + u * 0.95 - Math.sin(u * 3.1) * 0.1; z = (0.1 + u * 0.4) * s
  } else {                   // legs and eyes
    if (rand() < 0.9) { const k = Math.floor(rand() * 4), s = rand() < 0.5 ? 1 : -1, u = rand(); x = 0.55 - k * 0.19 - u * 0.2; y = -0.2 - u * 0.3; z = 0.2 * s }
    else { const s = rand() < 0.5 ? 1 : -1, a = rand() * 6.283; x = 0.98 + Math.cos(a) * 0.05; y = 0.14 + Math.sin(a) * 0.05; z = 0.13 * s }
  }
  points.push([x, y, z])
}
return points`},frame:{label:"Takstol og reisverk",motion:"float",code:`// A timber house frame seen from the front: sill, studs, top plate and a roof truss with rafters and a king post.
const points = []
const S = (a) => (rand() * 2 - 1) * a
const beam = (x0, y0, x1, y1, w) => { const u = rand(); const dx = x1 - x0, dy = y1 - y0, L = Math.hypot(dx, dy) || 1; const nx = -dy / L, ny = dx / L; const o = S(w); return [x0 + dx * u + nx * o, y0 + dy * u + ny * o] }
const W = 1.6, H = 0.9, R = 0.75
for (let j = 0; j < N; j++) {
  let p
  const r = rand()
  if (r < 0.12) p = beam(-W, -1, W, -1, 0.06)                                  // sill
  else if (r < 0.24) p = beam(-W, H, W, H, 0.05)                               // top plate
  else if (r < 0.52) { const k = Math.floor(rand() * 7); const x = -W + (k / 6) * 2 * W; p = beam(x, -1, x, H, 0.04) } // studs
  else if (r < 0.72) p = rand() < 0.5 ? beam(-W, H, 0, H + R, 0.05) : beam(0, H + R, W, H, 0.05) // rafters
  else if (r < 0.8) p = beam(0, H, 0, H + R, 0.04)                             // king post
  else if (r < 0.9) p = rand() < 0.5 ? beam(-W / 2, H, 0, H + R / 2, 0.03) : beam(W / 2, H, 0, H + R / 2, 0.03) // struts
  else { const k = Math.floor(rand() * 6); const x = -W + (k / 6) * 2 * W + W / 6; p = beam(x - W / 6, -0.15, x + W / 6, -0.15, 0.03) } // noggins
  points.push([p[0], p[1], S(0.08)])
}
return points`},hammer:{label:"Hammer",motion:"float",code:`// Claw hammer: handle, steel head with striking face and curved claw.
const points = []
const S = (a) => (rand() * 2 - 1) * a
for (let j = 0; j < N; j++) {
  let x, y, z
  const r = rand()
  if (r < 0.5) {             // handle: slightly flared towards the grip
    const u = rand()
    const w = 0.11 + 0.05 * u
    x = -0.1 + S(w); y = 0.95 - u * 2.1; z = S(w * 0.7)
  } else if (r < 0.78) {     // head block
    x = S(0.42); y = 1.05 + S(0.17); z = S(0.17)
  } else if (r < 0.88) {     // striking face
    const a = rand() * 6.283, rr = Math.sqrt(rand()) * 0.17
    x = 0.42 + rand() * 0.08; y = 1.05 + Math.cos(a) * rr; z = Math.sin(a) * rr
  } else {                   // claw: two prongs curving down
    const u = rand(), s = rand() < 0.5 ? 1 : -1
    const a = u * 1.6
    x = -0.42 - Math.sin(a) * 0.5; y = 1.05 + 0.12 - (1 - Math.cos(a)) * 0.45 + S(0.03); z = s * (0.03 + u * 0.09)
  }
  points.push([x, y, z])
}
return points`},saw:{label:"Håndsag",motion:"float",code:`// Handsaw: tapered steel blade with teeth along the bottom and a closed wooden handle.
const points = []
const S = (a) => (rand() * 2 - 1) * a
for (let j = 0; j < N; j++) {
  let x, y, z
  const r = rand()
  if (r < 0.6) {             // blade, tapering towards the tip on the right
    const u = rand()
    const top = 0.42 - u * 0.3, bottom = -0.1
    x = -0.6 + u * 2.2; y = bottom + rand() * (top - bottom); z = S(0.01)
  } else if (r < 0.74) {     // teeth
    const u = rand(), k = Math.floor(u * 46)
    x = -0.6 + (k / 46) * 2.2 + rand() * 0.048; y = -0.1 - 0.05 * Math.abs(((x * 21) % 1) - 0.5) * 2 - rand() * 0.015; z = S(0.01)
  } else if (r < 0.86) {     // handle outline: rounded grip behind the blade
    const a = rand() * 6.283
    x = -0.95 + Math.cos(a) * 0.3; y = 0.16 + Math.sin(a) * 0.36; z = S(0.07)
  } else {                   // handle body
    const a = rand() * 6.283, rr = Math.sqrt(rand())
    x = -0.95 + Math.cos(a) * 0.3 * rr; y = 0.16 + Math.sin(a) * 0.36 * rr; z = S(0.07)
    if (Math.hypot((x + 0.95) / 0.16, (y - 0.16) / 0.2) < 1) { x = -0.6 + rand() * 0.2; y = S(0.2) }  // keep the grip hole open
  }
  points.push([x, y, z])
}
return points`},timber:{label:"Trelast",motion:"float",code:`// A stack of planks on two bearers, slightly staggered, seen from the front-side.
const points = []
const S = (a) => (rand() * 2 - 1) * a
const ROWS = 5, PER = 4
for (let j = 0; j < N; j++) {
  let x, y, z
  const r = rand()
  if (r < 0.9) {
    const row = Math.floor(rand() * ROWS), col = Math.floor(rand() * PER)
    const stag = (row % 2) * 0.12
    const cx = -1.2 + col * 0.8 + stag, cy = -0.8 + row * 0.34
    const face = rand()
    if (face < 0.55) { x = cx + S(0.37); y = cy + 0.15; z = S(0.5) }            // top faces
    else if (face < 0.85) { x = cx + S(0.37); y = cy + S(0.15); z = 0.5 }      // front faces
    else { x = cx + 0.37; y = cy + S(0.15); z = S(0.5) }                       // ends
    if (rand() < 0.08) { x = cx + S(0.37); y = cy + 0.15; z = S(0.5); }        // grain emphasis
  } else {                   // bearers under the stack
    const b = rand() < 0.5 ? -0.7 : 0.9
    x = b + S(0.12); y = -1.08 + S(0.1); z = S(0.5)
  }
  points.push([x, y, z])
}
return points`},level:{label:"Vater",motion:"float",code:`// Spirit level: a long box profile with three vials, the middle one on top.
const points = []
const S = (a) => (rand() * 2 - 1) * a
for (let j = 0; j < N; j++) {
  let x, y, z
  const r = rand()
  if (r < 0.7) {             // the body: edges and faces of a long box
    const u = rand() * 2 - 1
    const f = rand()
    if (f < 0.4) { x = u * 1.9; y = rand() < 0.5 ? -0.22 : 0.22; z = S(0.12) }
    else if (f < 0.8) { x = u * 1.9; y = S(0.22); z = rand() < 0.5 ? -0.12 : 0.12 }
    else { x = rand() < 0.5 ? -1.9 : 1.9; y = S(0.22); z = S(0.12) }
  } else if (r < 0.9) {      // three vials: openings in the body
    const which = Math.floor(rand() * 3), cx = [-1.2, 0, 1.2][which]
    const a = rand() * 6.283
    if (which === 1) { x = cx + Math.cos(a) * 0.3; y = 0.22 + Math.sin(a) * 0.06 + 0.03; z = S(0.11) }
    else { x = cx + Math.cos(a) * 0.08; y = Math.sin(a) * 0.14; z = 0.12 }
  } else {                   // the bubble in the middle vial
    const a = rand() * 6.283, rr = Math.sqrt(rand()) * 0.08
    x = Math.cos(a) * rr * 1.6; y = 0.27 + Math.sin(a) * rr * 0.5; z = S(0.08)
  }
  points.push([x, y, z])
}
return points`},lemon:{label:"Sitronskive",motion:"float",code:`// Lemon slice, tilted: rind, pith and ten segments.
const points = []
const S = (a) => (rand() * 2 - 1) * a
const SEG = 10
for (let j = 0; j < N; j++) {
  let rr, th
  const r = rand()
  if (r < 0.24) { rr = 1.08 + rand() * 0.13; th = rand() * 6.283 }              // rind
  else if (r < 0.31) { rr = 1 + rand() * 0.05; th = rand() * 6.283 }            // pith line
  else if (r < 0.43) { const s = Math.floor(rand() * SEG); th = s / SEG * 6.283 + S(0.006); rr = 0.08 + rand() * 0.92 } // segment walls
  else {                                                                         // flesh
    const s = Math.floor(rand() * SEG)
    th = (s + 0.1 + rand() * 0.8) / SEG * 6.283; rr = 0.14 + Math.sqrt(rand()) * 0.82
  }
  const x = Math.cos(th) * rr, y = Math.sin(th) * rr, z = S(0.07)
  const a = 0.55
  points.push([x, y * Math.cos(a) - z * Math.sin(a), y * Math.sin(a) + z * Math.cos(a)])
}
return points`},sea:{label:"Hav",motion:"wave",code:`// Sea surface: an even grid that the "wave" motion rolls.
const points = []
const cols = Math.ceil(Math.sqrt(N * 1.6)), rows = Math.ceil(N / cols)
for (let j = 0; j < N; j++) {
  const x = ((j % cols) / (cols - 1) - 0.5) * 5.4
  const z = (Math.floor(j / cols) / (rows - 1) - 0.5) * 3.6
  points.push([x, z * 0.32, z * 0.9])
}
return points`},text:{label:"Tekst (navnet)",motion:"float",code:`// Any word, set in the site's headline font. Change TEXT.
const TEXT = 'skj\xe6r'
const probe = document.createElement('span')
probe.style.fontFamily = 'var(--font-display), sans-serif'
document.body.appendChild(probe)
const font = getComputedStyle(probe).fontFamily || 'sans-serif'
probe.remove()
const W = 1200, H = 420
const c = document.createElement('canvas'); c.width = W; c.height = H
const g = c.getContext('2d')
g.fillStyle = '#fff'; g.textAlign = 'center'; g.textBaseline = 'middle'
g.font = '800 300px ' + font
g.fillText(TEXT, W / 2, H / 2, W - 40)
const d = g.getImageData(0, 0, W, H).data, filled = []
for (let y = 0; y < H; y += 2) for (let x = 0; x < W; x += 2) if (d[(y * W + x) * 4 + 3] > 128) filled.push([x, y])
const points = []
for (let j = 0; j < N; j++) {
  const [x, y] = filled[Math.floor(rand() * filled.length)]
  points.push([x / W - 0.5, -(y / H - 0.5) * (H / W), (rand() * 2 - 1) * 0.02])
}
return points`}},n=Object.entries(t).map(([e,t])=>({title:t.label,value:e}));e.s(["f",0,t,"x",0,function(e,t,n=7){let s,a,r=n,o=()=>(r=16807*r%0x7fffffff)/0x7fffffff;try{let n=/function\s+shape\s*\(/.test(e)&&!/return\s+shape\s*\(/.test(e)?`${e}
return shape(N, rand)`:e;s=Function("N","rand",`"use strict";
${n}`)(t,o)}catch(e){a=e.message}let i=[];if(Array.isArray(s)&&Array.isArray(s[0]))for(let e of s){let[t,n,s=0]=e;Number.isFinite(t)&&Number.isFinite(n)&&Number.isFinite(s)&&i.push(t,n,s)}else if(s&&"number"==typeof s.length){let e=s;for(let t=0;t+2<e.length;t+=3)Number.isFinite(e[t])&&Number.isFinite(e[t+1])&&Number.isFinite(e[t+2])&&i.push(e[t],e[t+1],e[t+2])}let l=i.length/3;if(!a&&l<10&&(a=void 0===s?"Koden returnerte ingenting. Husk «return points» på slutten.":"Fant ingen gyldige punkter. Returner en liste med [x, y, z]."),a||l<10){let e=new Float32Array(3*t);for(let n=0;n<t;n++){let t=6.283*o(),s=Math.acos(2*o()-1);e[3*n]=Math.sin(s)*Math.cos(t),e[3*n+1]=Math.sin(s)*Math.sin(t),e[3*n+2]=Math.cos(s)}return{points:e,error:a,raw:l}}let d=1/0,c=1/0,h=1/0,f=-1/0,m=-1/0,p=-1/0;for(let e=0;e<i.length;e+=3)d=Math.min(d,i[e]),f=Math.max(f,i[e]),c=Math.min(c,i[e+1]),m=Math.max(m,i[e+1]),h=Math.min(h,i[e+2]),p=Math.max(p,i[e+2]);let u=(d+f)/2,g=(c+m)/2,y=(h+p)/2,b=1/Math.max((f-d)/3.4,(m-c)/2.2,1e-6),x=new Float32Array(3*t);for(let e=0;e<t;e++){let n=l===t?e:Math.floor(o()*l);x[3*e]=(i[3*n]-u)*b,x[3*e+1]=(i[3*n+1]-g)*b,x[3*e+2]=(i[3*n+2]-y)*b}return{points:x,raw:l}},"p",0,n,"b",0,function(e){return`Write JavaScript for a particle shape in my website's 3D scroll story. Make a model of ${e||"[OBJECT]"}.

Rules:
- Reply with ONLY the code. No explanation, no markdown fences.
- The code is the BODY of a function. It receives N (how many points to make, 4 000 to 15 000) and rand() (a seeded random number from 0 to 1; always use it instead of Math.random). It must end with \`return points\`.
- points is an array of [x, y, z]. x is right, y is up, z is towards the viewer. Units don't matter: the result is centred and scaled automatically.
- Put the points on the SURFACE and the outline of the object, so its silhouette reads instantly. Add extra points along the edges and details that make it recognisable (eyes, ribs, seams, rims, petals). A few points inside for volume is fine.
- Show it from its most recognisable side: side view for animals and vehicles, front view for faces, buildings and bottles.
- Keep the depth modest: z within about 20 to 40 percent of the width.
- Plain JavaScript only: Math is fine, nothing else. No imports, no DOM, no three.js, no async. Keep it fast (under 300 000 loop steps).
- Split the shape into named parts with a comment each, and give each part a share of N by area.

Here is an example for a fish, in exactly the format I need:

${t.fish.code}`}])},243159,e=>{let t={seafood:{label:"Sjømatbar",preset:"kai",wordmark:"skj*æ*r",nav:{about:"Om",book:"Book sete"},booking:{kind:"seat",anchor:"bord",noun:"bord",address:!1,stepsTitle:"Slik foregår det",messageLabel:"Noe vi bør vite?",messagePlaceholder:"Allergier, anledning …"},mail:{request:"forespørsel",confirmed:"bekreftet",confirmedHeading:e=>`Vi ses ved disken, ${e}.`,requestBody:"Vi har fått forespørselen din og bekrefter innen et par timer. Setene er holdt av for deg til da.",detailLabels:{when:"Dag",slot:"Bordsetting"}}},carpentry:{label:"Bygg og tømrermester",preset:"mester",wordmark:"Byggmester *Hansen*",nav:{about:"Om oss",book:"Book befaring"},booking:{kind:"visit",anchor:"befaring",noun:"befaring",address:!0,stepsTitle:"Slik foregår en befaring",messageLabel:"Hva gjelder det?",messagePlaceholder:"Tilbygg på 30 m², nytt tak, bad …"},mail:{request:"befaring",confirmed:"befaring bekreftet",confirmedHeading:e=>`Vi kommer p\xe5 befaring, ${e}.`,requestBody:"Vi har fått forespørselen om befaring og bekrefter tidspunktet innen én arbeidsdag.",detailLabels:{when:"Dag",slot:"Tidspunkt"}}},law:{label:"Advokatfirma",preset:"advokat",wordmark:"Nordvik *Advokater*",nav:{about:"Om oss",book:"Book samtale"},booking:{kind:"visit",anchor:"samtale",noun:"samtale",address:!1,stepsTitle:"Slik foregår en første samtale",messageLabel:"Hva gjelder saken?",messagePlaceholder:"Oppsigelse, arveoppgjør, husleiekontrakt …"},mail:{request:"samtale",confirmed:"samtale bekreftet",confirmedHeading:e=>`Vi snakkes, ${e}.`,requestBody:"Vi har fått forespørselen om en første samtale og bekrefter tidspunktet innen én arbeidsdag. Samtalen er uforpliktende og underlagt taushetsplikt.",detailLabels:{when:"Dag",slot:"Tidspunkt"}}},tech:{label:"Teknologi og KI",preset:"flyt",wordmark:"flyt",nav:{about:"om oss",book:"book demo"},booking:{kind:"visit",anchor:"demo",noun:"demo",address:!1,stepsTitle:"Slik foregår en demo",messageLabel:"Hva vil dere se?",messagePlaceholder:"Timeføring for 12 personer, fakturering, integrasjon mot Tripletex …"},mail:{request:"demo",confirmed:"demo bekreftet",confirmedHeading:e=>`Vi ses p\xe5 demoen, ${e}.`,requestBody:"Vi har fått forespørselen om en demo og sender en møtelenke innen én arbeidsdag. Demoen tar en halvtime, og dere trenger ikke forberede noe.",detailLabels:{when:"Dag",slot:"Tidspunkt"}}}},n=Object.keys(t).map(e=>({title:t[e].label,value:e}));e.s(["L",0,t,"G",0,e=>`business-${e}`,"h",0,e=>`home-${e}`,"b",0,e=>"string"==typeof e&&e in t,"Z",0,n])}],621442,e=>{e.v(t=>Promise.all(["static/chunks/21bz-d82l9sef.js"].map(t=>e.l(t))).then(()=>t(732009)))},194332,e=>{e.v(t=>Promise.all(["static/chunks/1kcs_b5m529fx.js"].map(t=>e.l(t))).then(()=>t(434646)))},702460,e=>{e.v(t=>Promise.all(["static/chunks/2aydq3it-wr6v.js","static/chunks/21bz-d82l9sef.js"].map(t=>e.l(t))).then(()=>t(331935)))},413143,e=>{e.v(t=>Promise.all(["static/chunks/2b8hphqu0sxkn.js","static/chunks/21bz-d82l9sef.js"].map(t=>e.l(t))).then(()=>t(208137)))},497657,e=>{e.v(t=>Promise.all(["static/chunks/44j3mwlo478n2.js","static/chunks/21bz-d82l9sef.js"].map(t=>e.l(t))).then(()=>t(328123)))}]);