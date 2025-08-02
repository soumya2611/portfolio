import React from "react";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 ">
      {/* <img
        src="../../images/email-image.png"
        alt="contact me"
        className="max-w-[300px] "
      /> */}
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactRight;
