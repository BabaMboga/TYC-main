import GetInTouchCard from "@/components/GetInTouchCard";
import ContactForm from "@/components/ContactForm";
import {FC} from "react";

interface pageProps{

}

const page: FC<pageProps> = ({}) => {
    return (
        <>
            <section id="contact" className="pb-16 bg-violet-100" >
                <div className="max-w-[1080px] pl-[20px] pr-[20px] mx-auto my-auto">
                    <h2 className="text-3xl text-center font-[800] text-[2.5rem] mb-8">
                        Reach out
                    </h2>
                    <div className="md:flex justify-between items-center">
                        <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
                            <iframe
                                title="google-maps"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63823.92673525492!2d36.95404762190003!3d-1.1637023329624467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f38a78cb4e50d%3A0xdaa7fad9c2cbf0fb!2sRuiru!5e0!3m2!1sen!2ske!4v1712223081509!5m2!1sen!2ske"
                                className="border-0 w-full h-full"
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8 pl-7">
                            <ContactForm /> {/* Render the ContactForm component */}
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
    );
}

export default page
