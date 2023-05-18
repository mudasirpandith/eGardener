import { HStack, Heading, Image, Tag, Text } from '@chakra-ui/react';
import React from 'react';

export const ExpertCard = props => {
  const expert = props.expert;
  return (
    <>
      <HStack flexDirection={'column'} alignItems={'center'} w={'330px'}>
        <Text
          bg={'red'}
          display={'flex'}
          alignSelf={'flex-start'}
          zIndex={1}
          ml={'19px'}
          mb={'-24px'}
          color={'white'}
          p={'5px'}
          fontSize={'10px'}
          borderTopLeftRadius={'10px'}
        >
          Top rated
        </Text>
        <Image
          borderRadius={'10px'}
          w={'300px'}
          h={'150px'}
          src="https://www.yourfreecareertest.com/wp-content/uploads/2017/10/nursary_worker.jpg"
        />
        <Heading fontSize={'20px'}>{expert.name}</Heading>
        <HStack py={'10px'}>
          <Tag bg={'green.200'}>Consultation</Tag>
          <Tag bg={'green.200'}>Landscaping</Tag>
          <Tag bg={'green.200'}>Maintainance</Tag>
        </HStack>
      </HStack>
    </>
  );
};
