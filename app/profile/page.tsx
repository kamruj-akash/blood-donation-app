"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, CheckCircle, AlertTriangle, Heart, Pencil, CalendarIcon, Settings, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TimelineItem } from "@/components/timeline-item"
import { Card } from "@/components/ui/card"

export default function ProfilePage() {
  const handleLogout = () => {
    alert("Logged out successfully!") // Placeholder for actual logout logic
    // Redirect to login page or home page after logout
    // router.push('/login');
  }

  return (
    <div className="min-h-screen bg-app-bg flex flex-col">
      {/* Header */}
      <header className="flex items-center p-4 pt-6">
        <Link href="/" className="text-gray-800 transition-colors hover:text-app-red">
          <ChevronLeft className="h-6 w-6" />
        </Link>
        <h1 className="flex-1 text-center text-xl font-bold text-gray-800">Profile</h1>
        <div className="w-6" /> {/* Spacer for alignment */}
      </header>

      <main className="flex-1 p-4 pb-20">
        {/* Alert Messages */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 bg-app-green rounded-xl p-4 transition-all duration-200 ease-in-out hover:scale-[1.01]">
            <CheckCircle className="h-6 w-6 text-app-green-dark" />
            <p className="text-app-green-dark text-sm font-medium">You're eligible to donate again!</p>
          </div>
          <div className="flex items-center gap-3 bg-app-yellow rounded-xl p-4 transition-all duration-200 ease-in-out hover:scale-[1.01]">
            <AlertTriangle className="h-6 w-6 text-app-yellow-dark" />
            <p className="text-app-yellow-dark text-sm font-medium">Urgent request near you: AB+ at City Hospital.</p>
          </div>
          <div className="flex items-center gap-3 bg-app-light-red rounded-xl p-4 transition-all duration-200 ease-in-out hover:scale-[1.01]">
            <Heart className="h-6 w-6 text-app-light-red-dark fill-current" />
            <p className="text-app-light-red-dark text-sm font-medium">
              You saved a life today! Thank you for your donation.
            </p>
          </div>
        </div>

        {/* User Info */}
        <div className="flex flex-col items-center text-center mb-6">
          <Image
            src="/placeholder.svg?height=100&width=100"
            alt="Ayaan Khan"
            width={100}
            height={100}
            className="rounded-full object-cover mb-4 transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <h2 className="text-gray-800 text-2xl font-bold">Ayaan Khan</h2>
          <p className="text-gray-600 text-sm mb-2">
            Blood Group: <span className="font-semibold text-app-red">O+</span>
          </p>
          <p className="text-gray-600 text-sm">Last Donation: 2 months ago</p>
          <p className="text-gray-600 text-sm mb-4">
            Total Lives Saved: <span className="font-semibold">5</span>
          </p>
          <Link href="/edit-profile" className="w-full max-w-[200px]">
            <Button className="w-full bg-app-red hover:bg-app-red/90 text-white text-base font-semibold px-6 py-3 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all duration-200 ease-in-out">
              <Pencil className="h-4 w-4" />
              Edit Info
            </Button>
          </Link>
        </div>

        {/* Donation Timeline */}
        <section className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Donation Timeline</h2>
          <div className="relative pl-4">
            <TimelineItem title="Donated Blood" date="2 months ago" details="Dhaka Medical College" />
            <TimelineItem title="Requested Blood" date="4 months ago" details="Urgent Request" />
            <TimelineItem title="Donated Blood" date="6 months ago" details="Red Crescent Society" isLast />
          </div>
        </section>

        {/* Next Donation Card */}
        <Card className="w-full bg-app-red rounded-xl shadow-md p-4 flex items-center justify-between transition-all duration-200 ease-in-out hover:scale-[1.01] mb-6">
          <div>
            <h3 className="text-white text-lg font-bold mb-1">Get Ready for Your Next Donation</h3>
            <p className="text-white text-sm">You're eligible to donate again in 1 month</p>
          </div>
          <CalendarIcon className="h-8 w-8 text-white" />
        </Card>

        {/* App Settings and Logout Buttons */}
        <div className="space-y-4">
          <Link href="/settings" className="w-full">
            <Button className="w-full bg-white hover:bg-gray-50 text-app-red-dark text-base font-semibold py-3 rounded-xl shadow-sm border border-gray-200 flex items-center justify-center gap-2 transition-all duration-200 ease-in-out">
              <Settings className="h-5 w-5" />
              App Settings
            </Button>
          </Link>
          <Button
            onClick={handleLogout}
            className="w-full bg-white hover:bg-gray-50 text-app-red-dark text-base font-semibold py-3 rounded-xl shadow-sm border border-gray-200 flex items-center justify-center gap-2 transition-all duration-200 ease-in-out"
          >
            <LogOut className="h-5 w-5" />
            Logout
          </Button>
        </div>
      </main>
    </div>
  )
}
