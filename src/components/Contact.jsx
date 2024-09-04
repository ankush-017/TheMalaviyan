import React, { useState } from 'react'
import emailjs from 'emailjs-com';

export default function Contact() {

    const [showMessage, setShowMessage] = useState(false);
    const [formData,setformData] = useState({
        name: '',
        email: '',
        Mobile: '',
        Message: ''
    })

    const handleChange = (e) => {
        setformData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

      const sendEmail = (e) => {
        e.preventDefault();
        setShowMessage(true);
        emailjs.sendForm(
          'service_sdr95mc',   // Replace with your EmailJS Service ID
          'template_o7qs7ga',  // Replace with your EmailJS Template ID
          e.target,            // The form element
          'xkxh4VlC7lVEBf4d4'      // Replace with your EmailJS User ID
        ).then((result) => {
          console.log('Email sent successfully:', result.text);
        }, (error) => {
          console.log('Failed to send email:', error.text);
        });
    
        // Reset form
        setformData({
          name: '',
          email: '',
          Mobile: '',
          Message: ''
        });
      };

    return (
        <>
        <div className='bg-black'>
        <div className='flex flex-col text-center max-w-[800px] mx-auto mt-5 text-white'>
            <p className='bg-[#e8a909] mt-11 rounded-lg py-1 px-2 text-[18px] mb-10'>
                <strong className='text-black'>Contact Us: </strong> We value your feedback and are here to help! Whether you have questions about anything, need assistance, or want to share your ideas, feel free to reach out to us. 
            </p>
        </div>
        <div className="relative flex items-top justify-center h-screen bg-black sm:mt-[10px] sm:pt-0">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <div className="grid grid-cols-1">
                        <form onSubmit={sendEmail} className="flex flex-col justify-center items-center">
                            <div className="flex flex-col">
                                <label htmlFor='name' className="hidden">
                                    Full Name
                                </label>
                                <input
                                    type="name"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    placeholder="Full Name"
                                    onChange={handleChange}
                                    className=" mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                    required
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label htmlFor="email" className="hidden">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label htmlFor="tel" className="hidden">
                                    Number
                                </label>
                                <input
                                    type="tel"
                                    name="Mobile"
                                    id="tel"
                                    placeholder="Telephone Number"
                                    required
                                    onChange={handleChange}
                                    value={formData.Mobile}
                                    className="mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col mt-2">
                                <label htmlFor="message" className="hidden">
                                    Number
                                </label>
                                <textarea
                                    type="text"
                                    name="Message"
                                    id="message"
                                    placeholder="Write your message (Comments) .........."
                                    required
                                    onChange={handleChange}
                                    value={formData.Message}
                                    className="mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="md:w-32 bg-[#dab626] hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                            >
                                Submit
                            </button>
                            {/* <div className='text-white mt-7 ml-5'>
                                <p>Thanks for Contact us ....</p>
                                <h1>We will contact soon ....</h1>
                            </div> */}
                        </form>
                    </div>
                    {showMessage && (
                        <div className='py-2 text-[18px] text-[#4dc104] font-semibold flex flex-col rounded-2xl items-center justify-center mt-7 ml-5'>
                            <p>Thanks for contacting us ....</p>
                            <h1>We will contact you soon ....</h1>
                        </div>
                    )}
                </div>
            </div>
        </div>
        </div>
    </>
    );
}