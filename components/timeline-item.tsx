import { ArrowUp } from "lucide-react"

interface TimelineItemProps {
  title: string
  date: string
  details: string
  isLast?: boolean
}

export function TimelineItem({ title, date, details, isLast = false }: TimelineItemProps) {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-4">
        <div className="bg-app-red rounded-full p-2">
          <ArrowUp className="h-5 w-5 text-white" />
        </div>
        {!isLast && <div className="w-0.5 h-full bg-app-timeline-line" />}
      </div>
      <div className="pb-6">
        <h3 className="text-gray-800 text-base font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm">
          {date} · {details}
        </p>
      </div>
    </div>
  )
}
