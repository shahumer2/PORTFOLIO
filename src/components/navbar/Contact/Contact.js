import React, { useRef, useState } from 'react'
import "./Contact.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
function Contact() {
    const notify = () => toast("Email Sent!");
    const [done, setdone] = useState(false)
    const form = useRef();





    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dkfa47d', 'template_ztmes4h', form.current, 'xLf82HYDpaLKQmdAR')
            .then((result) => {
                console.log(result.text);
                setdone(true)

            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="contact-form" id='contact'>
            <div className="c-left">
                <div className="awesome">
                    <span>Get in Touch</span>
                    <span>Contact Me</span>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1"> Name</label>
                        <input type="name" name='user_name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" required />

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Email</label>
                        <input type="Email" name="user_email" className="form-control" id="exampleInputPassword1" placeholder="Email" required />
                    </div>
                    <div className="form-mess">
                        <label htmlFor="mess">Message</label>

                        <textarea name="message" className="form-control" id="mess" cols="30" rows="5" placeholder='Enter Your Message' required></textarea>


                    </div>
                    <button type="submit" className="btn btn-warning">Submit</button>

                    <span>{done}
                    </span>
                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                    />
                </form>

            </div>
        </div>
    )
}

export default Contact
// {<span>{done && toast.success("Email Sent successfully")}
// </span>}