import React from 'react';
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {


    const {features} = option;

    
    return (
        <div  className='bg-indigo-300 m-3 rounded-md p-3'>

   <div>
             
   <h3 className='text-6xl font-bold text-blue'>$ {option.price}
            <span  className='text-2xl' >/mon</span>
            
            </h3>
            <h3>{option.name}</h3>
   </div>
   {/* if u dont have a unique key u can use below method */}
   {
    features.map((feature,idx)=> <Feature key={idx} feature={feature}></Feature>)
   }
        <button className='bg-green-500   w-full rounded-md py-4 text-white' >Buy Now</button>
        </div>
    );
};

export default PriceOption;