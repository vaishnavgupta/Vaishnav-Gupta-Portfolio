import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c3v1ke8", //Service ID
        "template_7zf7y2s", //Template Id
        form.current,
        "Tsj80NRoeuezV6NlF" //Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully!😊", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.log("Error Sending Message!☹️", error);
          toast.error("Failed to send message ☹️. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >

      {/* For Toast */}
      <ToastContainer/>

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-[#8245ec] mx-auto mt-2" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or
          questions!
        </p>
      </div>
      {/* Contact Form */}
      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-center text-white">
          Connect With Me 🔥
        </h3>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            className="mt-4 w-full p-3 rounded-md text-white border bg-[#131025] border-gray-600 focus:outline-none focus:border-purple-400"
          />

          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            className="mt-4 w-full p-3 rounded-md text-white border bg-[#131025] border-gray-600 focus:outline-none focus:border-purple-400"
          />

          <input
            type="text"
            name="user_subject"
            placeholder="Enter subject"
            className="mt-4 w-full p-3 rounded-md text-white border bg-[#131025] border-gray-600 focus:outline-none focus:border-purple-400"
          />

          <textarea
            name="user_message"
            placeholder="Enter your message"
            rows="5"
            className="mt-4 w-full p-3 rounded-md text-white border bg-[#131025] border-gray-600 focus:outline-none focus:border-purple-400"
          ></textarea>

          <button
            type="submit"
            className="mt-4 pt-2 pb-2 w-full bg-gradient-to-l from-purple-600 to-pink-500 text-white font-semibold rounded-md hover:opacity-90 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
