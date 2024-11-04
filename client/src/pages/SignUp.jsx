import { Button, TextInput } from 'flowbite-react';
import React from 'react'
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='min-h-screen mt-30 '>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left side */}
        
        <div className="flex-1">
        <Link to="/"
         className=" font-bold text-black text-7xl">
             <span className="  px-2 py-1  rounded-lg text-black font-sans"  >
              Cp
             </span>
              Pedia
          </Link>
            <p className='text-sm mt-3'>SWE project of Team-7, 56 (B) Batch <br />
            Team Member: Hasanur, Siam, Sayem, Hasib.
            </p>

        </div>
         {/*right side*/}
         <div className='flex-1 mt-30'>  
                <form className='flex flex-col gap-4'>
                  <div>
                    <label value='Your username'/>
                    <TextInput type='text' placeholder='Username' id='username' />
                  </div>
                  <div>
                    <label value='Your email'/>
                    <TextInput type='text' placeholder='name@gmail.com' id='email' />
                  </div>
                  <div>
                    <label value='Your password'/>
                    <TextInput type='text' placeholder='Password' id='password' />
                  </div>
                  <Button gradientDuoTone='purpleToPink' type='submit'>
                    Sign Up
                  </Button>

                </form>
                <div className='flex gap-2 text-sm mt-5'>
                  <span>Have an account ?</span>
                  <Link to='/signin' className='text-blue-500'>
                    Sign In
                  </Link>
                </div>
          </div>
      </div>
    </div>
  )
}
