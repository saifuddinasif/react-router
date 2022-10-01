import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon ,XMarkIcon} from '@heroicons/react/24/solid'

const Navbar = () => {

    const routes =[

        {id:1, name:'home', path:'/home'},
        {id:2, name:'PRODUCTS', path:'/PRODUCTS'},
        {id:3, name:'ORDERS', path:'/ORDERS'},
        {id:4, name:'Contact', path:'/Contact'},
        {id:5, name:'about', path:'/about'},

    ]

    const [open, setOpen] = useState(false);

    return (
        <nav>
        <div>
 {
    open ?   <XMarkIcon onClick={() => setOpen(!open)} className="h-6 w-6 text-blue-500  md:hidden"/>

    : <Bars3Icon onClick={() => setOpen(!open)} className="h-6 w-6 text-blue-500 md:hidden"/>
 }

            
</div>
             
            <nav>
          
                <ul className={`md:flex justify-center absolute duration-500 ease-in ${open ? 'top-4': 'top-[-120px]' }`} >
                    {
                        routes.map(route => <Link key={route.id} route={route} ></Link> )
                    }
                </ul>
            </nav>
            </nav>
        
    );
};

export default Navbar;