// import Image from "next/image";

import TableComponent from "@/components/table";
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {CheckCircleIcon, CircleXIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
       <div className="flex flex-1 flex-col gap-4 p-4">
       <Card className="flex flex-col">
          <CardContent className="flex-1 p-8">
              <div className="grid grid-cols-2">
                <div className="text-4xl font-bold py-6">
                Defauts
                </div>
                <div className="flex justify-between">
                  <div className="flex">
                    <CheckCircleIcon size={24} className="text-green-500 mr-3" />PAS DE DEFAUTS 
                  </div>
                  <div className="flex justify-between">
                    <CircleXIcon size={24} className="text-red-500 mr-3" />
                    PAS DE DEFAUTS
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <TableComponent />
              </div>
          </CardContent>
        </Card>
    </div>
    </div>
  );
}
