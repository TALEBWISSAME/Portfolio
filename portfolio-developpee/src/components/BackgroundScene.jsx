export default function BackgroundScene() {
  return (
    <div className="ambient-scene" aria-hidden="true">
      <div className="ambient-orb orb-one" />
      <div className="ambient-orb orb-two" />
      <div className="ambient-orb orb-three" />
      <div className="ambient-orb orb-four" />
      <svg className="ambient-wave wave-left" viewBox="0 0 420 900" preserveAspectRatio="none"><path d="M20 0C220 160 30 290 230 450S190 740 410 900" /></svg>
      <svg className="ambient-wave wave-right" viewBox="0 0 420 900" preserveAspectRatio="none"><path d="M400 0C190 160 390 310 170 470S210 730 10 900" /></svg>
    </div>
  )
}
