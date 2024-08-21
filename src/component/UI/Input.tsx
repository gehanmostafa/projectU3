
import { InputHTMLAttributes } from 'react';

interface IProps extends InputHTMLAttributes<HTMLInputElement>{
    type:string
}


const Input=({ type,...rest}:IProps)=> {
  return (
  
      <input type={type} {...rest} />
   
  )
}

export default Input
