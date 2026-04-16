interface ChipProps {
  children: React.ReactNode
  light?: boolean
}

export function Chip({ children, light = false }: ChipProps) {
  return (
    <span
      className={`inline-block px-4 py-2 rounded-full text-xs font-medium uppercase tracking-widest ${
        light ? 'bg-white text-primary' : 'bg-primary text-white'
      }`}
    >
      {children}
    </span>
  )
}
