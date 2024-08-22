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
          <button className={` rounded-lg text-white px-5 py-2 duration-200 font-medium transition-all delay-75  active:scale-[0.9]  ${className}  ${width} `}{...rest} >
              {children}
          </button>
      
    </div>
  )
}

export default Button
