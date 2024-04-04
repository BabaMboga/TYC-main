import GetInTouchCard from "@/components/GetInTouchCard";
import Image from "next/image"

export default function Home() {
    const handleSubmit = (event) => {
        event.preventDefault();

        // Get form data
        const name = event.target.elements.name.value;
        const email = event.target.elements.email.value;
        const subject = event.target.elements.subject.value;
        const message = event.target.elements.message.value;

        const encodedMessage = encodeURIComponent(` Good day, my name is ${name}. ${message} (${email})`);

        // Open email client with form data

        window.location.href = `mailto:info@tycafricatrust.org?subject=${encodeURIComponent(subject)}&body=${encodedMessage}`;
    };
    return (
        <>
        <section id="contact" className="pb-16">
            <div className="container">
                <h2 className="text-xl font-[800] text-[2.5rem] mb-8">
                    Reach out
                </h2>
                <div className="md:flex justify-between items-center">
                    <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">

                    </div>

                </div>

            </div>
        </section>
        <section>
            <div>
                <GetInTouchCard/>
            </div>
        </section>
        </>
        
    )
}