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
                    <Link href="/12" className="m-12 content-center"> 이전 </Link>
                    <iframe width="1000" height="550" src="https://www.youtube.com/embed/rvQ76JT3MEI?list=WL" title="무비라이프 영화관 과속스캔들 박보영 명대사 오디션 준비 대사" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <Link href="/14" className="ml-10 content-center"> 다음 </Link>
                </div>
                <div className="flex justify-center">
                    <button className="m-10" onClick={hide}> 가리기 </button>
                    <button className="m-10" onClick={unHide}> 가리지 않기 </button>
                    <button className="m-10" onClick={showHint}> 초성 힌트 </button> 
                    <div className={hint}> ㄱㅅ ㅅㅋㄷ </div>
                </div>
                
            </div>
        </>
    );
}
