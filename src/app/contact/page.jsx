import Section from "@/components/layouts/section";
import { Button, Input, Textarea } from "@nextui-org/react";
import React from "react";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="md:w-full w-3/4 md:h-[60vh] h-[40vh] flex items-center justify-center">
        <h2 className="md:text-[65px] text-[40px] font-bold">
          Let's Work Together!
        </h2>
      </div>
      <hr />
      <Section title="Contact Me" className="text-center mt-7">
        <p className="text-center mb-16">
          Reach Out for Collaboration: Unlocking Opportunities Together
        </p>
        <form className="flex flex-col gap-5 md:w-[450px] mx-auto">
          <Input
            isRequired
            type="text"
            label="Fullname"
            className="max-w-full"
          />
          <Input isRequired type="email" label="Email" className="max-w-full" />
          <Textarea
            variant="faded"
            label="Message"
            placeholder="Enter your message"
            description="Type your message for me."
            className="max-w-full text-black"
          />
          <Button color="primary">Send</Button>
        </form>
      </Section>
    </React.Fragment>
  );
};

export default Contact;
