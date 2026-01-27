import Landing from "./home/landing";
import News from "./home/news";
import Vision from "./home/vision";
import Philosophy from "./home/philosophy";
import Community from "./home/community";
import Educational from "./home/educational";
import Reputation from "./home/reputation";
import Showcase from "./home/showcase";
import "../../styles/pages/home.css"

export default function Home() {
    return (
        <>
            <main>
                <Landing></Landing>
                <News></News>
                <Vision></Vision>
                <Philosophy></Philosophy>
                <Community></Community>
                <Educational></Educational>
                <Reputation></Reputation>
                <Showcase></Showcase>
            </main>
        </>
    )
}