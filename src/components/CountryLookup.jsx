"use client"

import React, { useEffect,useState } from 'react'

export default function CoutryLookup() {
  const [country, setCountry] = useState('United States')

  useEffect(() => {
    const getCoountry = async () => {
      const response = await fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`)
      .then((res) => res.json())
      .then((data) => data.country);
      if(!response) return;
      setCountry(response);
    };
    getCoountry();
  }, []);



  


  return (
    <div>{country}</div>
  )
}
