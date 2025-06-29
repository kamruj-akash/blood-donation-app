"use client"

import Link from "next/link"
import { ChevronLeft, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ImpactStoryCard } from "@/components/impact-story-card"
import { Card } from "@/components/ui/card"

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-app-bg flex flex-col">
      {/* Header */}
      <header className="flex items-center p-4 pt-6">
        <Link href="/" className="text-gray-800">
          <ChevronLeft className="h-6 w-6" />
        </Link>
        <h1 className="flex-1 text-center text-xl font-bold text-gray-800">Impact Stories</h1>
        <div className="w-6" /> {/* Spacer for alignment */}
      </header>

      {/* View Your Impact Bar */}
      <div className="p-4">
        <Link href="/my-impact">
          <Card className="w-full rounded-xl shadow-md border-none bg-white p-4 text-center text-app-red-dark font-semibold">
            View Your Impact
          </Card>
        </Link>
      </div>

      {/* Impact Stories */}
      <main className="flex-1 p-4 pb-20">
        <div className="space-y-4">
          <ImpactStoryCard
            imageSrc="/placeholder.svg?height=192&width=350"
            imageAlt="Blood drop with heartbeat"
            description="Your blood saved a mother during childbirth."
            iconType="heart"
          />
          <ImpactStoryCard
            imageSrc="/placeholder.svg?height=192&width=350"
            imageAlt="Blood drop with baby"
            description="A baby is alive today thanks to your donation."
            iconType="eye"
          />
          <ImpactStoryCard
            imageSrc="/placeholder.svg?height=192&width=350"
            imageAlt="People helping accident victim"
            description="An accident victim went home yesterday — because of you."
            iconType="maximize"
          />
        </div>
      </main>

      {/* Fixed "I'll donate again" button */}
      <div className="fixed inset-x-0 bottom-16 p-4 bg-app-bg z-40">
        <Button className="w-full bg-app-red hover:bg-app-red/90 text-white text-lg font-semibold py-4 rounded-xl shadow-md flex items-center justify-center gap-2">
          <Heart className="h-5 w-5 fill-current" />
          I'll donate again
        </Button>
      </div>
    </div>
  )
}
