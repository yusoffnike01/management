import { Box } from "@chakra-ui/layout";
import { FC } from "react";
import { Chart } from "./Chart/Chart";

export const DataDashboard: FC =()=>{
  return (
    <Box
       boxShadow="0 4px 12px 0 rgba(0,0,0,0.05)"
       borderRadius='20px'
  
  >
  <Chart/>
  </Box>
  )

}
