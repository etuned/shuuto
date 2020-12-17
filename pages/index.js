import { Box, Flex, Center, Heading, Spacer, Text } from '@chakra-ui/react'
import ColorSwitcher from '../components/ColorSwitcher'
import client from '../lib/client'
import Image from 'next/image'

const IndexPage = ({data}) => {
  const { siteTitle = 'Missing site title', heroImageUrl = 'http://via.placeholder.com/550x350', heroImage} = data
  const heroImageCap = heroImage.caption || 'Yo Shuuto, Add a caption to the Hero Image!'
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


export async function getStaticProps() {
  const data = await client.fetch(`*[_type == "siteSettings"][1]{'siteTitle': title,'heroImageUrl': heroImage.asset->url, heroImage}`)
  return {
    props: {
      data
    },
    revalidate: 1,
  };
}
