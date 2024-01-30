import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const StartupCard = ({ startup, idx }) => {
  return (
    <Col key={idx}>
      <Card className="px-2 pt-2">
      <Card.Img variant="top" src={startup.logo} className="sm:h-[20vh] sm:w-[25vw] md:h-[20vh] md:w-[15vw] lg:h-[20vh] lg:w-[12vw]"/>
      <Card.Body>
        <h1 className="text-center text-3xl">{startup.name}</h1>
        <Card.Text className="text-black">
        {startup.desc}
        </Card.Text>
        <Button variant="dark" className="w-full" >Read More</Button>
      </Card.Body>
    </Card>
    </Col>
    
  );
};

export default StartupCard;
// 