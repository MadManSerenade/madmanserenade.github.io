// import { generalBadges } from "../../../data/generalBadges"
import { characters } from "../../../data/characters"
import "../../../styles/pages/home/reputation.css"

export default function Reputation() {
    return (
        <section id="reputation">
            {/* <Badges specifier="general" data={generalBadges}></Badges> */}
            <div id="characters"></div>
            <div id="skills"></div>
        </section>
    )
}

function Character() {
    const characterEl = characters.map((character) => {
        return (
            <li id={character.class}>
                <div id="character-badges"></div>
                <div id="character"></div>
                <div id="skills"></div>
            </li>
        )
    })

    return (
        <ul id="characters">{characterEl}</ul>
    )
}

// function Badges(specifier, data) {
//     const badgeEl = data.map((badgeImgSrc) => {
//         return <li><img  src={`${badgeImgSrc}`}  /></li>
//     })

//     return <ul id={`${specifier}-badges`}>{badgeEl}</ul>
// }

function Skills(data: [{ name: string, description: string }]) {
    const skillEl = data.map((skill) => {
        return (
            <li>
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
            </li>
        )
    })

    return <ul id="skills">{skillEl}</ul>
}