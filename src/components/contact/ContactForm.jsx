import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publickey = import.meta.env.VITE_PUBLIC_KEY;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publickey,
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setSuccess("Message Sent to Soumya ...");
        },
        (error) => {
          // console.log(error);
          setSuccess("FAILED...", error);
        }
      );
  };

  return (
    <div>
      <p className="text-orange text-center mb-2">{success}</p>
      <form
        onSubmit={sendEmail}
        className="flex flex-col text-white text-lg gap-4 "
        ref={form}
      >
        <input
          type="text"
          value={name}
          onChange={handleName}
          name="name"
          placeholder="Enter your name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
        />
        <input
          value={email}
          onChange={handleEmail}
          type="email"
          name="from_email"
          placeholder="Enter your email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
        />
        <textarea
          value={message}
          onChange={handleMessage}
          name="message"
          className=" rounded-lg bg-lightBrown p-2"
          placeholder="Message "
          required
          rows="9"
          cols="50"
        />
        <button
          className="px-2 py-2 w-full rounded-2xl  bg-orange hover:bg-cyan border font-bold text-xl    transition-all duration-400 cursor-pointer hover:text-black"
          type="submit "
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
