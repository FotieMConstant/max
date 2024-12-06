"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
} from "recharts"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CardContent } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartConfig,} from "./ui/chart"

type DataPoint = {
  date: Date
  kw: number
}

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function LineCharts() {
  const [date, setDate] = React.useState<DateRange>({
    from: new Date(2022, 0, 1),
    to: new Date(2022, 0, 7),
  })
  const [selectedRange, setSelectedRange] = React.useState<DateRange>(date)
  const [chartData, setChartData] = React.useState<DataPoint[]>([])

  React.useEffect(() => {
    // Generate initial data
    const initialData = generateData(date.from!, date.to!)
    setChartData(initialData)
  }, [date])

  const handleShowClick = () => {
    if (selectedRange.from && selectedRange.to) {
      setDate(selectedRange)
      // Simulate API call to fetch data
      const newData = generateData(selectedRange.from, selectedRange.to)
      setChartData(newData)
      console.log("Selected Date Range:", selectedRange)
      // Submit to backend if needed
      // fetch("/api/data", { method: "POST", body: JSON.stringify(selectedRange) })
    }
  }

  function generateData(startDate: Date, endDate: Date): DataPoint[] {
    const dataPoints: DataPoint[] = []
    const currentDate = new Date(startDate)
    while (currentDate <= endDate) {
      dataPoints.push({
        date: new Date(currentDate),
        kw: Math.floor(Math.random() * 300) + 50, // Random kw between 50 and 350
      })
      currentDate.setDate(currentDate.getDate() + 1)
    }
    return dataPoints
  }

  return (
    <div>
      <div className={cn("grid gap-2", "mb-4")}>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={"outline"}
              className={cn(
                "w-[300px] justify-start text-left font-normal",
                !selectedRange && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {selectedRange.from ? (
                selectedRange.to ? (
                  <>
                    {format(selectedRange.from, "LLL dd, y")} -{" "}
                    {format(selectedRange.to, "LLL dd, y")}
                  </>
                ) : (
                  format(selectedRange.from, "LLL dd, y")
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={selectedRange.from}
              selected={selectedRange}
              onSelect={(range) => range && setSelectedRange(range)}
              numberOfMonths={2}
            />
            <div className="h-12 relative">
              <Button
                className="absolute right-3 bottom-3"
                onClick={handleShowClick}
              >
                Show
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <CardContent className="p-0 pt-0">
      <ChartContainer config={chartConfig}>
        <LineChart
          data={chartData}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis
            dataKey="date"
            tickFormatter={(date) => format(new Date(date), "MMM dd")}
          />
          <ChartTooltip
            labelFormatter={(date) => format(new Date(date), "PPP")}
          />
          <CartesianGrid stroke="#f5f5f5" />
          <Line
            type="linear"
            dataKey="kw"
            stroke="#2761d9"
            strokeWidth={2}
            yAxisId={0}
            dot={false}
          />
        </LineChart>
        </ChartContainer>
      </CardContent>
    </div>
  )
}