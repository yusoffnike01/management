import { Flex, Link, Text } from "@chakra-ui/layout";
import { Icon, Menu, MenuButton } from "@chakra-ui/react";
import { FC } from "react";


export const NavItem: FC<{navSize: string, icon: any, title: string, handleSignOut?: any}>=({navSize, icon, title, handleSignOut})=>{

 const style: any = navSize=='large' && '100%'

  return (
    <Flex
        mt={30}
        flexDir='column'
        w='100%'
        alignItems={navSize =='small' ? 'center': 'flex-start'}
    >
      <Menu placement="right">
    <Link 
        p={3}
        borderRadius={8}
        _hover={{ textDecor: 'none', backgroundColor: "#AEC8CA" }}
        w={style}
        onClick={handleSignOut}
    >
    <MenuButton w='100%'>
      <Flex>
        <Icon 
            as={icon} 
            fontSize='xl' 
            color='#82AAAD'/>
        <Text 
            ml={5} 
            display={navSize=='small' ? 'none' : 'flex'}>{title}
        </Text>
      </Flex>
    </MenuButton>
    </Link>
      </Menu>
    </Flex>
  )

}
