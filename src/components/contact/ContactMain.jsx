import React from "react";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";

const ContactMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4"
    >
      <h2 className="text-cyan text-6xl mb-10 text-center">Contact Me</h2>
      <div className="bg-brown flex flex-col md:flex-row justify-between gap-24 p-8 rounded-2xl">
        <ContactLeft />
        <ContactRight />
      </div>
    </div>
  );
};

export default ContactMain;
