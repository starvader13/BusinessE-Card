import Introduction from "../../sections/Home/Introduction.jsx";
import Testimonials from "../../sections/Home/Testimonials.jsx";
import Accordion from "../../sections/Home/Accordion.jsx";
import DemoTestimonials from "../../utils/DemoTestimonials.js";
import Star from "../../sections/Home/Star.jsx";
import AccordionContent from "../../utils/AccordionContent.js";
import {useState} from "react";

const Home = () => {
    const [selectedAccordion, setSelectedAccordion] = useState(0);

    const selectAccordion = (selectedIndex) => {
        selectedAccordion === selectedIndex ? setSelectedAccordion(0) : setSelectedAccordion(selectedIndex);
    }

    return <div className={"mt-6 mx-6 px-4 pt-2"}>
        <section>
            <Introduction/>
        </section>
        <hr className={"border-1 rounded-xl"}/>
        <section className={"flex flex-col justify-center items-center mb-5 mt-6"}>
            <div
                className={"flex flex-col justify-center items-center text-4xl font-lato font-semibold mb-12 mt-6 text-gray-600 bg-blue-50 rounded-2xl px-8 py-3 shadow-2xl shadow-amber-200"}>
                <Star/>
                <div>{"Don't take our word for it. Take theirs"}</div>
            </div>
            <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-3"}>
                {
                    DemoTestimonials.map((Testimonial, index) => {
                        return <Testimonials key={index} name={Testimonial.name} message={Testimonial.message}
                                             profession={Testimonial.profession}/>
                    })
                }
            </div>
        </section>
        {/*<hr className={"border-1 rounded-xl"}/>*/}
        <section className={"flex flex-col justify-center items-center mb-12 mt-4"}>
            <div
                className={"flex flex-row justify-center items-center text-6xl font-mono font-semibold mb-6 mt-12 text-gray-600 px-8 py-3 underline underline-offset-4 gap-8"}>
                <div className={"focus:animate-pingOnce"}>
                    FAQs
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor" className="size-12 hover:animate-pingOnce">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"/>
                </svg>

            </div>
            {
                AccordionContent.map((accordion) => {
                    return <Accordion key={accordion.index} question={accordion.question} answer={accordion.answer}
                                      index={accordion.index} accordion={selectedAccordion}
                                      selectAccordion={selectAccordion}/>
                })
            }
        </section>
        <hr className={"border-2 rounded-xl mt-12"}/>
    </div>
}

export default Home;
