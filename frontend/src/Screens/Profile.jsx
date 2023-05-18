import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Profile = () => {
  const [data, setData] = useState([]);
  const [apps, setApps] = useState([]);
  const getUser = async () => {
    const res = await fetch('http://localhost:4000/getuser', {
      method: 'Get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
    });
    const data = await res.json();
    setData(data.user);
    setApps(data.apps);
  };

  useEffect(() => {
    getUser();
  }, []);
  const colorBtn = {
    pending: 'blue',
    confirm: 'orange',
    cancelled: 'red',
    done: 'green',
  };
  return (
    data.name && (
      <>
        <Box>
          <Heading p={'10px'}>My Profile</Heading>
          <Box p={'10px'}>
            <Text>Name: {data.name}</Text>
            <Text>Email : {data.email}</Text>{' '}
            <Text>Phone Number : {data.phoneNumber}</Text>
          </Box>

          <Heading p={'10px'}>My Appointments</Heading>
          <Flex flexWrap={'wrap'} gap={'10px'} m={'10px'}>
            {apps
              .slice()
              .reverse()
              .map((app, index) => {
                return (
                  <Box
                    key={index}
                    p={'10px'}
                    w={'350px'}
                    border={'1px solid green'}
                  >
                    <Text>Date: {app.date}th of this month</Text>
                    <Text>Slot: {app.slot}</Text>
                    <Text>Service selected: {app.service}</Text>
                    <Text>Message :{app.message}</Text>
                    <Link to={`/expert/${app.expertId[0]._id}`}>
                      <Text color={'blue.600'}>
                        Expert : {app.expertId[0].name}
                      </Text>
                    </Link>

                    <Button
                      h={'25px'}
                      color={'white'}
                      bg={colorBtn[app.status]}
                    >
                      {app.status}
                    </Button>
                  </Box>
                );
              })}
          </Flex>
        </Box>
      </>
    )
  );
};
