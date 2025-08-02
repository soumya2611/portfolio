import React from "react";
import SingleContactSocial from "./SingleContactSocial";
import { FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const ContactSocial = () => {
  return (
    <div className="flex  gap-4">
      <SingleContactSocial
        link="https://www.linkedin.com/in/soumya2611"
        Icon={FaLinkedin}
      />
      <SingleContactSocial
        link="https://www.github.com/soumya2611"
        Icon={FaGithub}
      />
      <SingleContactSocial
        link="https://x.com/soumyadev2611"
        Icon={FaSquareXTwitter}
      />
    </div>
  );
};

export default ContactSocial;
