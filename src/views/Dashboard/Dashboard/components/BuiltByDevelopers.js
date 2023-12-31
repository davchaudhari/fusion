// Chakra imports
import {
  Button,
  Flex,
  Icon,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import React from "react";
// react icons
import { BsArrowRight } from "react-icons/bs";

const BuiltByDevelopers = ({ name, description }) => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card minHeight='290.5px' p='1.2rem'>
      <CardBody w='100%'>
        <Flex flexDirection={{ sm: "column", lg: "row" }} w='100%'>
          <Flex
            flexDirection='column'
            h='100%'
            lineHeight='1.6'
            width={{ lg: "45%" }}>
            <Text fontSize='lg' color={textColor} fontWeight='bold' pb='.5rem'>
              {name}
            </Text>
            <Text fontSize='sm' color='gray.400' fontWeight='normal'>
              {description}
            </Text>
            <Spacer />
          </Flex>
          <Spacer />
        </Flex>
      </CardBody>
    </Card>
  );
};

export default BuiltByDevelopers;
