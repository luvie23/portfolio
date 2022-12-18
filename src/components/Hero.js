
import React, { useState } from "react"
import { DiJavascript1, DiReact, DiHtml5, DiCss3 } from "react-icons/di"
import { BsArrowReturnRight, BsArrowDown } from "react-icons/bs"
import {ReactComponent as Tailwind} from "../assets/tailwind.svg"
import {ReactComponent as Express} from "../assets/express.svg"
import {ReactComponent as Nodejs} from "../assets/nodejs.svg"
import {ReactComponent as Python} from "../assets/python.svg"
import {ReactComponent as Git} from "../assets/git.svg"

// Express, Python, Node and Git Icons by icons8.com 768px

const Hero = () => {
    const [screenSize, setScreenSize] = useState(window.innerWidth)

    

    const handleResize = () => {
        setScreenSize(window.innerWidth)
       
    }
    window.onresize = handleResize
    
    return (
        <section className="h-screen w-full bg-gradient-to-tl from-slate-600 to-slate-900 flex flex-col items-center font-Roboto pt-36 px-10 text-4xl md:text-5xl">
                
            <span className="w-full  md:w-2/3 font-bold  bg-gradient-to-r from-[#1EBCE9] via-[#D069CA] to-[#D069CA] inline-block text-transparent bg-clip-text">Luvie Mar Rallos. </span>
            <span className="pl-5 w-full md:w-2/3 font-bold text-xl text-slate-400">Web Developer</span>
            <span className="w-full pt-5 font-normal md:w-2/3 italic text-blue-100 text-3xl">I create things on the internet using modern web technologies.
            </span>
            <div className="flex flex-col items-center justify-between gap-10 mt-10 w-full md:w-2/3 md:flex-row">
                
                <div className=" flex  justify-start">
                    {(screenSize > 768) ? <BsArrowReturnRight className=" ml-32 fill-blue-100" size={70}/> : <BsArrowDown size={70} className=" fill-blue-100"/>
                    

                    }
                    
                </div>
                <div className="flex flex-col items-center px-2 py-4  rounded-md bg-gradient-to-br from-indigo-200 via-red-200 to-yellow-100">
                    <div className="flex ">
                        <DiJavascript1 color="black"/>
                        <DiReact className="fill-[#00D1F7]"/>
                        <DiHtml5 className="fill-[#DD4B25]"/>
                        <DiCss3 className="fill-[#254BDD]"/>
                        <Tailwind className="w-12 ml-1"/>
                    </div>

                    <div className="flex gap-2">
                        
                        <Python className="w-10 h-10" />
                        <Express className="w-10 h-10" />
                        <Nodejs className="w-10 h-10" />
                        <Git className="w-10 h-10" />
                        
                    </div>
                </div>
                
            </div>

            


            
        </section>
    )
}

export default Hero

