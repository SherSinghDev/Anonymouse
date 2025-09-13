import heroImg from "../../assets/teamone.jpeg"
import { ReactTyped } from "react-typed";
import { open } from "../../store/slices/sidebarSlice"
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { beActive } from "../../store/slices/menu";
import { useEffect } from "react";

export default function Home() {
    const sidebar = useSelector((state) => state.sidebar)
    const dispatch = useDispatch()
    let homeStyle = !sidebar ? "section section-full home" : "section home";
    let barStyle = !sidebar ? "add-side" : "add-side  d-none";
    useEffect(()=>{
        dispatch(beActive("home"))
    })
    return (
        <>
            <section className={homeStyle}>
                <div className="main-box">
                    <div className={barStyle} onClick={() => dispatch(open())}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <div className="main-content">
                        <h1 className="main-head">Hello, my name is <span className="clicker">Sher Singh</span></h1>
                        <h1 className="main-head">I'm a <ReactTyped strings={["MERN Developer", "Backend Developer", "Frontend Developer"]} typeSpeed={80} backSpeed={40} loop /></h1>
                        <p className="para">As a full-stack web developer, my passion lies in the seamless integration of front-end and back-end technologies to build cohesive and dynamic web applications. I am driven by the challenge of bridging the gap between user experience and functionality, ensuring that every application I develop is both visually appealing and highly performant.</p>
                        <Link to="/about"><button className="btn1">More About Me</button></Link>
                    </div>
                    <div className="hero-img">
                        <img src={heroImg} alt="img" />
                    </div>
                </div>
            </section>
        </>
    )
}