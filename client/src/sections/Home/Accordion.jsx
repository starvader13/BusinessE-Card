
const Accordion = ({question, answer, index, accordion, selectAccordion}) => {

    return (
        <div className={"flex flex-row justify-between items-center w-[95%] lg:w-[90%] border-2 rounded-lg font-mono m-2 px-4 py-2 gap-48 bg-blue-50 shadow-green-100 shadow-xl"}>
            <div className={"flex flex-col text-lg md:text-xl justify-start gap-4 "}>
                <div className={"text-gray-600 font-medium tracking-tighter"}>
                    {question}
                </div>

                <div className={`text-md md:text-lg hover:text-xl ${accordion === index ? `block` : `hidden`} pl-2 pb-1 font-lato font-medium`}>{answer}</div>
            </div>
            <div className={"border-2 bg-white focus:ring p-1"}>
                {
                    accordion !== index ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="size-3 lg:size-6 cursor-pointer" onClick={() => selectAccordion(index)}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                        </svg> :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                      stroke="currentColor" className="size-3 lg:size-6 cursor-pointer" onClick={() => selectAccordion(index)}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14"/>
                        </svg>
                }
            </div>
        </div>
    );
};
3

export default Accordion;
