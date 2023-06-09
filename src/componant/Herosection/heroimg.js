import "./heroimg.css";
import BImge from "../../assets/bgimg.jpg"
import {Link} from "react-router-dom"

const HeroImg=()=>{
    return(
       <div className="hero">
            <div className="mask">
                <img className="Into-img" src={BImge} alt="bgImg"/>
            </div>
            <div className="content">
                <p>Hi, I'am Freelancer</p>
                <h1>React Developer.</h1>
                <div className="Button">
                <Link to="PortfolioReact/project" className="btn" >Projects</Link>
                <Link to="PortfolioReact/contact" className="btn btn-light" >Contacts</Link>
            </div>
            </div>
            
       </div>
    )
}

export default HeroImg;