import { Flex, Heading, Text } from "@chakra-ui/layout";
import { FC } from "react";


export const Chart: FC =()=>{

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  
  return (
    <Flex
          flexDirection='column'
    >
      <Text
          fontSize='20px'
          mb='20px'
          p='20px'

      >
      An active user details
      </Text>
    </Flex>
  )

}