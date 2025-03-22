import BookDemoBtn from "../BookDemo Btn/BookDemoBtn";

const Hero = () => {
    return (
        <div className="h-screen w-full flex flex-wrap my-20">
            <div className="h-screen w-1/2 p-10">
                <span className="rounded-full w-1/2 bg-black text-[#afb0b5] py-2.5 px-4 text-center text-sm block mb-4">👋 Let's Save our Environment</span>
                <h1 className="text-6xl font-bold">Optimise your eco <br /> reporting with</h1>
                <h1 className="bg-[#feab4f] text-white font-semibold rounded-[40px] my-3.5 px-4 py-3 text-7xl">Carbon Crunch</h1>
                <h4 className="text-xl font-semibold tracking-[0.5px]"><span className="text-darkgreen">95%</span> Accurate Carbon Calculations Trusted by Industry Leaders</h4>
                <div className="flex items-center my-10 font-semibold tracking-[0.6px] text-xl p-7 gap-[10px]">
                    <button className="text-darkgreen">Free Calculator</button>
                    <BookDemoBtn />
                </div>
            </div>
            <div className="h-screen w-1/2 p-10 rounded-2xl flex justify-center items-center">
                <img className="h-5/6 object-cover rounded-4xl" src="https://tycooninsightsglobal.com/wp-content/uploads/2024/12/How-Global-Health-Initiatives-Are-Transforming-Lives-Worldwide.webp" alt="" />
            </div>
            <div></div>
        </div>
    )

}

export default Hero;