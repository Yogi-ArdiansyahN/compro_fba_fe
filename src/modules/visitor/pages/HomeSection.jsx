import { useState, useEffect } from "react";
import Button from "../../visitor/components/Button";

import Image_human_home from "../../../../public/images/image-human-home.png";

// Dummy JSON data for home section (string)
const data = `{
  "slogan": "Unleash Your Potential with Fundamental Basketball Academy!",
  "sub_slogan": "Join our world-class basketball training programs to develop skills, teamwork, and passion"
}`;

function HomeSection() {
  const [dataHome, setDataHome] = useState(null);
  useEffect(() => {
    const jsonParsed = JSON.parse(data);
    setDataHome(jsonParsed);
  }, []);

  if (!dataHome) {
    // tampilkan loading dulu saat dataHome masih null
    return <div>Loading...</div>;
  }

  return (
    <section id="home" className="w-full h-[630px] bg-home">
      <div className="grid grid-cols-2 h-full px-10">
        <div className="flex justify-center items-center">
          <div className="card bg-[rgba(0,0,0,0.7)]/75 backdrop-blur rounded-xl p-5 border-2 border-white">
            <div className="text-2xl md:text-4xl md:font-extrabold text-left text-[#FDCB04] md:w-150">
              {dataHome.slogan}
            </div>
            <div className="md:text-2xl text-left font-bold mt-3">
              {dataHome.sub_slogan}
            </div>
            <Button
              name="Join"
              name_button="Join Now"
              className="bg-[#FDCB04] mt-3 text-black rounded-[10px] font-bold md:text-xl py-[5px] px-[15px] cursor-pointer"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="w-[253px] h-[452px]"
            src={Image_human_home}
            alt="image_human_home"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
