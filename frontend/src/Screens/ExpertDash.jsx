import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { ServiceCard } from '../Components/serviceCard';

export const ExpertDash = () => {
  const [data, setData] = useState([]);
  const [apps, setApps] = useState([]);
  const getUser = async () => {
    const res = await fetch('http://localhost:4000/expert-profile', {
      method: 'Get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('experttoken'),
      },
    });
    const data = await res.json();
    setData(data.user);
    setApps(data.apps);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    data.name && (
      <>
        <Box>
          <Heading p={'10px'}>Dashboard</Heading>
          <Box p={'10px'}>
            <Text>Name :{data.name}</Text>
            <Text>Email : {data.email}</Text>
          </Box>
        </Box>
        <Heading p={'10px'} fontWeight={'500'}>
          {' '}
          My Appoitments
        </Heading>
        <Flex flexWrap={'wrap'} gap={'10px'} m={'10px'}>
          {apps
            .slice()
            .reverse()
            .map((app, index) => {
              return (
                <React.Fragment key={index}>
                  <ServiceCard app={app} />
                </React.Fragment>
              );
            })}
        </Flex>
      </>
    )
  );
};
