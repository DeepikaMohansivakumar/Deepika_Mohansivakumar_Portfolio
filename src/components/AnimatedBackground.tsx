export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-glow-gradient">
      <div className="absolute left-[10%] top-[10%] h-72 w-72 rounded-full bg-electric/30 blur-[90px] animate-blob" />
      <div className="absolute right-[8%] top-[20%] h-80 w-80 rounded-full bg-violet/30 blur-[100px] animate-blob [animation-delay:3s]" />
      <div className="absolute bottom-[5%] left-[30%] h-72 w-72 rounded-full bg-cyan/20 blur-[100px] animate-blob [animation-delay:6s]" />
    </div>
  )
}
