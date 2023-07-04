

import {useSelector,useDispatch} from "react-redux"
import {add,remove} from '../redux/Slices/CartSlice';

import {toast} from "react-toastify"

const Product=({post})=>{

const {cart}=useSelector((state)=>state)

const dispatch=useDispatch();

const removeFromCartHandler=()=>{

    dispatch(remove(post.id));
    toast.error("Items Removed from Cart");

}

const addToCartHandler=()=>{
    dispatch(add(post));
    toast.success("Items added to Cart");
    
}


    return(
        <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl  shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
         
            <div><p className="text-gray-700 font-medium text-lg truncate w-40 mt-1">{post.title.split(" ").slice(0,3).join(" ")+"..."}</p></div>
            <div><p className="w-40 text-gray-400 font-normal text-[10px] text-left ">{post.description.split(" ").slice(0,10).join(" ")+"..."}</p></div>
            <div className="h-[180px]"><img className="h-full w-full" src={post.image} /></div>
            <div className="flex justify-between gap-12">

            <div><p className="text-green-600 font-semibold items-center w-full mt-5">${post.price}</p></div>
            
            
            {
              cart.some((p)=>p.id === post.id) 
              
              ?
              
               (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in" onClick={removeFromCartHandler}>Remove Item</button>)
              
              
              
              :(<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"  onClick={addToCartHandler}>Add To Cart</button>)
            }
            

            </div>
           

        </div>
    )
}
export default Product;