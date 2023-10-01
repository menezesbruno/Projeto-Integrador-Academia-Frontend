import React, { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import * as S from './style';
import './style.css'

export const ContactUS = () => {

  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[phone,setPhone]=useState('');
  const [message, setMessage] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [contactPermission, setContactPermission] = useState('');

  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    var templatesParams = {
      name: name,
      email: email,
      phone: phone,
      message: message,
      selectedOption: selectedOption,
      contactPermission: contactPermission,
    }

    emailjs.send("gmailservice", "template_tj39xvt", templatesParams, "F9cfoPFV4Jr3LB83T")
    .then(
      (result) => {
        console.log(result.text);
        navigate('/_sendmail');
      },
      (error) => {
        console.log(error.text);
        navigate('/_failmail');      }
    );
  };

  return (
    <S.StyledContactForm>
      <div style={{ display: "flex", justifyContent: "space-between"}}>
              <div style={{ flex: 1, marginRight: "60px", minWidth: "600px"}}>
                
                <form onSubmit={sendEmail}>
                      <label>Nome:</label>
                        <input
                        type="text"
                        placeholder="Digite o seu nome ...."
                        name="name"
                        onChange={(e) => {setName(e.target.value);}} value={name}
                        />
                      <label>Email:</label>
                        <input
                        type="email"
                        placeholder="Digite o seu email ...."
                        name="email"
                        onChange={(e) => {setEmail(e.target.value);}} value={email}
                        />
                      <label>Celular:</label>
                        <input
                        type="phone"
                        placeholder="Digite o seu Telefone ...."
                        name="phone"
                        onChange={(e) => {setPhone(e.target.value);}} value={phone}
                        />

                        <div style={{ display: "flex", alignItems: "center" }}>
                        <input
                            type="checkbox"
                            checked={contactPermission === 'sim'} 
                            onChange={(e) => setContactPermission(e.target.checked ? 'sim' : 'não')}
                            style={{ marginRight: "20px" }}
                        />
                        <label style={{ fontSize: "14px", whiteSpace: "nowrap", maxWidth: "200px" }}> Autorizo receber o contato via WhatsApp, SMS ou telegram</label>                        
                        </div>
                       <label>Qual o seu objetivo?</label>
                       <select
                          name="selectedOption"
                          value={selectedOption}
                          onChange={(e) => setSelectedOption(e.target.value)} 
                          >
                          <option value="Musculação">Musculação</option>
                          <option value="Nutrição">Nutrição</option>
                          <option value="Step">Step</option>
                          <option value="Jump">Jump</option>
                          <option value="Outros">Outros</option>
                        </select>
                        <label>Mensagem:</label> 
                            <textarea
                              placeholder="Digite sua mensagem ...."
                              name="message"
                              onChange={(e) => {setMessage(e.target.value);}} value={message}
                            />

                      <input type="submit" value="Enviar Informações" />

                </form>
              </div>
        </div>
      
    </S.StyledContactForm>
  );
};

export default ContactUS;