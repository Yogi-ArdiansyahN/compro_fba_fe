import { useState, useEffect } from "react";
import Button from "../../visitor/components/Button";
import HeaderSection from "../components/HeaderSection";

const data = `{
    "slogan": "Our Coaches: Certified, Experienced, and Passionate about Developing Young Athletes",
    "coaches": [
      {
        "name": "Coach 1",
        "role": "Head Coach",
        "image": "../../../../public/images/coach.png"
      },
      {
        "name": "Coach 2",
        "role": "Assistant Coach",
        "image": "../../../../public/images/coach.png"
      },
      {
        "name": "Coach 3",
        "role": "Assistant Coach",
        "image": "../../../../public/images/coach.png"
      },
      {
        "name": "Coach 4",
        "role": "Assistant Coach",
        "image": "../../../../public/images/coach.png"
      },
      {
        "name": "Coach 5",
        "role": "Assistant Coach",
        "image": "../../../../public/images/coach.png"
      }
    ]
  }`;

function CoachingSection() {
  const [dataCoaching, setDataCoaching] = useState(null);

  useEffect(() => {
    const jsonParsed = JSON.parse(data);
    setDataCoaching(jsonParsed);
  }, []);

  if (!dataCoaching) {
    // tampilkan loading dulu saat dataCoaching masih null
    return <div>Loading...</div>;
  }

  return (
    <section id="coachingStaff" className="py-7 bg-white">
      {/* Header coaching staff */}
      <HeaderSection>Coaching Staff</HeaderSection>
      {/* Sub header */}
      <div className="flex justify-center my-7">
        <div className="mb-5 text-center text-black font-extrabold text-xl pl-2 md:pl-0 max-w-[600px] text-black">
          {dataCoaching.slogan}
        </div>
      </div>
      {/* main coaching staff */}
      <div className="w-full pl-2">
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 overflow-x-auto w-full">
          {dataCoaching.coaches.map((coach, index) => (
            <div
              key={index}
              className=" flex flex-col justify-center items-center"
            >
              <img
                className="mx-auto"
                src={coach.image}
                width={150}
                alt="CoachingStaff"
              />
              <div className="text-black font-bold text-lg text-center">
                {coach.name}
              </div>
              <div className="text-black font-bold text-l text-center">
                {coach.role}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-7">
          <Button
            name="Meet"
            name_button="Meet Our Coaches"
            className="bg-[#FDCB04] text-l text-black rounded-[10px] font-bold py-[5px] px-[15px] cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
}

export default CoachingSection;
