"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, Menu, Map, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RequestCard } from "@/components/request-card"
import Image from "next/image"

export default function RequestsPage() {
  const [isListView, setIsListView] = useState(false) // State to toggle view

  return (
    <div className="min-h-screen bg-app-bg flex flex-col">
      {/* Header */}
      <header className="flex items-center p-4 pt-6">
        <Link href="/" className="text-gray-800 transition-colors hover:text-app-red">
          <ChevronLeft className="h-6 w-6" />
        </Link>
        <h1 className="flex-1 text-center text-xl font-bold text-gray-800">Blood Requests</h1>
        <Menu className="h-6 w-6 text-gray-800 transition-colors hover:text-app-red" />
      </header>

      {/* Toggle Buttons */}
      <div className="flex justify-center p-4">
        <div className="flex bg-white rounded-xl shadow-sm overflow-hidden">
          <Button
            onClick={() => setIsListView(false)}
            className={`flex items-center gap-2 text-base font-semibold px-6 py-3 rounded-xl rounded-r-none transition-all duration-200 ease-in-out ${
              !isListView
                ? "bg-app-red hover:bg-app-red/90 text-white"
                : "bg-white hover:bg-gray-50 text-app-red-dark border border-gray-200"
            }`}
          >
            <Map className="h-5 w-5" />
            Map View
          </Button>
          <Button
            onClick={() => setIsListView(true)}
            className={`flex items-center gap-2 text-base font-semibold px-6 py-3 rounded-xl rounded-l-none transition-all duration-200 ease-in-out ${
              isListView
                ? "bg-app-red hover:bg-app-red/90 text-white"
                : "bg-white hover:bg-gray-50 text-app-red-dark border border-gray-200"
            }`}
          >
            <List className="h-5 w-5" />
            List View
          </Button>
        </div>
      </div>

      {/* Content based on view */}
      <main className="flex-1 p-4 pt-0 pb-20">
        {isListView ? (
          <>
            <h2 className="text-xl font-bold text-gray-800 mb-4">All Requests</h2>
            <div className="space-y-4">
              <RequestCard
                patientId="P7654"
                hospital="ABC Hospital"
                location="Dhaka"
                bloodType="A+"
                timeLeft="2h 15m"
              />
              <RequestCard patientId="Q2981" hospital="XYZ Clinic" location="Sydney" bloodType="B-" timeLeft="5h 30m" />
              <RequestCard
                patientId="R0012"
                hospital="City General Hospital"
                location="Dhaka"
                bloodType="O+"
                timeLeft="45m"
                isUrgent
              />
              <RequestCard
                patientId="S0045"
                hospital="General Hospital"
                location="Chittagong"
                bloodType="AB+"
                timeLeft="1h 0m"
              />
              <RequestCard
                patientId="T0099"
                hospital="Apollo Hospital"
                location="Dhaka"
                bloodType="B+"
                timeLeft="3h 45m"
              />
            </div>
          </>
        ) : (
          <>
            {/* Map Placeholder */}
            <div className="p-4 pt-0">
              <Image
                src="/placeholder.svg?height=200&width=350"
                alt="Map placeholder"
                width={350}
                height={200}
                className="w-full h-auto rounded-xl shadow-md object-cover"
              />
            </div>

            {/* Nearby Requests Section */}
            <h2 className="text-xl font-bold text-gray-800 mb-4">Nearby Requests</h2>
            <div className="space-y-4">
              <RequestCard
                patientId="P7654"
                hospital="ABC Hospital"
                location="Dhaka"
                bloodType="A+"
                timeLeft="2h 15m"
              />
              <RequestCard patientId="Q2981" hospital="XYZ Clinic" location="Sydney" bloodType="B-" timeLeft="5h 30m" />
              <RequestCard
                patientId="R0012"
                hospital="City General Hospital"
                location="Dhaka"
                bloodType="O+"
                timeLeft="45m"
                isUrgent
              />
            </div>
          </>
        )}
      </main>
    </div>
  )
}
