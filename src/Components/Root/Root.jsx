import Background from "../Background/Background";
import Foreground from "../Foreground/Foreground";
import Navbar from "../Navbar/Navbar";

const Root = () => {
    return (
        <div className="relative w-full h-screen bg-zinc-800">
            <Navbar/>
            <Background/>
            <Foreground/>
        </div>
    );
};

export default Root;