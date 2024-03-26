'use client'

import Link from "next/link";
import { useState } from "react";


export default function Home() {
    const [style, setStyle] = useState("left-32 w-10/12 h-4/6 bg-black fixed");
    const [hint, setHint] = useState("hidden");
    const hide = () => {
        setStyle("left-32 w-10/12 h-4/6 bg-black fixed");
    }
    const unHide = () => {
        setStyle("left-32 w-10/12 h-1/6 bg-black fixed");
    }
    const showHint = () => {
        setHint("p-10 block");
    }
    return (
        <>
            <div>
                <div className={style}></div>
                <div className="flex justify-center">
                    <Link href="/14" className="m-12 content-center"> 이전 </Link>
                    <iframe width="1000" height="550" src="https://www.youtube.com/embed/WVMILGfcM8E?list=WL?start=100" title="친구장면" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <Link href="/16" className="ml-10 content-center"> 다음 </Link>
                </div>
                <div className="flex justify-center">
                    <button className="m-10" onClick={hide}> 가리기 </button>
                    <button className="m-10" onClick={unHide}> 가리지 않기 </button>
                    <button className="m-10" onClick={showHint}> 초성 힌트 </button> 
                    <div className={hint}> ㅊㄱ </div>
                </div>
                
            </div>
        </>
    );
}
