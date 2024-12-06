// import Image from "next/image";

import CircleChart from "@/components/circle-charts";
import { LineCharts } from "@/components/line-charts";
import {
  Card,
  CardContent,
} from "@/components/ui/card"

export default function Consommation() {
  return (
    <div className="w-full">
       <div className="flex flex-1 flex-col gap-4 p-4">
       <Card className="flex flex-col">
          <CardContent className="flex-1 p-8">
              <div className="grid grid-cols-2">
                <div className="text-4xl font-bold py-6">
                  Consommation
                </div>
                <CircleChart />
              </div>
              <div className="space-y-3">
                <LineCharts />
              </div>
          </CardContent>
        </Card>
    </div>
    </div>
  );
}
