"use client";

import React, { useState, useCallback } from "react";
import axios from "axios";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import Section from "@/components/layouts/section";
import { Button, Input, Textarea } from "@nextui-org/react";

const Contact = () => {
  const [sending, setSending] = useState(false);
  const publicKey = process.env.NEXT_PUBLIC_USER_ID;
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;

  const sendWhatsappMessage = async (fullname, message, email) => {
    try {
      if (!message) {
        throw new Error("WhatsApp message body is empty");
      }

      const response = await axios.post("/api/v1/sendMessage", {
        body: `New message from : ${fullname}\nEmail : ${email} \n\n╭─━━━━━━━━━━━━─╮\n\n${message}\n\n╰─━━━━━━━━━━━━─╯`,
        from: "whatsapp:+14155238886",
        to: "whatsapp:+6288971755075",
      });

      if (response.status === 200) {
        showSuccessAlert();
      } else {
        showErrorAlert();
      }
    } catch (error) {
      showErrorAlert();
    } finally {
      setSending(false);
    }
  };

  const sendEmailAndWhatsapp = async (fullname, email, message) => {
    try {
      const templateParams = {
        from_name: email,
        user_name: fullname,
        user_email: email,
        to_name: "iqblfrdsyh@gmail.com",
        message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      await sendWhatsappMessage(fullname, message, email);
    } catch (error) {
      showErrorAlert();
    }
  };

  const sendEmail = useCallback(async (e) => {
    e.preventDefault();
    const { fullname, email, message } = e.target;

    try {
      setSending(true);
      fullname.disabled = true;
      email.disabled = true;
      message.disabled = true;

      await sendEmailAndWhatsapp(fullname.value, email.value, message.value);
    } finally {
      setSending(false);
      fullname.disabled = false;
      email.disabled = false;
      message.disabled = false;
    }

    e.target.reset();
  }, []);

  const showSuccessAlert = () => {
    Swal.fire({
      title: "Success!",
      text: "Your message has been sent successfully.",
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
