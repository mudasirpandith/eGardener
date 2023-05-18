import {
  Box,
  Button,
  HStack,
  Heading,
  Radio,
  RadioGroup,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';

export const ServiceCard = props => {
  const app = props.app;
  const [change, setChange] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedStatus, setSelecteselectedStatus] = useState('');

  const handleOptionChangeStatus = value => {
    setSelecteselectedStatus(value);
  };

  const colorBtn = {
    pending: 'blue.400',
    confirm: 'orange',
    cancelled: 'red',
    done: 'green',
  };
  async function handleStatusChange() {
    setLoading(1);
    const body = {
      id: app._id,
      status: selectedStatus,
    };

    const res = await fetch('http://localhost:4000/confirm-app', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('experttoken'),
      },
      body: JSON.stringify(body),
    });

    if (res.status === 200) window.location.reload();
  }

  return (
    <React.Fragment>
      <Box
        border={'1px solid green'}
        p={'10px'}
        w={'350px'}
        flexDirection={'row'}
      >
        <HStack>
          <Heading fontSize={'20px'}>Service: </Heading>
          <Text>{app.service}</Text>
        </HStack>
        <HStack>
          <Heading fontSize={'20px'}>Date: </Heading>
          <Text>{app.date}th of this month</Text>
        </HStack>
        <HStack>
          <Heading fontSize={'20px'}>Slot: </Heading>
          <Text>{app.slot}</Text>
        </HStack>{' '}
        <HStack>
          <Heading fontSize={'20px'}>Message: </Heading>
          <Text>{app.message}</Text>
        </HStack>{' '}
        <HStack>
          <Heading fontSize={'20px'}>Status: </Heading>
          <Button
            name="id"
            h={'20px'}
            color={'white'}
            bg={colorBtn[app.status]}
          >
            {app.status}
          </Button>
        </HStack>
        <Box>
          <Text
            onClick={() => {
              setChange(!change);
            }}
            color={'blue.600'}
            fontSize={'14px'}
            cursor={'pointer'}
          >
            Change Status
          </Text>

          {change && (
            <Box>
              <RadioGroup
                flexDirection={'column'}
                onChange={handleOptionChangeStatus}
                value={selectedStatus}
                aria-required
              >
                <Radio value="pending">pending</Radio> <br />
                <Radio value="confirm">confirm</Radio> <br />
                <Radio value="cancelled">cancelled</Radio> <br />
                <Radio value="done">done</Radio> <br />
              </RadioGroup>
              <Button isLoading={loading} onClick={handleStatusChange}>
                Done
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </React.Fragment>
  );
};
