import { HStack, Heading } from '@chakra-ui/react';
import { ExpertCard } from '../Components/ExpertCard';
import React, { useEffect, useState } from 'react';

export const Professionals = () => {
  const [experts, setData] = useState([]);
  const getExperts = async () => {
    const res = await fetch('http://localhost:4000/getAllExperts', {
      method: 'GET',
    });
    const data = await res.json();
    setData(data);
  };
  useEffect(() => {
    getExperts();
  }, []);
  return (
    <>
      <Heading p={'20px'}>Experts</Heading>
      <HStack gap={'10px'} flexWrap={'wrap'}>
        {experts &&
          experts.map(expert => {
            const url = '/expert/' + expert._id;
            return (
              <>
                {' '}
                <a href={url}>
                  {' '}
                  <ExpertCard expert={expert} />{' '}
                </a>{' '}
              </>
            );
          })}
      </HStack>
    </>
  );
};
