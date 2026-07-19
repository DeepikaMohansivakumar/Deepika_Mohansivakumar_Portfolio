export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-glow-gradient">
      <div className="absolute left-[10%] top-[14%] h-72 w-72 rounded-full bg-[#2563EB]/25 blur-[90px] animate-blob" />
      <div className="absolute right-[12%] top-[18%] h-80 w-80 rounded-full bg-[#38BDF8]/18 blur-[110px] animate-blob [animation-delay:3s]" />
      <div className="absolute bottom-[8%] left-[30%] h-72 w-72 rounded-full bg-[#38BDF8]/18 blur-[100px] animate-blob [animation-delay:6s]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-80" />
    </div>
  )
}
