import { Link } from "react-router-dom"

export default function Header(){
    return(
        <>
            <div className="header-main">
                <Link to="/">TwitWald</Link>
            </div>
        </>
    )
}