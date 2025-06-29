"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export default function RegisterDonorPage() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In a real application, you would send this data to a server.
    // For now, we'll just show a success popup.
    setIsDialogOpen(true)
  }

  return (
    <div className="min-h-screen bg-app-bg flex flex-col">
      {/* Header */}
      <header className="flex items-center p-4 pt-6">
        <Link href="/" className="text-gray-800">
          <ChevronLeft className="h-6 w-6" />
        </Link>
        <h1 className="flex-1 text-center text-xl font-bold text-gray-800">Register as Donor</h1>
        <div className="w-6" /> {/* Spacer for alignment */}
      </header>

      {/* Form */}
      <main className="flex-1 p-4 pb-20">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="fullName" className="text-gray-800 text-sm font-medium mb-1 block">
              Full Name
            </Label>
            <Input
              id="fullName"
              placeholder="Enter your full name"
              className="bg-app-input-bg border-none rounded-xl h-14 text-app-placeholder placeholder:text-app-placeholder focus-visible:ring-0 focus-visible:ring-offset-0"
              required
            />
          </div>

          <div>
            <Label htmlFor="bloodGroup" className="text-gray-800 text-sm font-medium mb-1 block">
              Blood Group
            </Label>
            <Select required>
              <SelectTrigger
                id="bloodGroup"
                className="bg-app-input-bg border-none rounded-xl h-14 text-app-placeholder placeholder:text-app-placeholder focus:ring-0 focus:ring-offset-0"
              >
                <SelectValue placeholder="Select Blood Group" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="A+">A+</SelectItem>
                <SelectItem value="A-">A-</SelectItem>
                <SelectItem value="B+">B+</SelectItem>
                <SelectItem value="B-">B-</SelectItem>
                <SelectItem value="AB+">AB+</SelectItem>
                <SelectItem value="AB-">AB-</SelectItem>
                <SelectItem value="O+">O+</SelectItem>
                <SelectItem value="O-">O-</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="phoneNumber" className="text-gray-800 text-sm font-medium mb-1 block">
              Phone Number
            </Label>
            <Input
              id="phoneNumber"
              type="tel"
              placeholder="Enter your phone number"
              className="bg-app-input-bg border-none rounded-xl h-14 text-app-placeholder placeholder:text-app-placeholder focus-visible:ring-0 focus-visible:ring-offset-0"
              required
            />
          </div>

          <div>
            <Label htmlFor="university" className="text-gray-800 text-sm font-medium mb-1 block">
              University
            </Label>
            <Input
              id="university"
              placeholder="Enter your university"
              className="bg-app-input-bg border-none rounded-xl h-14 text-app-placeholder placeholder:text-app-placeholder focus-visible:ring-0 focus-visible:ring-offset-0"
              required
            />
          </div>

          <div>
            <Label htmlFor="city" className="text-gray-800 text-sm font-medium mb-1 block">
              City
            </Label>
            <Input
              id="city"
              placeholder="Enter your city"
              className="bg-app-input-bg border-none rounded-xl h-14 text-app-placeholder placeholder:text-app-placeholder focus-visible:ring-0 focus-visible:ring-offset-0"
              required
            />
          </div>

          <div>
            <Label htmlFor="lastDonationDate" className="text-gray-800 text-sm font-medium mb-1 block">
              Last Donation Date
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-between text-left font-normal bg-app-input-bg border-none rounded-xl h-14 text-app-placeholder placeholder:text-app-placeholder focus-visible:ring-0 focus-visible:ring-offset-0",
                    !date && "text-app-placeholder",
                  )}
                >
                  {date ? format(date, "PPP") : <span>Select last donation date</span>}
                  <CalendarIcon className="ml-2 h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-white" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  className="bg-white rounded-md shadow"
                />
              </PopoverContent>
            </Popover>
          </div>

          <Button
            type="submit"
            className="w-full bg-app-red hover:bg-app-red/90 text-white text-lg font-semibold py-6 rounded-xl shadow-md mt-8"
          >
            Register as Donor
          </Button>
        </form>
      </main>

      {/* Success Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px] bg-white rounded-lg p-6">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold text-gray-800">Registration Successful!</DialogTitle>
            <DialogDescription className="text-center text-gray-600">
              Thank you for registering as a donor. Your commitment can save lives.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center mt-4">
            <Button onClick={() => setIsDialogOpen(false)} className="bg-app-red hover:bg-app-red/90 text-white">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
