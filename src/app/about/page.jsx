"use client";

import Items from "@/components/items";
import Section from "@/components/layouts/section";
import { Button, useDisclosure, Image } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { getData } from "@/libs/api-libs";
import Cards from "@/components/cards";
import ModalPopup from "@/components/modal";

const About = () => {
  const [skills, setSkills] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const fetchApi = async () => {
    const dataSkill = await getData("skills");
    const dataCertif = await getData("certificate");
    setSkills(dataSkill);
    setCertificates(dataCertif);
  };

  console.log(skills);

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <React.Fragment>
      <ModalPopup
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        title="Download CV"
        content={<p>Are you sure to download this CV?</p>}
        swalText="CV is not available"
        buttonTitleOK="Download"
      />
      <Section title="About Me" className="text-center mt-[20px] mb-[50px]">
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
          <div>
            <figure>
              <Image
                src="/assets/images/myself.jpeg"
                alt="iqbal"
                className="md:w-[350px] md:h-[350px] w-[250px] h-[250px] mx-auto"
                style={{ borderRadius: "63% 37% 49% 51% / 44% 51% 49% 56%" }}
              />
            </figure>
          </div>
          <div className="flex flex-col gap-4 text-center md:text-left md:w-[350px]">
            <article className="text-[16px]">
              I am a passionate web developer who always strives to deliver the
              best in every project I handle. With experience in web
              development, I have expertise in Frontend, Backend, and UI/UX. I
              enjoy working in teams, exploring new things, and continuously
              seeking ways to improve myself.
            </article>
            <div>
              <Button
                radius="small"
                variant="bordered"
                color="success"
                onPress={onOpen}
              >
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </Section>
      <Section title="My Skills" className="text-center mt-[140px] mb-[50px]">
        <div className="flex flex-wrap gap-10 justify-center md:w-[500px] mx-auto">
          {skills.map((data) => (
            <Items.SkillItem
              key={data.id}
              imageSrc={data.image}
              altName={data.title}
            />
          ))}
        </div>
      </Section>
      <Section
        title="My Certificate"
        className="text-center mt-[140px] mb-[50px]"
      >
        <div className="flex gap-5 flex-wrap justify-center">
          {certificates.map((data) => (
            <div key={data.id}>
              <Cards.CardCertif
                title={data.title}
                subTitle={data.author}
                alt={data.title}
                urlImage={data.image}
              />
            </div>
          ))}
        </div>
      </Section>
    </React.Fragment>
  );
};

export default About;
