import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {

     const pricingOptions = [

        {id:1, name: 'free', price:0, features: [
        
            'Awesome Feature',
            'Extra Feature',
            'Unnecessary  Feature',
            'Will never use Feature',
            'Roasted  Feature',


        ]},
        {id:2, name: 'medium', price: 110, features: [
        
            'Awesome Feature',
            'Extra Feature',
            'Unnecessary  Feature',
            'Will never use Feature',
            'Roasted  Feature',


        ]},
        {id:3, name: 'premium', price:220, features: [
        
            'Awesome Feature',
            'Extra Feature',
            'Unnecessary  Feature',
            'Will never use Feature',
            'Roasted  Feature',


        ]},
      

     ] 


    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-400 text-white mt-10'>Best deal </h2>

         <div className='grid md:grid-cols-3 gap-3 mt-4'>
         {
                pricingOptions.map(option => <PriceOption
                
                key={option.id}
                option={option}

                >



                </PriceOption> )
            }
         </div>
        </div>
    );
};

export default Pricing;