import { useState, useEffect } from "react";
import Button from "../../visitor/components/Button";
import HeaderSection from "../components/HeaderSection";

const data = `{
    "slogan": "Capturing moments of skill, passion, and teamwork in basketball training.",
    "gallery": [
      {
        "name": "Youth Program",
        "description": "This program focuses on introducing the fundamentals of basketball through fun and interactive activities. Kids will practice engaging drills to build core skills such as dribbling, passing, shooting, and teamwork. Perfect for beginners who are just starting their basketball journey.",
        "category" : "Documentation",
        "content_type" : "image",
        "content" : "../../../../public/images/image-gallery-1.png",
        "is_display" : "1",
        "is_main" : "1"
      },
      {
        "name": "Junior Program",
        "description": "This program is designed for young athletes who have a basic understanding of basketball and want to improve their skills. Players will participate in more advanced drills and games that emphasize teamwork, communication, and strategy.",
        "category" : "Documentation",
        "content_type" : "image",
        "content" : "../../../../public/images/image-gallery-2.png",
        "is_display" : "1",
        "is_main" : "0"
      },
      {
        "name": "Elite Training",
        "description": "This program is for advanced players who are looking to take their skills to the next level. Participants will receive personalized coaching and training to help them excel in their game.",
        "category" : "Documentation",
        "content_type" : "image",
        "content" : "../../../../public/images/image-gallery-3.png",
        "is_display" : "1",
        "is_main" : "0"
      },
      {
        "name": "Coaching Session",
        "description": "This program is for advanced players who are looking to take their skills to the next level. Participants will receive personalized coaching and training to help them excel in their game.",
        "category" : "Documentation",
        "content_type" : "image",
        "content" : "../../../../public/images/image-gallery-4.png",
        "is_display" : "1",
        "is_main" : "0"
      },{
        "name": "Coaching Session",
        "description": "This program is for advanced players who are looking to take their skills to the next level. Participants will receive personalized coaching and training to help them excel in their game.",
        "category" : "Documentation",
        "content_type" : "image",
        "content" : "../../../../public/images/image-gallery-4.png",
        "is_display" : "1",
        "is_main" : "0"
      }
    ]
  }`;

function GallerySection() {
  const [dataGallery, setDataGallery] = useState(null);

  useEffect(() => {
    const jsonParsed = JSON.parse(data);
    setDataGallery(jsonParsed);
  }, []);

  if (!dataGallery) {
    // tampilkan loading dulu saat dataGallery masih null
    return <div>Loading...</div>;
  }

  return (
    <section id="gallery" className="p-7 bg-black">
      {/* Header Gallery */}
      <HeaderSection>Gallery</HeaderSection>
      {/* Sub header */}
      <div className="flex justify-center my-7">
        <div className="text-center mx-w-[600px] text-white font-extrabold text:lg md:text-xl">
          {dataGallery.slogan}
        </div>
      </div>
      {/* main gallery  */}
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl">
          {dataGallery.gallery.map((gallery, index) => {
            if (gallery.is_display === "1" && gallery.is_main === "1") {
              return (
                <div key={index} className="md:col-span-2 flex justify-center">
                  <img
                    className="object-cover rounded-lg w-400 h-100 md:w-[750px] md:h-auto"
                    src={gallery.content}
                    alt={gallery.name}
                  />
                </div>
              );
            } else if (gallery.is_display === "1" && gallery.is_main === "0") {
              return (
                <div key={index} className="flex justify-center">
                  <img
                    className="object-cover rounded-lg"
                    src={gallery.content}
                    alt={gallery.name}
                    width={400}
                    height={100}
                  />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div className="flex justify-center items-center mt-7">
        <div className="rounded-xl bg-[#FDCB04] p-2 text-black font-extrabold">
          More Activities
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
