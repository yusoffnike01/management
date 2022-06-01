import { Flex } from "@chakra-ui/layout";
import { FC } from "react";
import { Dashboard } from "../../components/dashboard";
import { SideBar } from "../../components/SideBar";

export const HomePage: FC=()=>{
  console.log('homepage')
  return (
      <Dashboard/>
  )
}

export default HomePage;