import { Card, CardContent } from "@/components/ui/card"
import { Droplet, ShieldCheck, Star } from "lucide-react"

interface BadgeCardProps {
  badgeName: string
  description: string
  iconType: "rookie" | "lifesaver" | "star"
}

export function BadgeCard({ badgeName, description, iconType }: BadgeCardProps) {
  const IconComponent = iconType === "rookie" ? Droplet : iconType === "lifesaver" ? ShieldCheck : Star

  return (
    <Card className="w-full rounded-xl shadow-sm border-none bg-white">
      <CardContent className="flex flex-col items-center p-4 text-center">
        <div className="bg-app-badge-bg rounded-full p-4 mb-3">
          <IconComponent className="h-12 w-12 text-app-badge-text" />
        </div>
        <h3 className="text-gray-800 text-base font-semibold mb-1">{badgeName}</h3>
        <p className="text-app-badge-text text-sm">{description}</p>
      </CardContent>
    </Card>
  )
}
