import { Flex, Text } from '@chakra-ui/react'
import { PlaidButton } from './PlaidButton'
export const Core = () => (
  <Flex  
  height='100%'
  bgClip="text"
  justifyContent='left'  
  alignItems='top'
  >
    <Text color="text">
        <PlaidButton />
    </Text>
  </Flex>
)