import React from "react";
import SingleInfo from "./SingleInfo";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text="workforsoumya21@gmail.com" Image={MdEmail} />
    </div>
  );
};

export default ContactInfo;