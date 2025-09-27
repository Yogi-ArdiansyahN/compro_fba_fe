import { useState, useEffect } from "react";
import  HeaderSection  from "../components/HeaderSection";

const data = `{
  "slogan": "Empowering future athletes through certified coaching, discipline, and passion for basketball.",
  "description": "Fundamental Basketball Academy is a dedicated basketball school led by certified and highly qualified coaches. With a strong foundation in professional training and officially recognized coaching licenses, we are committed to nurturing young talents and shaping them into skilled, disciplined, and confident athletes. Our academy not only focuses on developing technical basketball skills, but also emphasizes character building, teamwork, and sportsmanship, ensuring that every student grows both on and off the court.",
  "images": [
    "../../../../public/images/image-about-1.png",
    "../../../../public/images/image-about-2.png",
    "../../../../public/images/image-about-3.png",
    "../../../../public/images/image-about-1.png",
    "../../../../public/images/image-about-2.png",
    "../../../../public/images/image-about-3.png"
  ]
}`;
function AboutSection() {
  const [dataAbout, setDataAbout] = useState(null);
  useEffect(() => {
    const jsonParsed = JSON.parse(data);
    setDataAbout(jsonParsed);
  }, []);

  if (!dataAbout) {
    // tampilkan loading dulu saat dataAbout masih null
    return <div>Loading...</div>;
  }
  return (
    <section id="aboutUs" className="w-full p-5 md:p-10 bg-white">
      {/* Header about us */}
      <HeaderSection>About Us</HeaderSection>
      {/* main about us  */}
      <div className="md:grid grid-cols-2 mt-8">
        <div className="flex flex-col">
          <div className="text-left mb-5 text-black font-extrabold text-xl pl-2 md:pl-0 max-w-[600px] text-black">
            {dataAbout.slogan}
          </div>
          <div className="text-black pl-2 md:pl-0 font-medium text-lg  flex justify-center items-center text-black">
            {dataAbout.description}
          </div>
        </div>
        <div className="flex gap-5 mt-3 md:mt-0 md:ml-6 overflow-x-scroll">
          {dataAbout.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`About Image ${index + 1}`}
              className="w-1/2 md:w-[200px] rounded-xl"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
