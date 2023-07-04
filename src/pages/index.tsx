import { Text } from '@chakra-ui/react'

import { Navbar } from '../components/navbar'
import { Core } from '../components/core'
import { Footer } from '../components/footer'
import { Container } from '../components/Container'

const Index = () => {
  
  return (
    <Container height="100vh">
      <Navbar />
      <Core />
      <Footer>
      <Text color="text">footer tbd</Text>
      </Footer>
    </Container>
  )
}

export default Index