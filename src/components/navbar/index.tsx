import { Text, Flex, Spacer, Box, Button } from '@chakra-ui/react'
import { Logo } from './Logo'

export const Navbar = () => {

  return (
    <Flex alignItems='center' justifyContent='center' direction="row" height= "70px" width="100%" bgClip="text">
      <Box p="10px"><Logo /></Box>
      <Box as='b' p="10px"><Text color="text">left</Text></Box>
      <Spacer />
      <Box as='b' p="10px"><Text color="text">right</Text></Box>
      
     
  
    </Flex>
  )
}