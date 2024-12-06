// import Image from "next/image";

import { LineCharts } from "@/components/line-charts";
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { BatteryCharging, BatteryFull, BatteryWarning } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
       <div className="flex flex-1 flex-col gap-4 p-4">
       <Card className="flex flex-col">
          <CardContent className="flex-1 p-8">
              <div className="grid grid-cols-2">
                <div className="text-4xl font-bold py-6">
                  Batterie
                </div>
                <div className="flex justify-between">
                  <div className="hidden">
                    <BatteryFull size={200} className="text-green-500 mr-3" />
                    <div className="text-5xl font-bold text-center">
                      100%
                    </div>
                  </div>
                  <div className="justify-between">
                    <BatteryCharging size={200} className="text-green-500 mr-3" />
                    <div className="text-5xl font-bold text-center">
                      78%
                    </div>
                  </div>
                  <div className="hidden justify-between">
                    <BatteryWarning size={200} className="text-red-500 mr-3" />
                    <div className="text-5xl font-bold text-center">
                      0%
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-2xl">Historique de charge</div>
                <LineCharts />
              </div>
          </CardContent>
        </Card>
    </div>
    </div>
  );
}
