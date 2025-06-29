"use client"

import Link from "next/link"
import { ChevronLeft, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DonorCard } from "@/components/donor-card"

export default function FindDonorsPage() {
  return (
    <div className="min-h-screen bg-app-bg flex flex-col">
      {/* Header */}
      <header className="flex items-center p-4 pt-6">
        <Link href="/" className="text-gray-800">
          <ChevronLeft className="h-6 w-6" />
        </Link>
        <h1 className="flex-1 text-center text-xl font-bold text-gray-800">Find Donors</h1>
        <div className="w-6" /> {/* Spacer for alignment */}
      </header>

      {/* Search Bar */}
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Search by name or blood group"
            className="pl-10 bg-white border-none rounded-xl h-12 shadow-sm text-gray-800 placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2 px-4 mb-4">
        <Button className="bg-app-red hover:bg-app-red/90 text-white text-sm font-semibold px-4 py-2 rounded-xl">
          All
        </Button>
        <Button className="bg-white hover:bg-gray-50 text-app-red-dark text-sm font-semibold px-4 py-2 rounded-xl border border-gray-200">
          University
        </Button>
        <Button className="bg-white hover:bg-gray-50 text-app-red-dark text-sm font-semibold px-4 py-2 rounded-xl border border-gray-200">
          Blood Group
        </Button>
      </div>

      {/* University Select */}
      <div className="px-4 mb-6">
        <Select>
          <SelectTrigger className="bg-white border-none rounded-xl h-12 shadow-sm text-gray-800 placeholder:text-gray-400 focus:ring-0 focus:ring-offset-0">
            <SelectValue placeholder="Select University" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="Dhaka University">Dhaka University</SelectItem>
            <SelectItem value="University of Sydney">University of Sydney</SelectItem>
            <SelectItem value="University of Melbourne">University of Melbourne</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Donors Grid */}
      <main className="flex-1 p-4 pt-0 pb-20">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Donors (120)</h2>
        <div className="grid grid-cols-2 gap-4">
          <DonorCard
            name="Ayesha Rahman"
            bloodGroup="A+"
            lastDonation="15 Aug 23"
            imageSrc="/placeholder.svg?height=80&width=80"
            imageAlt="Ayesha Rahman"
          />
          <DonorCard
            name="Rohan Khan"
            bloodGroup="B-"
            lastDonation="02 Sep 23"
            imageSrc="/placeholder.svg?height=80&width=80"
            imageAlt="Rohan Khan"
          />
          <DonorCard
            name="Fatima Islam"
            bloodGroup="O+"
            lastDonation="22 Jul 23"
            imageSrc="/placeholder.svg?height=80&width=80"
            imageAlt="Fatima Islam"
          />
          <DonorCard
            name="Arif Chowdhury"
            bloodGroup="AB+"
            lastDonation="28 Aug 23"
            imageSrc="/placeholder.svg?height=80&width=80"
            imageAlt="Arif Chowdhury"
          />
          <DonorCard
            name="Nadia Ahmed"
            bloodGroup="A-"
            lastDonation="10 Sep 23"
            imageSrc="/placeholder.svg?height=80&width=80"
            imageAlt="Nadia Ahmed"
          />
          <DonorCard
            name="Imran Hossain"
            bloodGroup="B+"
            lastDonation="18 Jul 23"
            imageSrc="/placeholder.svg?height=80&width=80"
            imageAlt="Imran Hossain"
          />
        </div>
        <Button className="w-full bg-white hover:bg-gray-50 text-app-red-dark text-base font-semibold py-3 rounded-xl shadow-sm mt-6 border border-gray-200">
          Load More
        </Button>
      </main>
    </div>
  )
}
