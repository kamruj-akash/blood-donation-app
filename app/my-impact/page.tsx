"use client"

import Link from "next/link"
import { ChevronLeft, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TopDonorItem } from "@/components/top-donor-item"
import { BadgeCard } from "@/components/badge-card"
import { Progress } from "@/components/ui/progress" // Assuming shadcn/ui progress component

export default function MyImpactPage() {
  return (
    <div className="min-h-screen bg-app-bg flex flex-col">
      {/* Header */}
      <header className="flex items-center p-4 pt-6">
        <Link href="/impact" className="text-gray-800">
          <ChevronLeft className="h-6 w-6" />
        </Link>
        <h1 className="flex-1 text-center text-xl font-bold text-gray-800">My Impact</h1>
        <div className="w-6" /> {/* Spacer for alignment */}
      </header>

      <main className="flex-1 p-4 pb-20">
        {/* Top Donors */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Top Donors</h2>
          <div className="space-y-3">
            <TopDonorItem
              name="Ayesha Rahman"
              university="University of Dhaka"
              imageSrc="/placeholder.svg?height=50&width=50"
              imageAlt="Ayesha Rahman"
              badgeColor="gold"
            />
            <TopDonorItem
              name="Liam O'Connell"
              university="University of Sydney"
              imageSrc="/placeholder.svg?height=50&width=50"
              imageAlt="Liam O'Connell"
              badgeColor="silver"
            />
            <TopDonorItem
              name="Fatima Khan"
              university="University of Melbourne"
              imageSrc="/placeholder.svg?height=50&width=50"
              imageAlt="Fatima Khan"
              badgeColor="bronze"
            />
          </div>
        </section>

        {/* My Badges */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">My Badges</h2>
          <div className="grid grid-cols-2 gap-4">
            <BadgeCard badgeName="Rookie Hero" description="First Donation" iconType="rookie" />
            <BadgeCard badgeName="Lifesaver" description="3 Donations" iconType="lifesaver" />
            <BadgeCard badgeName="Star Donor" description="5 Donations" iconType="star" />
          </div>
        </section>

        {/* Next Badge Progress */}
        <section className="bg-white rounded-xl shadow-md p-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-gray-800 text-lg font-semibold">Next Badge: Lifesaver</h3>
            <span className="text-app-red-dark font-semibold">1/3 Donations</span>
          </div>
          <Progress value={33} className="h-2 bg-gray-200 [&>*]:bg-app-red" />
          <p className="text-gray-600 text-sm mt-2">2 more donations to unlock Lifesaver!</p>
        </section>

        {/* Share My Badge Button */}
        <Button className="w-full bg-app-red hover:bg-app-red/90 text-white text-lg font-semibold py-4 rounded-xl shadow-md flex items-center justify-center gap-2">
          <Share2 className="h-5 w-5" />
          Share My Badge
        </Button>
      </main>
    </div>
  )
}
