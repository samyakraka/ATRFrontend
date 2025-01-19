import { CuboidIcon as Cube } from 'lucide-react'

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <Cube className="w-8 h-8 text-purple-900" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full" />
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-purple-900 to-pink-500 bg-clip-text text-transparent">
        Astralytics
      </span>
    </div>
  )
}

