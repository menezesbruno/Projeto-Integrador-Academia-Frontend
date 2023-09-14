import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import * as S from './style';

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [message, setMessage] = useState("");
  const [imcResult, setIMCResult] = useState("");

  const calculateIMC = (weight, height) => {
    if (!weight || !height) {
      return "Preencha o peso e a altura para calcular o IMC.";
    }
  
    const imc = weight / (height * height);
  
    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc < 24.9) {
      return "Peso ideal";
    } else if (imc < 29.9) {
      return "Acima do peso";
    } else if (imc < 34.9) {
      return "Obesidade grau 1";
    } else {
      return "Obesidade grau 2 ou superior";
    }
     };

  const sendEmail = (e) => {
    e.preventDefault();
    
    const imcMessage = calculateIMC(weight, height);

    const fullMessage = `
    Nome: ${form.current.user_name.value}
    Email: ${form.current.user_email.value}
    Objetivo: ${form.current.interests.value}
    Peso: ${weight} kg
    Altura: ${height} m
    IMC: ${imcMessage}
  `;

    emailjs
      .sendForm(
        "replace with service id",
        "replace with template id",
        form.current,
        "replace with user id"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );

      setIMCResult(imcMessage);
      setMessage(fullMessage);
  };

  return (
    <S.StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Nome:</label>
        <input type="text" name="user_name" />
        <label>Email:</label>
        <input type="email" name="user_email" />
        <label>Qual o seu Objetivo:</label>
        <select name="interests">
          <option value="nutricao">Nutrição</option>
          <option value="musculacao">Musculação</option>
          <option value="step">Step</option>
          <option value="danca">Dança</option>
        </select>

        <label>Peso (kg):</label>
        <input type="number" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
        <label>Altura (m):</label>
        <input type="number" name="height" value={height} onChange={(e) => setHeight(e.target.value)} />
        <input type="submit" value="Calcular IMC" />
        <div id="imcResult">{imcResult}</div>

        <label>Mensagem:</label>
        <textarea name="message" value={message} readOnly />
        <input type="submit" value="Enviar" />
      </form>
    </S.StyledContactForm>
  );
};

export default Contact;