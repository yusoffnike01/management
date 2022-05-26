import { FC } from "react";
import { Progress } from '@chakra-ui/react'

export const FallbackSpinner: FC=()=>{
  return (
    <div>
      <Progress size='xs' isIndeterminate />
    </div>
  )

}