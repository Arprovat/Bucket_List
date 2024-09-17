import { useState } from "react";
import Model from './../Model/Model';

const Navbar = () => {
    const [Open,setOpen]=useState(false);
    const closeModal = () => setOpen(false);
    return (
        
<div className=" z-[4] fixed px-5 navbar bg-transparent">
  <div className="flex-1">
    <a className="btn btn-ghost text-zinc-400 font-bold text-2xl">Bucket-list</a>
  </div>
  <div className="flex-none">
    <div>

      <div  role="button" onClick={()=>setOpen(true)} className="w-32 btn bg-gray-600  ">
       Add List</div>
       <Model open={Open} isClose={closeModal}></Model>
    </div>

      
    
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
      </div>
      
    </div>
  </div>
</div>
        
    );
};

export default Navbar;