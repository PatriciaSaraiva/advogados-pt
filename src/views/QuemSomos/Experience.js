import React from "react";
import boatRow from "../../assets/images/boat_row.jpeg";
import "./Experience.css";

const cardsContent = [
  {
    className: "experience_description",
    title: "Experiencia",
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
    title: "Dedicacao",
    description:
      "Lorem ipsum dolor sit amet, ex his etiam torquatos, duo audiam fierent sadipscing et. Nam id sanctus dolores neglegentur. Ei hendrerit intellegat scripserit has ex.",
  },
];

const Experience = () => {
  return (
    <>
      <div className="experience_page">
        <h1 className="experience_title">O que podemos garantir</h1>
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
          src={boatRow}
          alt="Background boat img"
        />
      </div>
    </>
  );
};

export default Experience;
