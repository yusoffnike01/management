import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/layout"
import { FC } from "react"
import { DataDashboard } from "./DataDashboard"
import { MiniStatistic } from "./MiniStatistic"

export const Dashboard:FC =()=>{
  return (
 <Flex
    boxShadow="0  4px 12px 0 rgba(0,0,0,0.05)"
    borderRadius='30px'
    width= '85%'
    flexDirection='column'

    ml='4%'
 >
   <Heading 
        as='h3' 
        size='lg'
        pt='3.0rem'
        pl='1.8rem'
    >
     Dashboard
   </Heading>
  <SimpleGrid 
        columns={{ sm: 1, md: 2, xl: 4 }}
        spacing='24px'
        m='30px'
  >
<MiniStatistic image="https://img.favpng.com/14/18/7/clip-art-student-computer-icons-school-illustration-png-favpng-K8z14ZVU2GZp7RCzMMPE2zp4p.jpg" person="Students" value={30000} />
<MiniStatistic image="https://w1.pngwing.com/pngs/365/549/png-transparent-school-drawing-teacher-education-teacher-education-school-cartoon-professor-lecture.png" person='Teacher' value={150}/>
<MiniStatistic image="https://thumbs.dreamstime.com/b/family-children-boy-daughter-logo-parenting-template-loving-poster-design-moslem-couple-age-difference-207796365.jpg" person="Parent" value={34}/>
<MiniStatistic image="https://img.favpng.com/21/3/18/computer-icons-clip-art-portable-network-graphics-system-administrator-user-png-favpng-P8LVNtfaNewQkVVxgSgqiy0Tk.jpg" person='Staff' value={50}/>
  </SimpleGrid>

<SimpleGrid
            columns={{xl:2}}
            spacing='24px'
            m='30px'
>
<DataDashboard/>
  
</SimpleGrid>

 </Flex>
  )
}