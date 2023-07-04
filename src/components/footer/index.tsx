import { Flex, FlexProps } from '@chakra-ui/react'

export const Footer = (props: FlexProps) => (
  <Flex  
  height='30px'
  bgClip="text"
  justifyContent="center"
  alignItems='center'
    {...props} 
  />
)
