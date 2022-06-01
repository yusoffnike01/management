import { Flex } from "@chakra-ui/layout";
import { FC } from "react";
import { SideBar } from "../SideBar";

export const AdminLayout:FC = ({ children }) => {
  return (
    <Flex>
      <SideBar />
      {children}
    </Flex>
  )

}