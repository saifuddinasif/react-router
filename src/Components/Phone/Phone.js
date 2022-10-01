import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import axios from 'axios';

const Phone = () => {

    const [phones, setPhones]= useState([]);
    useEffect(() => {

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phonesLoaded = data.data.data;

            const phoneData =phonesLoaded.map(phone => {

                const parts = phone.slug.split('-');

                const price = parseInt(parts[1]);

                const SinglePhone = {
                    name: phone.phone_name,
                    price:price,

                }

                return SinglePhone;


            })
            setPhones(phoneData);

        })

   


    })
    return (
       <BarChart width={350} height={430} data={phones}>
    <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
          <Bar dataKey="name" fill="#ffc658" />
          <Bar dataKey="price" fill="#ffc658" />
       </BarChart>
    );
};

export default Phone;