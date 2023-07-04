import { useSelector } from "react-redux";

import CartItem from '../components/CartItem'

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";




const Cart=()=>{

const {cart}=useSelector((state)=>state);
const [totalAmount,setTotalAmount]=useState(0);


useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0));
},[cart])


    return(
        <div>
        {
            cart.length>0
            
            
             ?
            
             (<div className="flex mx-auto flex-row justify-center max-w-6xl">
             <div className="w-[60%]">
             {
                cart.map ((item,index)=>(
                    <CartItem  key={item.id} item={item} itemIndex={index}  />
                ))
             }

             </div>


             <div className="flex flex-col w-full md:w-[40%] mt-3">
                   <div className="flex flex-col p-5 gap-5 my-14 h-full justify-between">



                    {/* 1stpart */}
            


             <div className="flex flex-col gap-2">
             <div className="font-semibold text-xl text-green-800">Your Cart</div>
             <div className="font-semibold text-5xl text-green-700 ">Summary</div>
             <p className="text-xl py-3">
                <span>Total Items : {cart.length}</span>
             </p>

             </div>

                {/* 2nd Part */}



             <div className="flex flex-col">
             <p className="text-xl font-bold">Total Amount: ${totalAmount}</p>
             <button
              className="bg-green-700  hover:bg-purple-50 rounded-lg 
               text-white transition duration-300 ease-linear mt-5  border-2  border-green-600  font-bold  hover:text-green-700  p-3  text-xl
               uppercase   ">CheckOut Now</button>



             </div>






                   </div>

            


            </div>

             </div>)
            
            
            : 
            
            <div className="min-h-[80vh] flex flex-col items-center justify-center">
            <h1 className="text-gray-700 font-semibold text-2xl mb-2">Your Cart is Empty !!</h1>
            <Link to="/">
                <button  className="bg-green-700  hover:bg-purple-50 rounded-lg 
               text-white transition duration-300 ease-linear mt-5  border-2  border-green-600  font-bold  hover:text-green-700  p-3  text-xl
               uppercase   ">Shop Now</button>
            </Link>
            </div>
        }
           
           


















        </div>
    )
}
export default Cart;