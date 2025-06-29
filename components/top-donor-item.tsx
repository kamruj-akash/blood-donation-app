import { cn } from "@/lib/utils"
import Image from "next/image"
import { Award } from "lucide-react"

interface TopDonorItemProps {
  name: string
  university: string
  imageSrc: string
  imageAlt: string
  badgeColor: "gold" | "silver" | "bronze"
}

export function TopDonorItem({ name, university, imageSrc, imageAlt, badgeColor }: TopDonorItemProps) {
  const badgeClass =
    badgeColor === "gold" ? "text-yellow-500" : badgeColor === "silver" ? "text-gray-400" : "text-amber-700" // Using amber for bronze

  return (
    <div className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm">
      <div className="flex items-center gap-3">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          width={50}
          height={50}
          className="rounded-full object-cover"
        />
        <div>
          <h3 className="text-gray-800 text-base font-semibold">{name}</h3>
          <p className="text-gray-600 text-sm">{university}</p>
        </div>
      </div>
      <Award className={cn("h-6 w-6", badgeClass)} />
    </div>
  )
}
