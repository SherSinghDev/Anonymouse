import { useDispatch, useSelector } from "react-redux";
import {open} from "../../store/slices/sidebarSlice"

import Card from "../Card";
import cardData from "../CardData"
import { beActive } from "../../store/slices/menu";
import { useEffect } from "react";
export default function Services() {
    const sidebar = useSelector((state) => state.sidebar)
    const dispatch = useDispatch()
    // console.log(cardData)
    let servicesStyle = !sidebar ? "section section-full services" : "section services";
    let barStyle = !sidebar ? "add-side" : "add-side d-none";
    useEffect(()=>{
        dispatch(beActive("services"))
    })
    return (
        <>
            <section className={servicesStyle}>
                <div className="section-mainbox pb-5">
                    <div className={barStyle} onClick={()=>dispatch(open())}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <h1 className="section-head">Services</h1>
                    <div className="container-fluid py-4">
                        <div className="row g-4 gx-4">
                            {cardData.map((card)=><Card key={card.cardTitle} cardData={card}/>)}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}