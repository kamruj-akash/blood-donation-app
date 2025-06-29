"use client"

import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { NotificationItem } from "@/components/notification-item"

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-app-bg flex flex-col">
      {/* Header */}
      <header className="flex items-center p-4 pt-6">
        <Link href="/" className="text-gray-800 transition-colors hover:text-app-red">
          <ChevronLeft className="h-6 w-6" />
        </Link>
        <h1 className="flex-1 text-center text-xl font-bold text-gray-800">Notifications</h1>
        <div className="w-6" /> {/* Spacer for alignment */}
      </header>

      {/* Notifications List */}
      <main className="flex-1 p-4 pb-20">
        <div className="space-y-4">
          <NotificationItem
            type="request"
            title="Urgent Blood Request!"
            description="A+ blood needed at City Hospital, Dhaka. Time left: 1h 30m."
            time="5 minutes ago"
          />
          <NotificationItem
            type="success"
            title="Donation Confirmed"
            description="Your recent donation has been successfully recorded. Thank you!"
            time="1 hour ago"
          />
          <NotificationItem
            type="general"
            title="New Feature Alert"
            description="Check out our new 'My Impact' page to see your donation history."
            time="Yesterday"
          />
          <NotificationItem
            type="request"
            title="Blood Request Update"
            description="O- blood still needed at Green Hospital, Chittagong."
            time="2 days ago"
          />
          <NotificationItem
            type="general"
            title="Upcoming Blood Drive"
            description="Join our next blood drive on Oct 26th at University Campus."
            time="3 days ago"
          />
        </div>
      </main>
    </div>
  )
}
