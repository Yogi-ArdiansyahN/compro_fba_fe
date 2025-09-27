import { useState, useEffect } from "react";
import Button from "../../visitor/components/Button";
import HeaderSection from "../components/HeaderSection";

const data = `{
    "slogan": "Building basketball skills through fun, expert-led training and a passion for the game.",
    "programs": [
      {
        "name": "Youth Program",
        "description": "This program focuses on introducing the fundamentals of basketball through fun and interactive activities. Kids will practice engaging drills to build core skills such as dribbling, passing, shooting, and teamwork. Perfect for beginners who are just starting their basketball journey.",
        "ages" : "age 6 - 12"
      },
      {
        "name": "Junior Program",
        "description": "This program is designed for young athletes who have a basic understanding of basketball and want to improve their skills. Players will participate in more advanced drills and games that emphasize teamwork, communication, and strategy.",
        "ages" : "age 13 - 18"
      },
      {
        "name": "Elite Training",
        "description": "This program is for advanced players who are looking to take their skills to the next level. Participants will receive personalized coaching and training to help them excel in their game.",
        "ages" : "age 13 - 18"
      }
    ]
  }`;

function ProgramSection() {
  const [dataProgram, setDataProgram] = useState(null);

  useEffect(() => {
    const jsonParsed = JSON.parse(data);
    setDataProgram(jsonParsed);
  }, []);

  if (!dataProgram) {
    // tampilkan loading dulu saat dataProgram masih null
    return <div>Loading...</div>;
  }

  return (
    <section id="ourPrograms" className="mt-7 w-full">
      <div className="bg-programs md:px-5 py-7">
        {/* Header our Program */}
        <HeaderSection>Program</HeaderSection>
        {/* Sub header */}
        <div className="flex justify-center my-7">
          <div className="text-center text-white font-extrabold text:lg md:text-xl max-w-[600px] text-white">
            {dataProgram.slogan}
          </div>
        </div>
        {/* main our program */}
        <div className="flex flex-col md:flex-row justify-center item-center gap-3 mx-5">
          {dataProgram.programs.map((program, index) => (
            <div
              key={index}
              className="border-2 border-white mx-auto md:mx-0 rounded-xl p-4 md:max-w-100 
             bg-white/10 backdrop-blur-md shadow-lg"
            >
              <div className="text-xl font-extrabold">{program.name}</div>
              <div className="font-medium text-md my-3">
                “{program.description}”
                <br />
                <span className="text-sm">( {program.ages} )</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramSection;
