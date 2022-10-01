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
        {id:2, name: 'medium', price:0, features: [
        
            'Awesome Feature',
            'Extra Feature',
            'Unnecessary  Feature',
            'Will never use Feature',
            'Roasted  Feature',


        ]},
        {id:3, name: 'premium', price:0, features: [
        
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

            {
                pricingOptions.map(option => <PriceOption
                
                key={option.id}
                option={option}

                >



                </PriceOption> )
            }
        </div>
    );
};

export default Pricing;