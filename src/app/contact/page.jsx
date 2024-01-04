"use client";

import React, { useCallback } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import Section from "@/components/layouts/section";
import { Button, Input, Textarea } from "@nextui-org/react";

const Contact = () => {
  const publicKey = process.env.NEXT_PUBLIC_USER_ID;
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;

  const sendEmail = useCallback(
    (e) => {
      e.preventDefault();

      const templateParams = {
        from_name: e.target.email.value,
        user_name: e.target.fullname.value,
        user_email: e.target.email.value,
        to_name: "iqblfrdsyh@gmail.com",
        message: e.target.message.value,
      };

      emailjs.send(serviceId, templateId, templateParams, publicKey).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          showSuccessAlert();
        },
        (error) => {
          console.log("FAILED...", error);
          showErrorAlert();
        }
      );

      e.target.reset();
    },
    [serviceId, templateId, publicKey]
  );

  const showSuccessAlert = () => {
    Swal.fire({
      title: "Email Sent!",
      text: "Your email has been sent successfully.",
      icon: "success",
    });
  };
  
  const showErrorAlert = () => {
    Swal.fire({
      title: "Error!",
      text: "Oops, something went wrong. Please try again.",
      icon: "error",
    });
  };

  return (
    <React.Fragment>
      <div className="md:w-full w-3/4 md:h-[60vh] h-[40vh] flex items-center justify-center">
        <h2 className="md:text-[65px] text-[40px] font-bold">
          Let's Work Together!
        </h2>
      </div>
      <hr />
      <Section
        title="Contact Me"
        className="text-center mt-7"
        icon="/assets/images/contact-animate.gif"
      >
        <p className="text-center mb-16">
          Reach Out for Collaboration: Unlocking Opportunities Together
        </p>
        <form
          id="contactForm"
          onSubmit={sendEmail}
          className="flex flex-col gap-5 md:w-[450px] mx-auto"
        >
          <Input
            isRequired
            type="text"
            label="Fullname"
            className="max-w-full"
            name="fullname"
          />
          <Input
            isRequired
            type="email"
            label="Email"
            className="max-w-full"
            name="email"
          />
          <Textarea
            variant="faded"
            label="Message"
            placeholder="Enter your message"
            description="Type your message for me."
            className="max-w-full text-black"
            name="message"
          />
          <Button type="submit" color="primary">
            Send
          </Button>
        </form>
      </Section>
    </React.Fragment>
  );
};

export default Contact;
