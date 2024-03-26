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
                    <Link href="/1" className="m-12 content-center"> 이전 </Link>
                    <iframe width="1000" height="550" src="https://www.youtube.com/embed/AQKBuCrU8To" title="어바웃타임 명장면 연애세포 꿈틀거리는 장면 OST -  &#39;How Long Will I Love You&#39;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <Link href="/2" className="ml-10 content-center"> 다음 </Link>
                </div>
                <div className="flex justify-center">
                    <button className="m-10" onClick={hide}> 가리기 </button>
                    <button className="m-10" onClick={unHide}> 가리지 않기 </button>
                    <button className="m-10" onClick={showHint}> 초성 힌트 </button> 
                    <div className={hint}> ㅇㅂㅇ ㅌㅇ</div>
                </div>
                
            </div>
        </>
    );
}
