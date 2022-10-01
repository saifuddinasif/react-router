import React from 'react';
import { CheckCircleIcon} from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    return (
        <div>
        <CheckCircleIcon className='h-6 w-6 text-green-500'></CheckCircleIcon>
        <p>{feature}</p>
    </div>
    );
};

export default Feature;