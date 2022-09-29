import React from "react";
import tingeryInjury from "../../assets/images/tingey_injury.jpeg";
import "./Experience.css";

const cardsContent = [
  {
    className: "experience_description",
    title: "Experiência",
    description:
      "Lorem ipsum dolor sit amet, ex his etiam torquatos, duo audiam fierent sadipscing et. Nam id sanctus dolores neglegentur. Ei hendrerit intellegat scripserit has ex.",
  },
  {
    className: "profissionalismo_description",
    title: "Profissionalismo",
    description:
      "Lorem ipsum dolor sit amet, ex his etiam torquatos, duo audiam fierent sadipscing et. Nam id sanctus dolores neglegentur. Ei hendrerit intellegat scripserit has ex.",
  },
  {
    className: "dedicacao_description",
    title: "Dedicação",
    description:
      "Lorem ipsum dolor sit amet, ex his etiam torquatos, duo audiam fierent sadipscing et. Nam id sanctus dolores neglegentur. Ei hendrerit intellegat scripserit has ex.",
  },
];

const Experience = () => {
  return (
    <>
      <div className="experience_page">
        <h1 className="experience_title">O que garantimos</h1>
        <div className="experience_container">
          {cardsContent.map((card) => (
            <div className={card.className}>
              <h2 className="title">{card.title}</h2>
              <p>{card.description}</p>
            </div>
          ))}
        </div>

        <img
          className="backgroundExperience"
          src={tingeryInjury}
          alt="Background tingery img"
        />
      </div>
    </>
  );
};

export default Experience;
