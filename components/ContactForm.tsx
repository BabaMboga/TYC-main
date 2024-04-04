import Image from "next/image";
import React from "react";
import {FC} from "react";

// Create a functional component to handle form submission
const ContactForm: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Get form data
        const formData = new FormData(event.currentTarget);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const subject = formData.get("subject") as string;
        const message = formData.get("message") as string;

        const encodedMessage = encodeURIComponent(` Good day, my name is ${name}. ${message} (${email})`);

        // Open email client with form data
        window.location.href = `mailto:info@tycafricatrust.org?subject=${encodeURIComponent(subject)}&body=${encodedMessage}`;
    };

    return (
        <form className="w-full" onSubmit={handleSubmit}>
            <div className="mb-5">
                <input 
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-3 focus:outline-none rounded-[5px]"
                />
            </div>
            <div className="mb-5">
                <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-3 focus:outline-none rounded-[5px]" 
                />
            </div>
            <div className="mb-5">
                <input
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    className="w-full p-3 focus:outline-none rounded-[5px]" 
                />
            </div>
            <div className="mb-5">
                <textarea
                    name="message"
                    rows={5}
                    placeholder="Write your message"
                    className="w-full p-3 focus:outline-none rounded-[5px]" 
                />
            </div>

            <button className="w-full p-3 focus:outline-none rounded-[5px] bg-[#193256] text-white
            hover:bg-[#081e21] text-center ease-linear duration-150">
                Send Message
            </button>
        </form>
    );
};

export default ContactForm;