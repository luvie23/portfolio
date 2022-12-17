
import React from "react"
import heroImg from "../assets/Hero.JPG"



const Hero = () => {
    return (
        <section className="h-screen bg-gradient-to-tl from-gray-300 to-gray-900 flex flex-auto">
            <div className="w-1/2 flex justify-center items-center font-extrabold">
                Front-End Developer

            </div>

            <div className="w-1/2 flex justify-center items-center">
                
                    <img src={heroImg} className=" w-2/3 rounded-lg"/>

                
            </div>   
        </section>
    )
}

export default Hero

