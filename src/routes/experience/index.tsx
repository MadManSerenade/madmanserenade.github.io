import UnderConstruction from "@/components/under-construction"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/experience/")({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <UnderConstruction>
      <h1>MuhamMAD Navid E ZaMAN - MadManSerenade</h1>
      <h3 className="text-3xl rtl:ml-0">مَآ أَنتَ بِنِعْمَةِ رَبِّكَ بِمَجْنُونٍۢ</h3>
      <h2>Thou art not, by thy Sustainer's grace, a madman!</h2>
      <h2>Quran 68:2</h2>
    </UnderConstruction>
  )
}