import { useDispatch, useSelector } from "react-redux";
import { open } from "../../store/slices/sidebarSlice"
import emailjs from "@emailjs/browser"

import { beActive } from "../../store/slices/menu";
import { useEffect, useRef } from "react";
export default function Contact() {
    const sidebar = useSelector((state) => state.sidebar)
    const dispatch = useDispatch()
    let contactStyle = !sidebar ? "section section-full contact" : "section contact";
    let barStyle = !sidebar ? "add-side" : "add-side d-none";
    useEffect(() => {
        dispatch(beActive("contact"))
    })
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_c2b7ih8', 'template_ncfyhra', form.current, {
                publicKey: 'J0xVU2iEZmJvqoBXC',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert("Your Request Has Been Send..")
                    let formItem = document.querySelector(".contact-form")
                    formItem.user_name.value = ''
                    formItem.user_email.value = ''
                    formItem.subject.value = ''
                    formItem.message.value = ''
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <>
            <section className={contactStyle}>
                <div className="section-mainbox pb-5">
                    <div className={barStyle} onClick={() => dispatch(open())}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <h1 className="section-head">Contact</h1>
                    <div className="text-center">
                        <h2 className="main-head"><span>Have You Any Query</span></h2>
                        <h4 className="detail-head mb-4">I'M AT YOUR SERVICE</h4>
                        <div className="container-fluid my-5">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="card-icon contact-icon mb-3">
                                        <i className="fa-solid fa-phone-flip"></i>
                                    </div>
                                    <h4 className="detail-head mb-1">Call Me On</h4>
                                    <p className="para">+91 8474950220</p>
                                </div>
                                <div className="col-lg-3">
                                    <div className="card-icon contact-icon mb-3">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <h4 className="detail-head mb-1">Address</h4>
                                    <p className="para">Mathura, Uttar Pradesh</p>
                                </div>
                                <div className="col-lg-3">
                                    <div className="card-icon contact-icon mb-3">
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <h4 className="detail-head mb-1">Message Me On</h4>
                                    <p className="para">+91 8474950220</p>
                                </div>
                                <div className="col-lg-3">
                                    <div className="card-icon contact-icon mb-3">
                                        <i className="fa-brands fa-linkedin"></i>
                                    </div>
                                    <h4 className="detail-head mb-1">Linked In</h4>
                                    <p className="para"><a href="https://www.linkedin.com/in/sher-singh-683b9b301/">Get Connect</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container fluid">
                        <form className="row g-3 py-4 contact-form" ref={form} onSubmit={sendEmail}>
                            <div className="col-md-6">
                                <input type="text" className="form-control rounded-4" name="user_name" id="username" placeholder="Name" />
                            </div>
                            <div className="col-md-6">
                                <input type="email" className="form-control rounded-4" name="user_email" id="useremail" placeholder="Email" />
                            </div>
                            <div className="col-12">
                                <input type="text" className="form-control rounded-4" id="inputAddress" name="subject" placeholder="Subject" />
                            </div>
                            <div className="col-12">
                                <textarea className="form-control" rows="6" name="message" id="message" placeholder="Message"></textarea>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn1">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}