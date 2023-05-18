import {
  Box,
  Flex,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

export function About() {
  return (
    <>
      <Flex flexWrap={'wrap'} flex={1} p={'30px'} gap={'10px'}>
        <Flex
          flexDirection={useBreakpointValue({ md: 'column', base: 'row' })}
          color={'white'}
          gap={'10px'}
          p={'20px'}
          justifyContent={'center'}
        >
          <HStack
            justifyContent={'center'}
            borderRadius={'10px'}
            w={'100px'}
            h={'100px'}
            bg={'#64A507'}
          >
            <Heading fontSize={'20px'}> About</Heading>
          </HStack>
          <HStack
            justifyContent={'center'}
            borderRadius={'10px'}
            w={'100px'}
            h={'100px'}
            color={'#64A507'}
            border={'1px solid #64A507'}
          >
            <Heading fontSize={'20px'}> Vission</Heading>
          </HStack>
        </Flex>

        <HStack
          justifyContent={'center'}
          flex={5}
          alignItems={'flex-start'}
          flexDirection={'column'}
        >
          <Heading
            m={'0px'}
            fontSize={'35px'}
            fontFamily={"'Cedarville Cursive', cursive"}
            color={'#64A507'}
            fontWeight={100}
          >
            welcome to
          </Heading>
          <Heading>eGardener</Heading>
          <Text
            fontFamily={"'Poppins', sans-serif"}
            fontSize={'16px'}
            color={'gray.600'}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            molestiae repudiandae, corporis consequuntur consectetur nisi nobis
            suscipit ea veritatis voluptatum! Molestiae quos molestias, nihil
            facere obcaecati quasi corrupti magni aliquam. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Amet dignissimos quasi quo
            distinctio cumque optio, pariatur architecto tempora consectetur
            quod! Reprehenderit magnam veniam assumenda omnis animi. Illo,
            repellat magnam. Sint. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Porro ut dignissimos ea minima. Debitis molestiae
            illo optio quaerat neque adipisci suscipit ea, facilis, dolorem,
            quidem aspernatur dicta officia quod maxime?
          </Text>
        </HStack>

        <Image
          flex={2}
          justifySelf={'center'}
          borderRadius={'10px'}
          src="https://garden.qtcmedia.com/html/images/index/about.jpg"
        />
      </Flex>
    </>
  );
}
