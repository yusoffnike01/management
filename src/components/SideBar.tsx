import { Divider, Flex, Heading, Text } from "@chakra-ui/layout";
import { Avatar, IconButton } from "@chakra-ui/react";
import { FC, useState } from "react";
import { FiHome, FiKey, FiMenu } from 'react-icons/fi';
import { NavItem } from "./NavItem";

export const SideBar: FC =()=>{
   const [navSize, changeNavSize] = useState('large');


  return (

  <Flex
        pos="sticky"
        left="5"
        h="95vh"
        marginTop="2.5vh"
        boxShadow="0  4px 12px 0 rgba(0,0,0,0.05)"
        borderRadius={navSize=='small' ? '15px': '30px'}
        w={navSize=='small' ? "75px": '200px'}
        flexDir="column"
        justifyContent="space-between"
  >
  <Flex
        p="5%"
        flexDir="column"
        alignItems={navSize=='small' ? 'center': 'flex-start'}
        as="nav"
  >
  <IconButton 
          background="none"
          mt={5} 
          aria-label={""} 
          _hover={{background: 'none'}}
          icon= {<FiMenu/>}
          onClick={()=>{
            if(navSize=='small')
            {
              changeNavSize('large')
            }
            else{
              changeNavSize('small')
            }
          }}
          
    />
  <NavItem navSize={navSize} icon={FiHome} title="Dashboard"/>
  <NavItem navSize={navSize} icon={FiKey} title="Log Out"/>
  </Flex>
          <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize=='small' ? 'center' : 'flex-start'}
                mb={4}
            >
          <Divider 
                  display={navSize =='small' ? 'none' : 'flex'}
          />
          <Flex 
                mt={4} 
                align="center"
          >
          <Avatar size="sm"/>
          <Flex 
                flexDir="column" 
                ml={4} 
                display={navSize == "small" ? "none" : "flex"}
          >
          <Heading 
                  as="h3" 
                  size="sm"
          >
            Yusoff
          </Heading>
         <Text>
           Admin
         </Text>
        </Flex>
        </Flex>
    </Flex>
  </Flex>
  )

}