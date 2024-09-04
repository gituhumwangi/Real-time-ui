import React from 'react';

export const Navbar = () => {
  return (
    <>
      <div className='h-20 max-w-full mx-auto px-4 py-1 bg-white items-center'>
        <div className='float-left py-4 px-15'>
          <a href='' className='text-green-600 text-4xl px-1 py-2 font-bold '>
            Real-Monitoring
          </a>
        </div>

        <div className='text-black space-x-16 py-4 font-medium flex-row justify-center items-center place-content-center flex text-lg'>
          <a className="hover:text-orange-500" href=''>Home</a>
          <a className="hover:text-orange-500" href=''>About</a>
          
          {/* Involvements Dropdown */}
          <div className='relative group'>
            <a className="hover:text-orange-500 cursor-pointer" href='#'>
              Involvements
            </a>
            <ul className='absolute left-0 hidden group-hover:block bg-white text-black shadow-lg rounded'>
              <li className='block hover:bg-orange-500 px-5 py-2.5'>
                <a href='' className='no-underline hover:text-white'>
                  Donate
                </a>
              </li>
              <li className='block px-5 py-2.5 hover:bg-orange-500'>
                <a href='' className='no-underline hover:text-white'>
                  Volunteer
                </a>
              </li>
            </ul>
          </div>

          {/* Events Dropdown */}
          <div className='relative group'>
            <a href='#' className='cursor-pointer hover:text-orange-500'>
              Events
            </a>
            <ul className='absolute left-0 hidden group-hover:block bg-white text-black shadow-lg rounded'>
              <li className='block px-5 py-2.5 hover:bg-orange-500'>
                <a href='' className='no-underline hover:text-white'>
                  Events
                </a>
              </li>
              <li className='block px-5 py-2.5 hover:bg-orange-500'>
                <a href='' className='no-underline hover:text-white'>
                  Past Events
                </a>
              </li>
            </ul>
          </div>

          <a href='' className='hover:text-orange-400'>Contact</a>

          <div className='ml-auto pr-4'>
            <button className='bg-yellow-400 p-1.5 rounded-xl h-12 w-20 hover:bg-blue-400'>Donate</button>
          </div>
        </div>
      </div>
    </>
  );
};
