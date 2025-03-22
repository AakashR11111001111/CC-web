import BookDemoBtn from "../BookDemo Btn/BookDemoBtn";

const Header = () => {
    return (
        <div className="py-12 px-10 flex justify-between items-center text-center p-4">
            <div className="h-full flex items-center space-x-2">
                <img className="h-12 w-auto object-cover" src="https://www.carboncrunch.in/assets/logoCC-CbQ2kroI.png" alt="Logo" />
                <h1 className="text-2xl text-zinc-950">Carboncrunch</h1>
            </div>
            <ul className="flex space-x-10 font-semibold">
                <li className="text-gray-700 hover:text-darkgreen cursor-pointer">Home</li>
                <li className="text-gray-700 hover:text-darkgreen cursor-pointer">Services</li>
                <li className="text-gray-700 hover:text-darkgreen cursor-pointer">Blog</li>
                <li className="text-gray-700 hover:text-darkgreen cursor-pointer">About Us</li>
                <li className="text-gray-700 hover:text-darkgreen cursor-pointer">Contact</li>
            </ul>
            <div className="flex space-x-4">
                <button className="px-10 py-2 rounded-xs font-bold bg-lightgreen text-darkgreen">Login</button>
                <BookDemoBtn />
            </div>
        </div>
    )
}
export default Header;