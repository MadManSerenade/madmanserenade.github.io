const data: any[] = []

export default function Footer() {
    return (
        <footer className="drawer">
                <SiteMap></SiteMap>
                <Socials></Socials>
                <Contact></Contact>
        </footer>
    )
}

function SiteMap() {
    return (
        <div id="site-map">
            <img src="" alt="" useMap="site-map" />
            <map name="site-map"></map>
        </div>
    )
}

function Socials() {
    const socialEl = data.map((social, index) => {   
        return (
            <li>{`${social} ${index}`}</li>
        )
    })

    return <ul id="socials">{socialEl}</ul>
}

function Contact() {
    return (
        <form action="" id="contact"></form>
    )
}