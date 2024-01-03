import { Button, Image } from "@nextui-org/react";
import { BsBoundingBoxCircles, BsTelephoneForward } from "react-icons/bs";
import Section from "@/components/layouts/section";
import React from "react";
import Items from "@/components/items";
import { socialMedia } from "@/data/socialmedia";
import Link from "next/link";

const Home = () => {
  return (
    <React.Fragment>
      <section className="h-[85vh]">
        <div className="flex justify-between items-center gap-5">
          <div className="flex flex-col gap-2 md:items-start items-center md:mt-0 mt-[50px]">
            <p className="text-[15px] md:border-l-3 md:border-white md:ps-2 font-normal mb-2">
              Hello, everyone👋
            </p>
            <h1 className="md:text-[40px] text-[40px] md:text-left text-center font-semibold">
              I'm M Iqbal Ferdiansyah
            </h1>
            <p className="font-normal opacity-50 text-[19px]">
              Frontend Developer
            </p>
            <p className="font-normal md:w-[600px] md:text-left text-center">
              a frontend developer who has a hobby of playing games and
              listening to music
            </p>
            <div className="flex gap-5 items-center justify-center mt-3">
              <Link href="/contact">
                <Button
                  size="md"
                  color="default"
                  variant="bordered"
                  radius="sm"
                  className="text-white font-semibold"
                >
                  Contact <BsTelephoneForward />
                </Button>
              </Link>
              <Link href="/portofolio">
                <Button
                  size="md"
                  color="default"
                  variant="bordered"
                  radius="sm"
                  className="text-white font-semibold"
                >
                  Portofolio <BsBoundingBoxCircles />
                </Button>
              </Link>
            </div>
            <div className="md:mt-3 mt-7">
              <h4>Social Media :</h4>
              <div className="flex gap-4 mt-2">
                {socialMedia.map((x) => {
                  return (
                    <a href={x.link} key={x.id}>
                      {x.icon}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="md:block hidden">
            <Image
              src="/assets/dev-ilustration.png"
              alt="iqbal"
              width={480}
              height={480}
            />
          </div>
        </div>
      </section>
      <Section title="Services" className="text-center my-[50px]">
        <div className="flex gap-10 justify-center flex-wrap">
          <Items.ServiceItem
            itemName="Website Development"
            imageSrc="/assets/images/icons/web-development.png"
            desc="Skilled in crafting responsive and dynamic websites tailored to your needs."
            linkto="/"
          />
          <Items.ServiceItem
            itemName="Web Design"
            imageSrc="/assets/images/icons/ui-ux.png"
            desc="Specializing in creating visually appealing and user-friendly web designs."
            linkto="/"
          />
          <Items.ServiceItem
            itemName="API Integration"
            imageSrc="/assets/images/icons/api.png"
            desc="Capable of efficiently connecting software systems to enhance website functionality."
            linkto="/"
          />
          <Items.ServiceItem
            itemName="Maintenance & Updates"
            imageSrc="/assets/images/icons/maintenance.png"
            desc="Providing maintenance and update services to keep your website running smoothly."
            linkto="/"
          />
        </div>
      </Section>
    </React.Fragment>
  );
};

export default Home;
