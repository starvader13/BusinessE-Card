
const Introduction = () => {
    return (
        <div className={"block lg:flex mb-20 mt-20 lg:items-center"}>
            <div >
                <p className={"items-center text-2xl md:text-3xl py-4 font-extrabold text-gray-600"}>Create. Share. Impress. Instantly</p>
                <h1 className={"items-center text-7xl md:text-8xl pt-4 pb-10 font-extrabold text-gray-800"}>Business <span className={"text-red-400"}>E-Card</span> Generator</h1>
                <h3 className={"items-center text-4xl md:text-5xl py-8 font-semibold text-gray-400"}>Create Diverse E-Card With Custom Details!</h3>
                <button>

                </button>
            </div>
            <div className={"border-2 bg-white shadow-lg p-6 rounded-xl"}>
                <img src="img.png" alt="Card" width={850}/>
            </div>
        </div>
    );
};

export default Introduction;
