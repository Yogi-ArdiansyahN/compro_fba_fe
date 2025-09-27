import { useState, useEffect } from "react";
import Button from "../../visitor/components/Button";
import HeaderSection from "../components/HeaderSection";

const data = `{
  "slogan": "Stay updated with our latest basketball events, achievements, and community highlights.",
  "datas": [
    {
      "name": "Training Camp at SMAKZIE",
      "type": "news",
      "image": "../../../../public/images/image-gallery-1.png",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum.",
      "date": "17-03-2025"
    },
    {
      "name": "Training Camp at SMAKZIE",
      "type": "events",
      "image": "../../../../public/images/image-gallery-1.png",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum.",
      "date": "17-03-2025"
    }
  ]
}
`;

function NewsEventsSection() {
  const [dataNewsEvents, setDataNewsEvents] = useState(null);

  useEffect(() => {
    const jsonParsed = JSON.parse(data);
    setDataNewsEvents(jsonParsed);
  }, []);

  if (!dataNewsEvents) {
    return <div>Loading...</div>;
  }

  return (
    <section id="newsEvent" className="my-7 py-7 px-1 md:px-0 bg-white">
      {/* Header news / event */}
      <HeaderSection>News / Events</HeaderSection>
      {/* Sub header */}
      <div className="flex justify-center my-4 md:my-7">
        <div className="md:text-center text-black font-extrabold text-lg md:text-xl mx-w-[600px]">
          {dataNewsEvents.slogan}
        </div>
      </div>
      {/* main news event */}
      <div className="px-3">
        {dataNewsEvents.datas.map((item, index) => (
          <div
            key={index}
            className="md:grid grid-cols-2 gap-3 text-black mb-5 md:mx-5"
          >
            <div className="flex justify-center items-center mb-3 md:mb-0">
              <img
                className="rounded-xl"
                src={item.image}
                width={500}
                height={100}
                alt="news Image"
              />
            </div>
            <div>
              {/* Title  */}
              <div className="font-bold text-xl md:text-2xl md:mb-7">
                {item.name}
                <br />
                <span className="text-lg md:text-xl">{item.date}</span>
              </div>

              <div className="max-h-[200px] md:max-h-[300px] overflow-y-auto">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-7">
        <div className="rounded-xl bg-[#FDCB04] p-2 text-black font-extrabold">
          More News / Events
        </div>
      </div>
    </section>
  );
}

export default NewsEventsSection;
