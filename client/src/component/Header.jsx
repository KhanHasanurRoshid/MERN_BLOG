import React from 'react'
import { Navbar,TextInput } from "flowbite-react";
import {Link} from "react-router-dom";
import {AiOutLineSearch} from "react-icons/ai";
export default function Header() {
  return (
  
    
    <Navbar className='border-b-2 whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white '>
      <Link to="/" className='self-center  '>
        <span className='px-2 py-1 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 rounded-lg text-black'>Cp</span>Pedia
      </Link>
      <form >
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutLineSearch}
        
        />
      </form>

    </Navbar>
  
  
  )
}


