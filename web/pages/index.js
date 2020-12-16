import { Box, Flex, Center, Heading, Spacer, Text } from '@chakra-ui/react'
import ColorSwitcher from '../components/ColorSwitcher'
import client from '../lib/client'
import Image from 'next/image'

const IndexPage = (props) => {
 

  const { siteTitle = 'Missing site title', heroImageUrl = 'http://via.placeholder.com/550x350', heroImage} = props
  const heroImageCap = heroImage.caption || 'Yo Shuuto, Add a caption to the Hero Image!'
  { console.log(heroImage) }
  return (
    <Center>
    <Box>
    <Flex justifyContent='center' p={5} maxW='960px'>
    <Box>
    <Heading>{siteTitle}</Heading></Box> <Spacer />
    <Box><ColorSwitcher/></Box>
    </Flex>
    
    <Flex justify='center' alignItems='center' flexDir='column'>
    <Image src={heroImageUrl} width={550} height={350}/>
    <Text m={4}>{heroImageCap}</Text>
    </Flex>
    <Center>
    </Center>


    </Box>
    </Center>
  )
}
export default IndexPage

IndexPage.getInitialProps = async function() {
  // It's important to default the slug so that it doesn't return "undefined"
  return await client.fetch(`*[_type == "siteSettings"][1]{'siteTitle': title,'heroImageUrl': heroImage.asset->url, heroImage}`)
}

