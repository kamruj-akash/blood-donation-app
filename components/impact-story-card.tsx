import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Eye, Maximize } from "lucide-react"

interface ImpactStoryCardProps {
  imageSrc: string
  imageAlt: string
  description: string
  iconType: "heart" | "eye" | "maximize"
}

export function ImpactStoryCard({ imageSrc, imageAlt, description, iconType }: ImpactStoryCardProps) {
  const IconComponent = iconType === "heart" ? Heart : iconType === "eye" ? Eye : Maximize

  return (
    <Card className="w-full rounded-xl shadow-md border-none bg-white overflow-hidden">
      <div className="relative w-full h-48">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
        <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-sm">
          <IconComponent className="h-5 w-5 text-app-red" />
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-gray-800 text-base">{description}</p>
      </CardContent>
    </Card>
  )
}
