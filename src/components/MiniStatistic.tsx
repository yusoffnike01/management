import { Box, Center, Divider, Text } from "@chakra-ui/layout";
import { Img } from "@chakra-ui/react";
import { FC } from "react";
import { MiniStatisticParams } from "../interfaces/Dashboard";

export const MiniStatistic: FC<MiniStatisticParams>=(params: MiniStatisticParams)=>{
  
  return (
  <Box
      minH='83%'
      boxShadow="0  4px 12px 0 rgba(0,0,0,0.05)"
      borderRadius='20px'
  >
    <Img 
        src={params.image}
        borderRadius='full'
        boxSize='40px'
        ml='70px'
        mt='40px'
    />
    <Text
        fontSize='16px'
        fontWeight='thin'
        pt='0.6rem'
        pl='3.5rem'
    >
      {params.person} 
      <Text 
            fontSize={{sm: '20px',md:'20px', xl:'30px'}}
            fontWeight='black'
            float='right'
            pr='30px'
            mt='-24px'
            >
       {params.value}
      </Text>
      <Center
            height='50px'
      >
              <Divider
                      orientation='vertical'
                      mb='120px'
              
              />
      </Center>
    </Text>
  </Box>
  )

}