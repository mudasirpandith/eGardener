import {
  Container,
  Heading,
  Image,
  Input,
  Text,
  SimpleGrid,
  Stack,
  Center,
  useBreakpointValue,
  Button,
  HStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
export const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }
  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('http://localhost:4000/signin', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify(form),
    });
    const data = await res.json();

    if (res.status === 200) {
      localStorage.setItem('token', data.token);
      window.location.replace('/');
    }
  };
  useEffect(() => {
    localStorage.getItem('token') && window.location.replace('/');
  });
  return (
    <>
      <Container maxW={'full'} bg={'#F7F7F7'}>
        <SimpleGrid columns={{ md: 2, base: 1 }} spacing={10}>
          <Stack align={'center'} p={10} d={'flex'}>
            <Heading color={'green.800'}>WELCOME BACK</Heading>
            <Image
              w={350}
              src={
                'https://garden.qtcmedia.com/html/images/index/latest-services-3.jpg'
              }
              py={5}
            />
            <Text color={'green.800'} fontWeight={700}>
              LETS GET STARTED
            </Text>
          </Stack>
          <Stack
            align={'center'}
            bg={'green.800'}
            py={20}
            borderRadius={useBreakpointValue({
              md: '100% 0% 100% 0% / 21% 76% 24% 79%',
              base: '100% 0% 100% 0% / 11% 81% 19% 89% ',
            })}
          >
            <Heading fontSize={'30px'} color={'white'} py={2}>
              LOGIN YOUR ACCOUNT
            </Heading>
            <Center
              bg={'white'}
              flexDirection={'column'}
              w={useBreakpointValue({ md: '350px', base: '300px' })}
              borderRadius={15}
              gap={3}
              as="form"
              onSubmit={handleSubmit}
              py={10}
              px={4}
            >
              <Input
                name="email"
                value={form.email}
                onChange={handleChange}
                variant="flushed"
                placeholder="Email/Phone Numner"
                p={3}
              />

              <Input
                name="password"
                value={form.password}
                onChange={handleChange}
                variant="flushed"
                placeholder="Password"
                p={3}
              />
              <Text align={'left'} fontWeight={500} color={'blue.800'}>
                Forget Password?
              </Text>
              <Button type="submit" bg={'green.800'} color={'white'}>
                Sign In
              </Button>
              <Text>OR</Text>
              <HStack display={'flex'} spacing={10}>
                <Image
                  h={10}
                  src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                />
                <Image
                  h={8}
                  src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
                />
                <Image
                  h={6}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
                />
              </HStack>
              <Text>Don`t Have An Account?</Text>
              <a href="/signup">
                <Button color={'rgba(89, 41, 105, 1)'}>SIGN UP</Button>
              </a>
            </Center>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
};
