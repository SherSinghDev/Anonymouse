import { useState } from "react"

export default function ColorChange() {
    let [setting, setsetting] = useState(false)
    let [dark, setDark] = useState(true);

    function ColorChange(color) {
        document.documentElement.style.setProperty("--theme-color", `${color}`)
        setsetting(false)
    }
    
    function themeClick() {
        setDark(!dark)
        document.querySelector("body").classList.toggle("dark");
    }
    let newclass = setting ? 'colorChange color-show ' : 'colorChange'
    let darkClass = dark ? "fa-solid fa-sun" : "fa-solid fa-moon"
    return (
        <>
            <div className={newclass}>
                <div className="color-btn">
                    <i className="fa-solid fa-gear" title="Change Theme" onClick={()=>setsetting(!setting)}></i>
                    <i className={darkClass} title="Switch Mode" onClick={themeClick}></i>
                </div>
                <div className="color-box">
                    <h4 className="detail-head m-0 p-0 mb-2 text-center">Change Theme</h4>
                    <div className="colors">
                        <div className="color crimson" onClick={() => ColorChange("crimson")}></div>
                        <div className="color aqua" onClick={() => ColorChange("aqua")}></div>
                        <div className="color greenyellow" onClick={() => ColorChange("greenyellow")}></div>
                        <div className="color hotpink" onClick={() => ColorChange("hotpink")}></div>
                        <div className="color orange" onClick={() => ColorChange("orange")}></div>
                        <div className="color lightseagreen" onClick={() => ColorChange("lightseagreen")}></div>
                        <div className="color salmon" onClick={() => ColorChange("salmon")}></div>
                        <div className="color yellow" onClick={() => ColorChange("yellow")}></div>
                    </div>
                </div>
            </div>
        </>
    )
}