import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface DonorCardProps {
  name: string
  bloodGroup: string
  lastDonation: string
  imageSrc: string
  imageAlt: string
}

export function DonorCard({ name, bloodGroup, lastDonation, imageSrc, imageAlt }: DonorCardProps) {
  return (
    <Card className="w-full rounded-xl shadow-sm border-none bg-white">
      <CardContent className="flex flex-col items-center p-4 text-center">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          width={80}
          height={80}
          className="rounded-full object-cover mb-3"
        />
        <h3 className="text-gray-800 text-lg font-bold mb-1">{name}</h3>
        <p className="text-gray-600 text-sm mb-3">
          {bloodGroup} | Last: {lastDonation}
        </p>
        <Button className="bg-app-red hover:bg-app-red/90 text-white text-sm font-semibold px-4 py-2 rounded-lg">
          Request
        </Button>
      </CardContent>
    </Card>
  )
}
