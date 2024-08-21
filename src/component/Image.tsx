import React from 'react'
interface IProp {
    ImgURL: string;
    alt: string;
    className: string;
 }
function Image({ImgURL , alt , className}:IProp) {
  return (
    <>
      <img src={ImgURL} alt={alt} className={className} />
    </>
  )
}

export default Image
