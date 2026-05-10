import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/me/")({
    component: RouteComponent
})

function RouteComponent() {
    return <>
        <h1>MuhamMAD Navid E ZaMAN - MadManSerenade</h1>
        <h3>{/*Quran 68:2*/}</h3>
        <h2>Thou art not, by thy Sustainer's grace, a madman!</h2>
        <p>In all honesty, I expect most never to reach this page. My username across my many channels is a purposeful misdirection for all those who are not meant to collaborate with me or seek my services. So if you've managed to make it here, count yourself amoung a select few.</p>
    </>
}