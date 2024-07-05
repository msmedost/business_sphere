import React, { useState } from 'react'
import './CardItem.css'

import { motion } from 'framer-motion'
import { fadeIn } from '../../variants';
import { Link } from 'react-router-dom';


const CardItem = (props) => {
    const { cardDetails } = props
    const { id, name, businesscategory, yourphoto, ba, pincode, city } = cardDetails

    const [showDetails, setShowDetails] = useState(false);

   

    return (

<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg m-4">
    <div className="flex justify-end px-4 pt-4">
    </div>
    <div className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 object-cover mb-3 rounded-full shadow-lg" src={yourphoto} alt="Bonnie image"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{businesscategory}</span>

        {showDetails && (
                    <div className=' w-screen h-screen top-0 left-0 fixed flex justify-center items-center bg-black bg-opacity-80 z-50'>
                        
                        <div className="w-[20%] h-[70%] bg-white flex py-10 px-4 gap-4 items-center flex-col text-center relative lg2:w-[50%] sm:w-[80%]">
                        <div className=' absolute top-0 right-4 text-2xl cursor-pointer'onClick={()=>setShowDetails(false)}>x</div>
                        <img className=' w-40 rounded-lg' src={yourphoto} alt="" />
                        <h1>Name: {name}</h1>
                            <h1>Address: <span>{ba} {pincode}  {city}</span></h1>
                            <h1>Business Category: <span>{businesscategory}</span></h1>
                            
                        </div>
                    </div>
                )}
        <div className="flex mt-4 md:mt-6">
            <button onClick={()=>setShowDetails(true)} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View More</button>
           
        </div>
    </div>
</div>

    )

}

export default CardItem
