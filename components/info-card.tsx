import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface InfoCardProps {
  title: string
  mainText: string
  subtitle: string
  imageSrc: string
  imageAlt: string
}

export function InfoCard({ title, mainText, subtitle, imageSrc, imageAlt }: InfoCardProps) {
  return (
    <Card className="w-full rounded-xl shadow-md border-none bg-white">
      <CardContent className="flex items-center justify-between p-4">
        <div className="flex flex-col gap-1">
          <p className="text-app-red-dark text-sm font-medium">{title}</p>
          <h3 className="text-gray-800 text-xl font-bold">{mainText}</h3>
          <p className="text-app-red-dark text-sm">{subtitle}</p>
        </div>
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          width={80}
          height={80}
          className="rounded-lg object-cover"
        />
      </CardContent>
    </Card>
  )
}
