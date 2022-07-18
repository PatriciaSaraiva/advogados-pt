import React from "react";
import signatureImg from "../../assets/images/signing_img.jpeg";
import "./Pagamento.css";
import Button from "../../components/Inputs/Button";

const cardsPayment = [
  {
    className: "payment_container",
    title: "PAGAMENTO",
    description:
      "O serviço pressupõe o pagamento prévio de 73,80 €, montante correspondente a 60,00 € mais IVA à taxa legal e é efectuado via MBWay. Após termos recebido o pagamento responderemos à sua questão em 2 dias úteis. O recibo será enviado para a sua morada ou sede da sua organização.",
  },
  {
    className: "documents_container",
    title: "DOCUMENTOS",
    description:
      "Vamos necessitar de digitalização legível do seu cartão de cidadão (ou bilhete de identidade e cartão de contribuinte). Se for cidadão estrangeiro, vamos necessitar de digitalização do seu passaporte (ou autorização de residência) e do cartão de contribuinte. Por favor confirme que tem todos estes documentos antes de prosseguir.",
  },
  {
    className: "message_container",
    description:
      "A resposta à sua questão deve ser apenas ponto de partida para um aconselhamento  pessoal, mais aprofundado, do caso com um Advogado no nosso escritório, com análise de toda a informação e documentação relevante que tenha ou venha a obter.",
  },
];

const Pagamento = () => {
  return (
    <>
      <div className="payment_page">
        <div className="payment_card">
          <div className="card_container">
            {cardsPayment.map((card) => (
              <div className={card.className}>
                {card.title && <h2 className="title">{card.title}</h2>}
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
        <Button className="button_form">Preencha o Formulário</Button>
        <img
          className="signature_img"
          src={signatureImg}
          alt="Someone signing papers"
        />
      </div>
    </>
  );
};

export default Pagamento;
