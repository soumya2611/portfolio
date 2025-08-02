import React from "react";
import SingleInfo from "./SingleInfo";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdSmartphone } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text="workforsoumya21@gmail.com" Image={MdEmail} />
      <SingleInfo text="+91 7377473924" Image={MdSmartphone} />
      <SingleInfo text="Khordha,Odisha,752055" Image={FaLocationDot} />
    </div>
  );
};

export default ContactInfo;
