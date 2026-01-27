import "../../../styles/pages/home/educational.css"

export default function Educational() {
    return (
        <section id="educational">
            <img useMap="knowledge"></img>
            <map name="knowledge">
                {/* <area id="legend" shape="rect"></area> */}
                <input type="range" />
            </map>
        </section>
    )
}