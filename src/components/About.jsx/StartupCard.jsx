import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const StartupCard = ({ startup, idx }) => {
  return (
    <Col key={idx}>
      <Card className="flex relative justify-center items-center ">
        <Card.Img
          className="sm:h-[20vh] sm:w-[25vw] md:h-[20vh] md:w-[15vw] lg:h-[20vh] lg:w-[12vw]"
          variant="top"
          src={startup.logo}
        />
        <Card.Body>
          <Card.Title className="text-center">{startup.name}</Card.Title>
          <Card.Text className="py-3">{startup.desc}</Card.Text>
          <Button
            href="#"
            variant="dark"
            className="flex justify-center items-center"
          >
            Read More
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default StartupCard;
