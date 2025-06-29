import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Droplet } from "lucide-react"

interface RequestCardProps {
  patientId: string
  hospital: string
  location: string
  bloodType: string
  timeLeft: string
  isUrgent?: boolean
}

export function RequestCard({
  patientId,
  hospital,
  location,
  bloodType,
  timeLeft,
  isUrgent = false,
}: RequestCardProps) {
  return (
    <Card className="w-full rounded-xl shadow-md border-none bg-white">
      <CardContent className="flex flex-col p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-gray-800 text-lg font-bold">Patient ID: {patientId}</h3>
          <div className="flex items-center gap-1 text-app-red">
            <Droplet className="h-5 w-5 fill-current" />
            <span className="font-bold">{bloodType}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-2">
          {hospital}, {location}
        </p>
        <div className="flex items-center justify-between">
          <p className={isUrgent ? "text-app-light-red-dark font-semibold" : "text-gray-600 text-sm"}>
            Time Left: {timeLeft}
          </p>
          <Button className="bg-app-red hover:bg-app-red/90 text-white text-sm font-semibold px-4 py-2 rounded-lg">
            Offer to Donate
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
