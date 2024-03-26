'use client'

import { useState } from "react";

export default function Home() {
  const [style, setStyle] = useState();
  const hide = () => {
    setStyle("left-35 w-11/12 h-4/6 bg-black fixed");
  }
  const unHide = () => {
    setStyle("");
  }
  const func = () => {

  }
  return (
    <>
      <div className="text-center text-xl">
        <div className="flex justify-center">
          <img src="https://mail.jjal.today/data/file/gallery/thumb-1028612757_EiCnUqNj_19f8311425a2092cf569af3c76c2d74dbea6a072_640x515.jpg"></img>
        </div>
        <div>명장면 보고 영화 제목 맞추기!</div>
        <div>3인 1팀으로 많이 맞추는 팀 승리 </div>

      </div>
    </>
  );
}
