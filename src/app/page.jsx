"use client";

import { Button, Image } from "@nextui-org/react";
import { BsBoundingBoxCircles, BsTelephoneForward } from "react-icons/bs";
import Section from "@/components/layouts/section";
import React from "react";
import Items from "@/components/items";
import { socialMedia } from "@/data/socialmedia";
import Link from "next/link";

const Home = () => {
  // useEffect(() => {
  //   const isAlertShown = localStorage.getItem("isAlertShown");

  //   if (!isAlertShown) {
  //     alert("This portfolio is still under development and not 100% complete.");
  //     localStorage.setItem("isAlertShown", "true");
  //   }
  // }, []);

  return (
    <React.Fragment>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-50 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#f56fa7] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
      </div>
      <section className="-mt-10 mb-[105px] relative z-0">
        <div className="flex justify-between items-center gap-5">
          <div className="flex flex-col gap-2 md:items-start items-center md:mt-0 mt-[50px]">
            <p className="text-[15px] md:border-l-3 md:border-white md:ps-2 font-normal mb-2">
              Hello, everyone👋
            </p>
            <h1 className="md:text-[40px] text-[40px] md:text-left text-center font-semibold">
              I'm M Iqbal Ferdiansyah
            </h1>
            <p className="font-normal opacity-50 text-[19px]">
              Website Developer
            </p>
            <p className="font-normal md:w-[600px] md:text-left text-center">
              a Website Developer who has a hobby of playing games and
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
      <Section title="Services" className=" text-center">
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
