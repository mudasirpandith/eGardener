import { SettingsIcon } from '@chakra-ui/icons';
import { VStack, Heading, Text, Image } from '@chakra-ui/react';
import React from 'react';

export const PriceCard = props => {
  return (
    <>
      <VStack
        p={'10px'}
        color={'green'}
        border={'1px green solid'}
        borderRadius={'10px'}
      >
        <Image src={props.imageurl} />
        <Heading fontSize={'15px'}>{props.heading}</Heading>
        <Text fontSize={'30px'}>${props.rate}/hr</Text>
      </VStack>
    </>
  );
};
