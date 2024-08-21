import  { ButtonHTMLAttributes, ReactNode } from 'react'
interface IBut extends ButtonHTMLAttributes<HTMLButtonElement>{
    className: string;
    children: ReactNode;
    width?: "w-full" | "w-fit";
     

}
// rest , children  , defaultwidth
function Button({className, children,width="w-fit" , ...rest} :IBut  ) {
  return (
      <div>
          <button className={` ${className}  ${width} `}{...rest} >
              {children}
          </button>
      
    </div>
  )
}

export default Button
