import React from "react";
import salaReunioes from "../../assets/images/sala_reunioes.jpg";
import "./QuemSomos.css";
import IdCard from "../../components/DataDisplay/IdCard";
import cristinaPhoto from "../../assets/images/cristina_foto.jpg";
import dulcePhoto from "../../assets/images/dulce_foto.jpg";

const ids = [
  {
    name: "cristina",
    img: <img className="avatar" src={cristinaPhoto} alt="cristina photo" />,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinarsapien et ligula ullamcorper malesuada proin. Nec feugiat infermentum posuere urna nec tincidunt. Venenatis cras sed felis egetvelit aliquet sagittis id. Et leo duis ut diam quam nulla.",
  },
  {
    name: "dulce",
    img: <img className="avatar" src={dulcePhoto} alt="dulce photo" />,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinarsapien et ligula ullamcorper malesuada proin. Nec feugiat infermentum posuere urna nec tincidunt. Venenatis cras sed felis egetvelit aliquet sagittis id. Et leo duis ut diam quam nulla.",
  },
];

const QuemSomos = () => {
  return (
    <div className="quem_somos" id="quem-somos">
      <div className="quem_somos_container">
        <div className="quem_somos_card">
          <div className="quem_somos_title">
            <h2>Quem Somos</h2>
          </div>
          <div>
            <p className="quem_somos_description">
              O nosso escritório é o resultado de uma parceria entre vários
              profissionais do foro jurídico que, têm desenvolvido a sua
              atividade numa perspetiva de interação multidisciplinar. Com
              escritório no coração da cidade de Torres Vedras, contamos com
              Advogados, Solicitadores, Juristas e consultores externos, cuja
              experiência profissional, proporcionam uma maior organização,
              rigor e competência, conseguindo assim prestar apoio aos seus
              clientes de forma personalizada, eficaz e rigorosa. Reunimos no
              mesmo espaço físico os mais diversos serviços legais necessários
              quer ao cidadão quer a empresas, desde a consulta jurídica, aos
              actos próprios de advogados e solicitadores.
            </p>
          </div>
        </div>
      </div>
      <div className="quem_somos_cv">
        {ids.map((id) => (
          <IdCard key={id.name} description={id.description} img={id.img} />
        ))}
      </div>
    </div>
  );
};

export default QuemSomos;
