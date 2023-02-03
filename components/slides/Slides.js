import Image from "next/image"
import cancun from "../../assets/myprojects/cancun.png"
import chicago from "../../assets/myprojects/chicago.png"

export function Slides () {
  return (
    <div className="mt-10">
      <div className="flex gap-10">
      <div className="hover:scale-105">
      <Image src={cancun} className=""/>
      </div>
      <div className="hover:scale-105">
      <Image src={chicago} className=""/>
      </div>
      <div className="hover:scale-105">
      <Image src={cancun} className=""/>
      </div>
      {/* <div className="hover:scale-105">
      <Image src={chicago} className=""/>
      </div>
      <div className="hover:scale-105">
      <Image src={cancun} className=""/>
      </div>
      <div className="hover:scale-105">
      <Image src={chicago} className=""/>
      </div> */}
      </div>
    </div>
  )
}

