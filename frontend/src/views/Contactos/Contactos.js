import React, { useState } from "react";
import axios from "axios";
import "./Contactos.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { SiOpenstreetmap } from "react-icons/si";

const contactsContent = [
  {
    className: "address_container",
    icon: <SiOpenstreetmap />,
    description:
      "R. Santos Bernardes, Edif. Atlantic, n.15, Loja 2, 2560-362 Torres Vedras",
  },
  {
    className: "phone_container",
    icon: <FiPhoneCall />,
    description: "(+351)261 064 229",
  },
  {
    className: "mail_container",
    icon: <AiOutlineMail />,
    description: "geral@ccg-advogados.pt",
  },
];

const initialFormData = {
  subject: "",
  field: "",
  fullname: "",
  email: "",
  phone: "",
  message: "",
};
const Contactos = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) =>
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  console.log("formData", formData);

  const handleSubmit = () => {
    console.log("porra");
    axios
      .post("/send-email", formData)
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="contacts_page">
      <div className="contacts_container">
        <form className="form_container" onSubmit={handleSubmit}>
          <div className="form_header">
            <label>
              <p>Assunto:</p>
              <input
                className="input_form"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
              />
            </label>
            <label>
              <p>Área Jurídica:</p>
              <input
                className="input_form"
                name="field"
                type="text"
                value={formData.field}
                onChange={handleChange}
              />
            </label>
            <label>
              <p>Nome Completo:</p>
              <input
                className="input_form"
                name="fullname"
                type="text"
                value={formData.fullname}
                onChange={handleChange}
              />
            </label>
            <label>
              <p>Email:</p>
              <input
                className="input_form"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <label>
              <p>Telefone:</p>
              <input
                className="input_form"
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>
            <label>
              <p>Coloque aqui a sua questão:</p>
              <input
                className="input_message"
                name="message"
                type="text"
                value={formData.message}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="button_container">
            <button className="btn_send" onClick={handleSubmit}>
              Enviar
            </button>
            <button className="btn_back">Voltar</button>
          </div>
        </form>
        <div className="map_container"></div>
        <div className="info_cards">
          {contactsContent.map((contact) => (
            <div className="info_container">
              <div className="icon_container">
                <div className="icon">{contact.icon}</div>
              </div>
              <span>{contact.description}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="social_card">
        <div className="facebook_card">
          <AiFillFacebook />
        </div>
        <div className="linkedin_card">
          <AiFillLinkedin />
        </div>
      </div>
    </div>
  );
};

export default Contactos;
