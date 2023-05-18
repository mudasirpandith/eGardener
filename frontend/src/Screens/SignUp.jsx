import {
  Container,
  Heading,
  Image,
  Input,
  Text,
  SimpleGrid,
  Stack,
  Box,
  Center,
  useBreakpointValue,
  Button,
  HStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
export const SignUp = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }
  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (res.status === 202) {
      localStorage.setItem('token', data.token);
      window.location.replace('/');
    }
  };
  useEffect(() => {
    localStorage.getItem('token') && window.location.replace('/');
  });
  return (
    <>
      <Container maxW={'full'}>
        <SimpleGrid columns={{ md: 2, base: 1 }} spacing={10}>
          <Stack align={'center'} py={20} d={'flex'}>
            <Heading color={'green.800'}>
              WELCOME TO{' '}
              <Box color={'white'} bg={'green.800'} as={'span'}>
                eGardener
              </Box>
            </Heading>
            <Image
              w={350}
              src={'https://garden.qtcmedia.com/html/images/index/videos-1.jpg'}
              py={5}
            />
            <Text color={'rgba(89, 41, 105, 1)'} fontWeight={700}>
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
              CREATE AN ACCOUNT
            </Heading>
            <Center
              bg={'white'}
              flexDirection={'column'}
              w={useBreakpointValue({ md: '400px', base: '300px' })}
              borderRadius={15}
              gap={3}
              as="form"
              p={5}
              onSubmit={handleSubmit}
            >
              <Input
                onChange={handleChange}
                name="name"
                variant="flushed"
                required
                placeholder="Name"
                value={form.name}
                p={3}
              />
              <Input
                onChange={handleChange}
                name="email"
                variant="flushed"
                required
                placeholder="Email Address"
                value={form.email}
                p={3}
              />
              <Input
                onChange={handleChange}
                name="phoneNumber"
                variant="flushed"
                required
                placeholder="Phone Number"
                value={form.phoneNumber}
                p={3}
              />
              <Input
                variant="flushed"
                placeholder="Password"
                type="password"
                required
                onChange={handleChange}
                name="password"
                value={form.password}
                p={3}
              />
              <Input
                variant="flushed"
                placeholder="Confirm Password"
                type="password"
                p={3}
              />

              <Button type="submit" bg={'green.800'} color={'white'}>
                Sign Up
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
              <Text>Already Have An Account?</Text>
              <a href="/signin">
                <Button color={'rgba(89, 41, 105, 1)'}>SIGN IN</Button>
              </a>
            </Center>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
};
