import React, { useState, useRef } from "react"
// import emailjs from "@emailjs/browser"
// import axios from "axios"
// import { toast } from "react-toastify"
// import { BASE_URL } from "../../utils/common.util"

const ContactComponent = () => {
	const [fullname, setFullname] = useState("")
	const [email, setEmail] = useState("")
	const [message, setMessage] = useState("")
	const [phone, setPhone] = useState()
	const [click, setclick] = useState(false)

	const form = useRef()

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     axios
    //         .post(`https://clever-ox-galoshes.cyclic.app/api/contact`, {
    //             fullname: fullname,
    //             email: email,
    //             message: message,
    //             phone : phone
    //         })
    //         .then((res) => {
    //             console.log(res.data, "res.data");
    //             if (res.data === "Email has been sent") {
    //                 toast.success("Email has been sent", {
    //                     position: "top-right",
    //                     autoClose: 5000,
    //                     hideProgressBar: false,
    //                     closeOnClick: true,
    //                     pauseOnHover: true,
    //                     draggable: true,
    //                     progress: undefined,
    //                 });
    //             } else {
    //                 toast.error("Email has not sent", {
    //                     position: "top-right",
    //                     autoClose: 5000,
    //                     hideProgressBar: false,
    //                     closeOnClick: true,
    //                     pauseOnHover: true,
    //                     draggable: true,
    //                     progress: undefined,
    //                 });
    //             }
    //         });
    // };

	return (
		<section className="text-gray-100  mt-10 ">
			<div className="  w-[70%]  flex justify-between py-5 mt-7 mx-auto text-gray-900 rounded-lg">
				<div className="flex flex-col justify-between w-[45%]">
					<div>
						<h2 className="text-3xl lg:text-3xl font-bold leading-tight">
							We'd Love to Hear From You
						</h2>
						<div className="text-gray-700 mt-8 w-3/4">
							We are always listening, and waiting to help you.
							Write to us to collaborate, seek help or tell us
							your feedbacks and we will reach out to you!
						</div>
						<div>
							<div className="google-map-code">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.161518906454!2d80.2532004!3d13.088948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265900495dcd3%3A0xb979159f99fd2231!2sAndhaadhi%20Rehab!5e0!3m2!1sen!2sin!4v1704895456352!5m2!1sen!2sin"
									width="600"
									height="355"
									style={{
										border: 0,
										width: "100%",
										position: "relative",
									}}
									allowfullscreen=""
									loading="lazy"
									referrerpolicy="no-referrer-when-downgrade"></iframe>
							</div>
						</div>
					</div>
				</div>
				<form
				className="w-[45%]"
					ref={form}
					onSubmit={(e) => {
						// handleSubmit(e)
					}}>
					<div>
						<span className="uppercase text-sm text-gray-600 font-bold">
							Full Name
						</span>
						<input
							className="rounded-lg outline-none bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
							type="text"
							placeholder=""
							
							required
							onChange={(e) => setFullname(e.target.value)}
							name="user_name"
						/>
					</div>
					<div className="mt-8">
						<span className="uppercase text-sm text-gray-600 font-bold">
							Email
						</span>
						<input
							className="rounded-lg outline-none bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
							required
							type="email"
							onChange={(e) => setEmail(e.target.value)}
							name="user_email"
						/>
					</div>
					<div className="mt-8">
						<span className="uppercase text-sm text-gray-600 font-bold">
							Phone Number
						</span>
						<input
							className="rounded-lg outline-none bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
							required
							type="phone"
							onChange={(e) => setPhone(e.target.value)}
							name="user_phone"
						/>
					</div>
					<div className="mt-8">
						<span className="uppercase text-sm text-gray-600 font-bold">
							Message
						</span>
						<textarea
							style={{ resize: "none" }}
							className="rounded-lg outline-none bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 h-32"
							required
							name="message"
							onChange={(e) =>
								setMessage(e.target.value)
							}></textarea>
					</div>
					<div className="mt-8">
						<input
							type="submit"
							value="Send Message"
							className="cursor-pointer uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
						/>
					</div>
				</form>
			</div>
		</section>
	)
}

export default ContactComponent
