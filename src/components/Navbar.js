import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
return (

    <div className='sticky top-0 z-50'>
        <nav class=" border-gray-200 bg-red-500">
            <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-10 py-3">
        <Link to='/' class="flex items-center">
        <h1 className='text-3xl text-white'>Artical.com</h1>
        </Link>
        <div class="flex items-center">
            <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Login</a>
        </div>
    </div>
    </nav>

    <nav class="bg-gray-50 dark:bg-gray-700 shadow-md">
    <div class="max-w-screen-xl px-4 py-1 mx-auto md:px-6">
        <div class="flex items-center justify-center">
            <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <li>
                    <Link to='/' class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home page</Link>
                </li>
                <li>
                    <Link to='/sports' class="text-gray-900 dark:text-white hover:underline" aria-current="page">Sports page</Link>
                </li>
                <li>
                    <Link to='/fasion' class="text-gray-900 dark:text-white hover:underline" aria-current="page">Fasion page</Link>
                </li>
                <li>
                    <Link to='/bussiness' class="text-gray-900 dark:text-white hover:underline" aria-current="page">Bussines page</Link>
                </li>
            </ul>
        </div>
    </div>
    </nav>

    </div>

  )
}

export default Navbar