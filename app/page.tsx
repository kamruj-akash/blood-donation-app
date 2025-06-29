import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { InfoCard } from "@/components/info-card"
import { BottomNavigation } from "@/components/bottom-navigation"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-app-bg flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between p-4 pt-6">
        <div className="flex-1" /> {/* Spacer to center "Home" */}
        <h1 className="text-xl font-bold text-gray-800">Home</h1>
        <div className="flex-1 flex justify-end">
          <Link href="/notifications" className="text-gray-800 transition-colors hover:text-app-red">
            <Bell className="h-6 w-6" />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 pb-20">
        {" "}
        {/* Added pb-20 to prevent content from being hidden by fixed nav */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Save a life today</h2>
        <Link href="/register-donor" className="w-full">
          <Button className="w-full bg-app-red hover:bg-app-red/90 text-white text-lg font-semibold py-6 rounded-xl shadow-md mb-6 transition-all duration-200 ease-in-out">
            Become a Donor
          </Button>
        </Link>
        <div className="space-y-4 mb-8">
          <InfoCard
            title="Urgent Request"
            mainText="A+ Blood Needed"
            subtitle="Help a patient in need"
            imageSrc="/placeholder.svg?height=80&width=80"
            imageAlt="Illustration of blood donation"
          />
          <InfoCard
            title="Last Donation"
            mainText="You haven't donated yet"
            subtitle="Donate blood and save lives"
            imageSrc="/placeholder.svg?height=80&width=80"
            imageAlt="Illustration of blood in a glass"
          />
        </div>
        <p className="text-gray-800 text-lg italic text-center px-4">
          {'"Your blood donation is a gift of life. Every drop counts."'}
        </p>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  )
}
