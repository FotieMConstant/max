import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const defauts = [
  {
    defaut: "Batt Volt too high",
    code: "0",
    date: "18/06",
    heure: "18/06",
  },
  {
    defaut: "Terminals over heated",
    code: "26",
    date: "19/11",
    heure: "10h58",
  },
]

export default function TableComponent() {
  return (
    <Table>
      <TableCaption>List des DEFAUT</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-7/12">DEFAUT</TableHead>
          <TableHead className="text-right">CODE</TableHead>
          <TableHead className="text-right">DATE</TableHead>
          <TableHead className="text-right">HEURE</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {defauts.map((defaut) => (
          <TableRow key={defaut.defaut}>
            <TableCell className="font-medium">{defaut.defaut}</TableCell>
            <TableCell className="text-right">{defaut.code}</TableCell>
            <TableCell className="text-right">{defaut.heure}</TableCell>
            <TableCell className="text-right">{defaut.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

