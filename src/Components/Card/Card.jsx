import PropTypes from "prop-types";
import { FaRegFileLines } from "react-icons/fa6";
import { AiOutlineDownload } from "react-icons/ai";
import { motion } from "framer-motion"


const Card = ({ data }) => {
    return (
        < motion.div drag whileDrag={{scale:1.2}} className=" m-5 flex flex-col text-zinc-100 w-60 h-72 rounded-xl bg-zinc-900 overflow-hidden">
            <div className="py-10 px-5 leading-normal flex-grow" >
                <FaRegFileLines className="text-xl mb-2" />
                <h1 className="font-semibold hover:underline hover:pd-2 " >{data.title}</h1>
                <p className= " mt-3 text-gray-500 leading-none tracking-tight text-balance">{data.description}</p>

            
            </div>
            <div className="px-5 w-full   ">
             <div className="flex justify-between items-center mb-3">
                <p>{data.deadline}</p>
                <div className="w-6 h-6 rounded-full flex justify-center items-center bg-white hover:bg-blue-900">
                <AiOutlineDownload className="font-bold text-black text-xl"/>
                </div>
              
             </div>
             
                
            </div>
          
                 <div className="flex justify-center items-center w-full h-12 bg-green-800 ">
                <h1 className=" text-xl font-bold text-white ">data</h1>
                                        </div>
                                
          
        </motion.div>
    );
};
Card.propTypes = {
    data: PropTypes.object
}
export default Card;