"use client";

import React, { useState, useCallback } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import Section from "@/components/layouts/section";
import { Button, Input, Textarea } from "@nextui-org/react";

const Contact = () => {
  const [sending, setSending] = useState(false);
  const publicKey = process.env.NEXT_PUBLIC_USER_ID;
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;

  const showSuccessAlert = () =>
    showAlert(
      "Success!",
      "Your message has been sent successfully.",
      "success"
    );
  const showErrorAlert = () =>
    showAlert(
      "Error!",
      "Oops, something went wrong. Please try again.",
      "error"
    );

  const showAlert = (title, text, icon) => {
    Swal.fire({
      title,
      text,
      icon,
    });
  };

  const sendEmail = useCallback(async (e) => {
    e.preventDefault();
    const { fullname, email, message } = e.target;

    try {
      setSending(true);
      disableFormFields([fullname, email, message]);

      const templateParams = {
        from_name: email.value,
        user_name: fullname.value,
        user_email: email.value,
        to_name: "iqblfrdsyh@gmail.com",
        message: message.value,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      showSuccessAlert();
    } catch (error) {
      showErrorAlert();
    } finally {
      setSending(false);
      enableFormFields([fullname, email, message]);
      e.target.reset();
    }
  }, []);

  const disableFormFields = (fields) =>
    fields.forEach((field) => (field.disabled = true));
  const enableFormFields = (fields) =>
    fields.forEach((field) => (field.disabled = false));

  return (
    <>
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
            disabled={sending}
          />
          <Input
            isRequired
            type="email"
            label="Email"
            className="max-w-full"
            name="email"
            disabled={sending}
          />
          <Textarea
            variant="faded"
            label="Message"
            placeholder="Enter your message"
            description="Type your message for me."
            className="max-w-full text-black"
            name="message"
            disabled={sending}
          />
          <Button type="submit" color="primary" disabled={sending}>
            {sending ? "Sending..." : "Send"}
          </Button>
        </form>
      </Section>
    </>
  );
};

export default Contact;
