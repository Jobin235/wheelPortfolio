import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useAlert } from 'react-alert'

function ContactContainer() {
  const form = useRef();
  const alert = useAlert()

  const [name, setName] = useState("Enter your name");
  const [email, setEmail] = useState("Enter your email");
  const [subject, setSubject] = useState("Subject");
  const [message, setMessage] = useState("Message");

  const [btnDisabled, setBtnDisabled] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    
    setBtnDisabled(true);
    emailjs
      .sendForm(
        "service_dqhxqas",
        "template_07dbwwk",
        form.current,
        "YCE71st45db1UkJ7i"
      )
      .then(
        (result) => {
          console.log(result);
          setBtnDisabled(false);
          alert.success('Message Send')
        },
        (error) => {
          console.log(error);
          setBtnDisabled(false);
          alert.error('Message Failed')
        }
      );
  };

  const handleFocus = (e) => {
    if (e.target.name === "user_name") setName("");
    else if (e.target.name === "user_email") setEmail("");
    else if (e.target.name === "user_subject") setSubject("");
    else setMessage("");
  };

  const handleChange = (e) => {
    if (e.target.name === "user_name") setName(e.target.value);
    else if (e.target.name === "user_email") setEmail(e.target.value);
    else if (e.target.name === "user_subject") setSubject(e.target.value);
    else setMessage(e.target.value);
  };

  return (
    <div className="container">
      <p>if you have any question, feel free to contact me :)</p>
      <form ref={form} onSubmit={sendEmail}>
        <div className="inputContainer">
          <div className="text-field-name-1">
            <input
              type="text"
              name="user_name"
              className="text"
              placeholder="Enter your name"
              value={name}
              onFocus={handleFocus}
              onChange={handleChange}
            />
          </div>
          <div className="text-field-email-1">
            <input
              type="text"
              name="user_email"
              className="text"
              placeholder="Enter your email"
              value={email}
              onChange={setEmail}
              onFocus={handleFocus}
              onChange={handleChange}
            />
          </div>
          <div className="text-field-subject-1">
            <input
              type="text"
              name="user_subject"
              className="text"
              placeholder="Subject"
              value={subject}
              onFocus={handleFocus}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="textAreaContainer">
          <div className="text-field-area-">
            <textarea
              name="message"
              placeholder="Message"
              value={message}
              onFocus={handleFocus}
              onChange={handleChange}
            >
              Message
            </textarea>
          </div>
        </div>
        <div className="buttonContainer">
          <input type="submit" value="send message" disabled={btnDisabled}/>
        </div>
      </form>
    </div>
  );
}

export default ContactContainer;
