import React from 'react';
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {


    const {features} = option;

    
    return (
        <div  className='bg-indigo-300 m-3 rounded-md p-3'>

   <div>
             
   <h3 className='text-6xl font-bold text-blue'>{option.price}
            <span  className='text-2xl' >/mon</span>
            
            </h3>
            <h3>{option.name}</h3>
   </div>
   {
    features.map(feature => <Feature feature={feature}></Feature>)
   }
         
        </div>
    );
};

export default PriceOption;