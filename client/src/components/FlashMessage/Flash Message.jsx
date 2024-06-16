const FlashMessage = ({message}) => {
    return (
        <div className={"rounded-2xl shadow-md shadow-green-800 mb-2 px-4 py-2 bg-gradient-to-tr from-emerald-600 to-red-400 text-lg text-white font-mono font-medium tracking-tighter"}>
            {message}
        </div>
    );
};

export default FlashMessage;
