import "../../../styles/pages/home/news.css"

const data: any[] = [1, 2, 3, 4, 5, 6, 7, 8]

export default function News() {
    return (
        <section id="news">
            <Articles></Articles>
        </section>
    )
}

function Articles() {
    const articles = data.slice(0,6).map((article, index) => {
        return (
            <li>
                <article>
                    <h2>{`${article}`}</h2>
                    <p>{`${index}`}</p>
                </article>
            </li>
        )
    })

    return <ul id="articles">{articles}</ul>
}