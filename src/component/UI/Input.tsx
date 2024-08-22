
import { InputHTMLAttributes } from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement>{
    type:string
}


const Input=({ type,...rest}:IProps)=> {
  return (
  
      <input className="border-[1px] border-gray-300 shadow-md focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded-lg px-3 py-3 text-md"   type={type} {...rest} />
   
  )
}

export default Input
