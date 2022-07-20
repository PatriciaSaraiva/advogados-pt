import React from "react";
import "./Contactos.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { SiOpenstreetmap } from "react-icons/si";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const contactsContent = [
  {
    className: "address_container",
    icon: <SiOpenstreetmap />,
    description:
      "Rua Santos Bernardes, Edif. Atlantic, n.15, Loja 2 2560-362 Torres Vedras",
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

const MyMapComponent = withGoogleMap((props) => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: 39.089, lng: -9.257 }}>
    {props.isMarkerShown && <Marker position={{ lat: 39.089, lng: -9.257 }} />}{" "}
  </GoogleMap>
));

<MyMapComponent isMarkerShown />;

const Contactos = () => {
  return (
    <div className="contacts_page">
      <div>
        <h1 className="page_title">Contactos</h1>
      </div>
      <div className="contacts_container">
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
        <div className="map_container">MAPA</div>
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
