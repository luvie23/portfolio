
import React from "react"
import { DiJavascript1, DiReact, DiHtml5, DiCss3 } from "react-icons/di"
import {ReactComponent as Tailwind} from "../assets/tailwind.svg"
import {ReactComponent as Express} from "../assets/express.svg"
import {ReactComponent as Nodejs} from "../assets/nodejs.svg"
import {ReactComponent as Python} from "../assets/python.svg"
import {ReactComponent as Git} from "../assets/git.svg"

// Express, Python, Node and Git Icons by icons8.com

const Hero = () => {
    return (
        <section className="h-screen w-full bg-gradient-to-tl from-orange-300 to-red-400 flex flex-col items-center font-Roboto pt-48 px-10 text-4xl md:text-5xl">
                
            <span className="w-full  md:w-2/3 font-bold text-violet-500">Luvie Mar Rallos. </span>
            <span className="pl-5 w-full md:w-2/3 font-normal text-xl text-slate-200">Web Developer</span>
            <span className="w-full pt-5 font-normal md:w-2/3 italic">I create things on the internet using modern web technologies.
            </span>
            <div className="flex pt-10">
                <DiJavascript1 color="black"/>
                <DiReact className="fill-[#00D1F7]"/>
                <DiHtml5 className="fill-[#DD4B25]"/>
                <DiCss3 className="fill-[#254BDD]"/>
                <Tailwind className="w-12 mr-1" />
            
            </div>
            <div className="flex gap-2">
                
                <Python className="w-10 h-10" />
                <Express className="w-10 h-10" />
                <Nodejs className="w-10 h-10" />
                <Git className="w-10 h-10" />
                
            </div>
            


            
        </section>
    )
}

export default Hero

