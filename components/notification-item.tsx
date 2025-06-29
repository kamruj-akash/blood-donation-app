import { Card, CardContent } from "@/components/ui/card"
import { Bell, Droplet, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface NotificationItemProps {
  type: "request" | "general" | "success"
  title: string
  description: string
  time: string
}

export function NotificationItem({ type, title, description, time }: NotificationItemProps) {
  let IconComponent
  let iconColorClass
  let bgColorClass

  switch (type) {
    case "request":
      IconComponent = Droplet
      iconColorClass = "text-app-red"
      bgColorClass = "bg-app-input-bg" // Light red background
      break
    case "success":
      IconComponent = CheckCircle
      iconColorClass = "text-app-green-dark"
      bgColorClass = "bg-app-green" // Light green background
      break
    case "general":
    default:
      IconComponent = Bell
      iconColorClass = "text-gray-600"
      bgColorClass = "bg-white"
      break
  }

  return (
    <Card className={cn("w-full rounded-xl shadow-sm border-none", bgColorClass)}>
      <CardContent className="flex items-start gap-3 p-4">
        <div className={cn("p-2 rounded-full", type === "request" ? "bg-app-red/20" : "bg-gray-100")}>
          <IconComponent className={cn("h-5 w-5", iconColorClass)} />
        </div>
        <div className="flex-1">
          <h3 className="text-gray-800 text-base font-semibold">{title}</h3>
          <p className="text-gray-600 text-sm mb-1">{description}</p>
          <p className="text-gray-500 text-xs">{time}</p>
        </div>
      </CardContent>
    </Card>
  )
}
