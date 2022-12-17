
import React from "react"
import heroImg from "../assets/Hero.JPG"



const Hero = () => {
    return (
        <section className="h-screen w-full bg-gradient-to-tl from-gray-300 to-gray-900 flex flex-col items-center font-Roboto pt-48 px-10 text-4xl md:text-5xl">
                
            <span className="w-full  md:w-2/3 font-bold">Luvie Mar Rallos. </span>
            <span className="pl-5 w-full md:w-2/3 font-normal text-xl text-slate-200">Web Developer</span>
            <span className="w-full pt-5 font-normal md:w-2/3 italic">I create things on the internet using modern web technologies.
            </span>

       

        </section>
    )
}

export default Hero

