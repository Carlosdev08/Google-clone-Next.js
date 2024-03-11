import React from 'react'
import CountryLookup from 'googleclon/components/CountryLookup'

export default function Footer() {
  return (
    <footer className='absolute button-0 text-sm text-gray-400 bg-[#f2f2f2] w-full'>
        <div className="border-b px-8 py-3">
        <CountryLookup />
        </div>
        <div className=" flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0">
            <ul className='flex items-center text-sm space-x-6'>
                <li className='hover:underline cursor-pointer'>About</li>
                <li className='hover:underline cursor-pointer'>Advertising</li>
                <li className='hover:underline cursor-pointer'>Business</li>
                <li className='hover:underline cursor-pointer'>How Search works</li>
            </ul>
            <ul className='flex items-center text-sm space-x-6'>
                <li className='hover:underline cursor-pointer'>Privacy</li>
                <li className='hover:underline cursor-pointer'>Teams</li>
                <li className='hover:underline cursor-pointer'>Settings</li>
                <li className='hover:underline cursor-pointer'>How Search works</li>
            </ul>
        </div>

    </footer>
  )
}
