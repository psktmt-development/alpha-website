"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface CalendarProps {
  mode?: "single" | "range" | "multiple"
  selected?: Date
  onSelect?: (date: Date | undefined) => void
  className?: string
  captionLayout?: "dropdown" | "dropdown-months" | "dropdown-years" | "buttons"
}

export function Calendar({
  mode = "single",
  selected,
  onSelect,
  className,
  captionLayout = "buttons",
}: CalendarProps) {
  const [currentDate, setCurrentDate] = React.useState(selected || new Date())
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(selected)

  React.useEffect(() => {
    if (selected) {
      setCurrentDate(selected)
      setSelectedDate(selected)
    }
  }, [selected])

  const handleDateClick = (day: number) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    setSelectedDate(newDate)
    onSelect?.(newDate)
  }

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  const goToYear = (year: number) => {
    setCurrentDate(new Date(year, currentDate.getMonth(), 1))
  }

  const goToMonth = (month: number) => {
    setCurrentDate(new Date(currentDate.getFullYear(), month, 1))
  }

  return (
    <div className={cn("rounded-md border bg-white p-4 shadow-sm", className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        {captionLayout === "dropdown" ? (
          <div className="flex items-center gap-2">
            <select
              value={currentDate.getMonth()}
              onChange={(e) => goToMonth(Number(e.target.value))}
              className="border rounded px-2 py-1 text-sm"
            >
              {monthNames.map((month, idx) => (
                <option key={idx} value={idx}>
                  {month}
                </option>
              ))}
            </select>
            <select
              value={currentDate.getFullYear()}
              onChange={(e) => goToYear(Number(e.target.value))}
              className="border rounded px-2 py-1 text-sm"
            >
              {Array.from({ length: 20 }, (_, i) => currentDate.getFullYear() - 10 + i).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <>
            <button
              onClick={goToPreviousMonth}
              className="p-1 hover:bg-gray-100 rounded"
            >
              ←
            </button>
            <div className="text-sm font-medium">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </div>
            <button
              onClick={goToNextMonth}
              className="p-1 hover:bg-gray-100 rounded"
            >
              →
            </button>
          </>
        )}
      </div>

      {/* Days of week */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {days.map((day) => (
          <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar days */}
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: firstDayOfMonth }).map((_, idx) => (
          <div key={`empty-${idx}`} className="aspect-square" />
        ))}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
          const isSelected = selectedDate && 
            selectedDate.getDate() === day &&
            selectedDate.getMonth() === currentDate.getMonth() &&
            selectedDate.getFullYear() === currentDate.getFullYear()
          
          return (
            <button
              key={day}
              onClick={() => handleDateClick(day)}
              className={cn(
                "aspect-square rounded-md text-sm hover:bg-gray-100 transition-colors",
                isSelected && "bg-[#BB2324] text-white hover:bg-[#BB2324]"
              )}
            >
              {day}
            </button>
          )
        })}
      </div>
    </div>
  )
}


