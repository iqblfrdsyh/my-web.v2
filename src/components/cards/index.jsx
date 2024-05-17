import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import React from "react";

const Cards = {
  CardCertif: ({ title, subTitle, alt, urlImage }) => {
    return (
      <Card className="py-4 md:w-[350px] w-[310px]">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start h-[85px]">
          <h4 className="font-bold text-large">{title}</h4>
          <small className="text-default-500">{subTitle}</small>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt={alt}
            className="object-cover rounded-xl"
            src={urlImage}
            width={370}
          />
        </CardBody>
      </Card>
    );
  },
  CardPorto: ({ title, subtitle, image, number, onPress }) => {
    return (
      <Card className="py-4 md:w-[350px]">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-orange-500 font-semibold mb-2">
            Project #{number}
          </p>
          <Image alt="test" src={image} className="object-cover rounded-xl" />
          <h4 className="font-semibold text-2xl mt-2">{title}</h4>
          <small className="text-default-500">{subtitle}</small>
        </CardHeader>
        <CardBody>
          <div className="mt-3">
            <Button color="primary" variant="bordered" onPress={onPress}>
              View Details
            </Button>
          </div>
        </CardBody>
      </Card>
    );
  },
};

export default Cards;
