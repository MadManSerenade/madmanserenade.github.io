import Header from './frame/header'
import Left from './frame/left'
import Right from './frame/right'
import Footer from './frame/footer'
import "../styles/frame.css"

export default function Frame() {
    console.log("bruh")
    return (
        <div id="frame">
            <Header></Header>
            <Left></Left>
            <Right></Right>
            <Footer></Footer>
        </div>
    )
}