import { Flex } from "@chakra-ui/layout";
import { FC } from "react";
import { SideBar } from "../../components/SideBar";

export const HomePage: FC=()=>{
  console.log('homepage')
  return (
    <div>
      <Flex>
      <SideBar/>
      </Flex>
     

    </div>
  )
}

export default HomePage;