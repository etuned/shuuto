import { Box, Flex, Center, Heading, Spacer, Text, VStack, Icon } from '@chakra-ui/react'
import ColorSwitcher from '../components/ColorSwitcher'
import client from '../lib/client'
import ProgressiveImage from 'react-progressive-image'
import Image from 'next/image'
import { FaSoundcloud } from 'react-icons/fa'
import Link from 'next/link'


const IndexPage = ({data}) => {
  return (
    <Center>
    <Box>
    <Flex justifyContent='center' p={5} maxW='960px'>
    <Box>
    <Heading>{data.siteTitle}</Heading></Box> <Spacer />
    <Box><ColorSwitcher/></Box>
    </Flex>
    
    <Flex justify='center' alignItems='center' flexDir='column'>
    
      <ProgressiveImage src={data.heroImage.url} placeholder={data.heroImage.metadata.lqip}>
          {src => <Image src={src} width={550} height={350}/>}
      </ProgressiveImage>

    
    <Text m={4}>{data.heroImageCap}</Text>
   
   
   <Link href='https://www.soundcloud.com/shuuto'><a> <VStack><Icon p={0} m={0} w={16} h={16} as={FaSoundcloud}/>
   <br/><Text>Shuuto on Soundcloud</Text></VStack></a></Link>
   
    </Flex>
    <Center>
    </Center>


    </Box>
    
    </Center>
  )
}
export default IndexPage


export async function getStaticProps() {
  const data = await client.fetch(`*[_type == 'siteSettings'][1]{
    'siteTitle': title,
    'heroImageCap': heroImage.caption,
    'heroImageAlt': heroImage.alt,
    'heroImage': heroImage.asset->{
      url,
      metadata {
        lqip,
      }
    }
  }
  `)
  return {
    props: {
      data
    },
    revalidate: 1,
  };
}
