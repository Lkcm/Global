import React from "react"
import Image from "next/image"
import cancun from "../../assets/myprojects/cancun.png"
import chicago from "../../assets/myprojects/chicago.png"
import book from "../../assets/myprojects/bookCollection.png"

export function Slides () {




  return (
    <div className="mt-10">
      <div className="
      flex 
      gap-10
      xsm:flex-col
      md:flex-col
      lg:flex-row
      items-center
       ">



      <div className="hover:scale-105 cursor-pointer">






      <a href="https://escotur-project.vercel.app/" >
      <Image src={chicago} />
      </a>
      </div>





    <div className="hover:scale-105 cursor-pointer">
        <a href="https://n-bkcollection.web.app/">
        <Image src={book} />
        </a>
      </div>



      <div className="hover:scale-105 cursor-pointer">
        <a href="https://escotur-project.vercel.app/">
          <Image src={cancun} />
        </a>
      </div> 



      </div>
    </div>
  )
}

