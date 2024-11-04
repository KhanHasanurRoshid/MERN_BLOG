import { Alert, Button,Label, Spinner, TextInput } from 'flowbite-react';
import React from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import { useState } from 'react';

export default function SignUp() {
  const [ fromData, setForData]=useState({});
  const [ errorMessage, setErrorMessege]=useState(null);
  const [loading, setLoading]=useState(false);
  const navigate=useNavigate();

  const handleChange=(e)=>{
    setForData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
 
  const handleSubmit=async (e)=>{
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
        return setErrorMessege('please fill out all fields.');
    }
    try {
      setLoading(true);
      setErrorMessege(null);
      const res=await fetch('/api/auth/signup',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData),
      });
      const data=await res.json();
      if (data.success=== false) {
        return setErrorMessege(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate('/signin');
      }


    } catch (error) {
      setErrorMessege(error.message);
      setLoading(false);
    }

  }


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
         <div className='flex-1 '>  
                <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                  <div>
                    <label value='Your username'/>
                    <TextInput type='text' placeholder='Username' id='username' onChange={handleChange}/>
                  </div>
                  <div>
                    <label value='Your email'/>
                    <TextInput type='text' placeholder='name@gmail.com' id='email'  onChange={handleChange}/>
                  </div>
                  <div>
                    <label value='Your password'/>
                    <TextInput type='text' placeholder='Password' id='password' onChange={handleChange} />
                  </div>
                  <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
                      {
                        loading?( 
                          <>
                                <Spinner size='sm'/>
                                <span className='pl-3'>loading...</span>
                          </>
        
                        ):'Sign Up'
                      }
                  </Button>

                </form>
                <div className='flex gap-2 text-sm mt-5'>
                  <span>Have an account ?</span>
                  <Link to='/signin' className='text-blue-500'>
                    Sign In
                  </Link>
                </div>
                {
                  errorMessage && (
                    <Alert className='mt-5 ' color='failure'>
                      {errorMessage}
                    </Alert>
                  )
                }
          </div>
      </div>
    </div>
  )
}
