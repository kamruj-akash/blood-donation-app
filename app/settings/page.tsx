"use client"

import Link from "next/link"
import { ChevronLeft, Bell, Lock, Info, HelpCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-app-bg flex flex-col">
      {/* Header */}
      <header className="flex items-center p-4 pt-6">
        <Link href="/profile" className="text-gray-800 transition-colors hover:text-app-red">
          <ChevronLeft className="h-6 w-6" />
        </Link>
        <h1 className="flex-1 text-center text-xl font-bold text-gray-800">App Settings</h1>
        <div className="w-6" /> {/* Spacer for alignment */}
      </header>

      {/* Settings Options */}
      <main className="flex-1 p-4 pb-20">
        <div className="space-y-4">
          <Card className="w-full rounded-xl shadow-sm border-none bg-white transition-all duration-200 ease-in-out hover:scale-[1.01]">
            <CardContent className="flex items-center gap-4 p-4">
              <Bell className="h-6 w-6 text-gray-600" />
              <div className="flex-1">
                <h3 className="text-gray-800 text-base font-semibold">Notification Preferences</h3>
                <p className="text-gray-600 text-sm">Manage how you receive alerts</p>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full rounded-xl shadow-sm border-none bg-white transition-all duration-200 ease-in-out hover:scale-[1.01]">
            <CardContent className="flex items-center gap-4 p-4">
              <Lock className="h-6 w-6 text-gray-600" />
              <div className="flex-1">
                <h3 className="text-gray-800 text-base font-semibold">Privacy Settings</h3>
                <p className="text-gray-600 text-sm">Control your data and visibility</p>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full rounded-xl shadow-sm border-none bg-white transition-all duration-200 ease-in-out hover:scale-[1.01]">
            <CardContent className="flex items-center gap-4 p-4">
              <Info className="h-6 w-6 text-gray-600" />
              <div className="flex-1">
                <h3 className="text-gray-800 text-base font-semibold">About This App</h3>
                <p className="text-gray-600 text-sm">Version, licenses, and credits</p>
              </div>
            </CardContent>
          </Card>

          <Card className="w-full rounded-xl shadow-sm border-none bg-white transition-all duration-200 ease-in-out hover:scale-[1.01]">
            <CardContent className="flex items-center gap-4 p-4">
              <HelpCircle className="h-6 w-6 text-gray-600" />
              <div className="flex-1">
                <h3 className="text-gray-800 text-base font-semibold">Help & Support</h3>
                <p className="text-gray-600 text-sm">Find answers or contact us</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
