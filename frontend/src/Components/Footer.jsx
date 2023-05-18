import { ReactNode } from 'react';

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Avatar,
  useBreakpointValue,
} from '@chakra-ui/react';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function FooterSection() {
  return (
    <Box bg={'#171D20'} color={'white'}>
      <Container as={Stack} maxW={'100%'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}
        >
          <Stack>
            <a href="/">
              <Stack direction={'row'} align={'center'} gap={2}>
                <Flex
                  w={8}
                  h={8}
                  align={'center'}
                  justify={'center'}
                  rounded={'full'}
                ></Flex>
                <Text
                  fontFamily={'heading'}
                  fontSize={useBreakpointValue({ base: '1xl', md: '2xl' })}
                  fontWeight={500}
                  bg={'green.800'}
                  p={'10px'}
                  color={'white'}
                >
                  eGardener
                </Text>
              </Stack>
            </a>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Services</ListHeader>
            <Link
              fontSize={'xl'}
              py={1}
              fontWeight={'sm'}
              color={'grey'}
              href={'/products'}
            >
              Consultation
            </Link>
            <Link
              fontSize={'xl'}
              py={1}
              fontWeight={'sm'}
              color={'grey'}
              href={'/services/mobile-repair'}
            >
              Landscaping
            </Link>
            <Link
              fontSize={'xl'}
              py={1}
              fontWeight={'sm'}
              color={'grey'}
              href={'/services/laptop-repair'}
            >
              Maintainance
            </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link
              fontSize={'xl'}
              py={1}
              fontWeight={'sm'}
              color={'grey'}
              href={'/about-us'}
            >
              About Us
            </Link>
            <Link
              fontSize={'xl'}
              py={1}
              fontWeight={'sm'}
              color={'grey'}
              href={'/contact-us'}
            >
              Contact Us
            </Link>
            <Link
              fontSize={'xl'}
              py={1}
              fontWeight={'sm'}
              color={'grey'}
              href={'#'}
            >
              Become a partner
            </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link
              fontSize={'xl'}
              py={1}
              fontWeight={'sm'}
              color={'grey'}
              href={'#'}
            >
              Help Center
            </Link>
            <Link
              fontSize={'xl'}
              py={1}
              fontWeight={'sm'}
              color={'grey'}
              href={'#'}
            >
              Terms of Service
            </Link>
            <Link
              fontSize={'xl'}
              py={1}
              fontWeight={'sm'}
              color={'grey'}
              href={'#'}
            >
              Privacy Policy
            </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Follow Us</ListHeader>
            <Link
              fontSize={'xl'}
              py={1}
              fontWeight={'sm'}
              color={'grey'}
              href={'#'}
            >
              Facebook
            </Link>
            <Link
              fontSize={'xl'}
              py={1}
              fontWeight={'sm'}
              color={'grey'}
              href={'#'}
            >
              Twitter
            </Link>
            <Link
              fontSize={'xl'}
              py={1}
              fontWeight={'sm'}
              color={'grey'}
              href={'#'}
            >
              Instagram
            </Link>
            <Link
              fontSize={'xl'}
              py={1}
              fontWeight={'sm'}
              color={'grey'}
              href={'#'}
            >
              LinkedIn
            </Link>
          </Stack>
        </SimpleGrid>
        <Text py={5} color={'grey'} fontSize={'sm'} align={'center'}>
          © 2023 eGardener. All rights reserved. Developed By{' '}
          <a href="/">Mudasir Pandith</a>{' '}
        </Text>
      </Container>
    </Box>
  );
}
