import { Alert, Button,Label, Spinner, TextInput } from 'flowbite-react';
import React from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { signInStart,signInSuccess,signInFailure } from '../redux/user/userSlice';



export default function SignIn() {
  const [ fromData, setForData]=useState({});
  const {loading,error:errorMessage}=useSelector(state=>state.user);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleChange=(e)=>{
    setForData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
 
  const handleSubmit=async (e)=>{
    e.preventDefault();
    if (!formData.email || !formData.password) {
        return dispatch(signInFailure('please fill out all fields.'));
    }
    try {
      dispatch(signInStart());
      const res=await fetch('/api/auth/signin',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData),
      });
      const data=await res.json();
      if (data.success=== false) {
        dispatch(signInFailure(data.message));
      }
     
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }


    } catch (error) {
      dispatch(signInFailure(error.message));
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
                    <label value='Your email'/>
                    <TextInput type='text' placeholder='name@gmail.com' id='email'  onChange={handleChange}/>
                  </div>
                  <div>
                    <label value='Your password'/>
                    <TextInput type='text' placeholder='********' id='password' onChange={handleChange} />
                  </div>
                  <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
                      {
                        loading?( 
                          <>
                                <Spinner size='sm'/>
                                <span className='pl-3'>loading...</span>
                          </>
        
                        ):'Sign In'
                      }
                  </Button>

                </form>
                <div className='flex gap-2 text-sm mt-5'>
                  <span>Don't have an account ?</span>
                  <Link to='/signup' className='text-blue-500'>
                    Sign Up
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
