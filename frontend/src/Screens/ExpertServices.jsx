import { CheckCircleIcon, StarIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Radio,
  RadioGroup,
  SimpleGrid,
  Spacer,
  Tag,
  Text,
  Textarea,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { PriceCard } from '../Components/PriceCard';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

export const ExpertPage = () => {
  const id = useParams('id').id;
  const dates = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  const [selectedSlot, setSelectedSlot] = useState('');
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedService, setSelectedService] = useState('');
  const [selectedMessage, setSelectedMessage] = useState('');
  const [appDone, setAppDone] = useState(false);
  const [message, setMessage] = useState('');
  const handleOptionChangeSlot = value => {
    setSelectedSlot(value);
  };
  const handleOptionChangeDate = value => {
    setSelectedDate(value.target.value);
  };
  const handleOptionChangeService = value => {
    setSelectedService(value);
  };
  const handleOptionChangeMessage = value => {
    setSelectedMessage(value.target.value);
  };
  const [data, setData] = useState([]);
  const form = {
    expertId: id,
    date: selectedDate,
    slot: selectedSlot,
    service: selectedService,
    message: selectedMessage,
  };
  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch('http://localhost:4000/add-appointment', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setMessage(data.message);
    if (res.status === 202) setAppDone(true);
  };

  const getUser = async () => {
    const res = await fetch('http://localhost:4000/get-expert/' + id, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
    });
    const data = await res.json();
    setData(data.expert);
  };

  useEffect(() => {
    !localStorage.getItem('experttoken') && window.location.replace('/expert');
    getUser();
  }, []);
  return (
    <>
      <SimpleGrid columns={useBreakpointValue({ md: 2, base: 1 })}>
        <VStack>
          <Image
            h={'400px'}
            src="https://www.yourfreecareertest.com/wp-content/uploads/2017/10/nursary_worker.jpg"
          />
          <HStack>
            <Text>Follow me :</Text>
            <Spacer />
            <FaInstagram color={'red'} fontSize={'20px'} />{' '}
            <FaFacebook color="blue" fontSize={'20px'} />{' '}
            <FaTwitter color="skyBlue" fontSize={'20px'} />
          </HStack>
        </VStack>

        <Box p={'10px'}>
          <HStack>
            <Heading>{data.name && data.name}</Heading>
            <Spacer />
            <Text>4.5</Text>
            <StarIcon />
          </HStack>

          <Text>{data.detail && data.detail}</Text>
          <Heading py={'10px'}>Services offered</Heading>
          <Flex flexWrap={'wrap'} gap={'10px'}>
            <PriceCard
              imageurl={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6dJshlzvGcijC3ScsR4ibvXls27McFNlaF-zAhsmD7g&s'
              }
              heading={'Maintance'}
              rate={'10'}
            />
            <PriceCard
              heading={'Landscaping'}
              rate={'12'}
              imageurl={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6dJshlzvGcijC3ScsR4ibvXls27McFNlaF-zAhsmD7g&s'
              }
            />
            <PriceCard
              imageurl={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6dJshlzvGcijC3ScsR4ibvXls27McFNlaF-zAhsmD7g&s'
              }
              heading={'Consultation'}
              rate={'6'}
            />
          </Flex>
          {appDone ? (
            <>
              <VStack p={'10px'} bg={'green.200'} my={'20px'}>
                <CheckCircleIcon color={'white'} fontSize={'60px'} />{' '}
                <Text>{message}</Text>
              </VStack>
            </>
          ) : (
            <>
              <Heading py={'10px'}>Hire Now</Heading>
              <Flex
                w={'350px'}
                flexDirection={'column'}
                as={'form'}
                onSubmit={handleSubmit}
                gap={'10px'}
                border={'1px solid green'}
                p={'10px'}
                borderRadius={'10px'}
                action=""
              >
                <Text>• Service</Text>
                <RadioGroup
                  flexDirection={'column'}
                  onChange={handleOptionChangeService}
                  value={selectedService}
                  aria-required
                >
                  <Radio value="Maintainance">Maintainance</Radio> <br />
                  <Radio value="Consultation">Consultation</Radio> <br />
                  <Radio value="Landscaping">Landscaping</Radio> <br />
                </RadioGroup>
                {selectedService && (
                  <Tag color={'green.400'}>
                    {' '}
                    <CheckCircleIcon />
                    {''} {selectedService}
                  </Tag>
                )}
                <Text>• Date</Text>
                <select
                  required
                  value={selectedDate}
                  onChange={handleOptionChangeDate}
                  style={{ border: '1px solid green', borderRadius: '5px' }}
                >
                  {dates.map(date => {
                    return (
                      <option key={date} value={date}>
                        {date}
                      </option>
                    );
                  })}
                </select>
                <Text>• Slot</Text>
                <RadioGroup
                  flexDirection={'column'}
                  onChange={handleOptionChangeSlot}
                  value={selectedSlot}
                  required
                >
                  <Radio value="10am - 12pm">10am - 12pm</Radio> <br />
                  <Radio value="2pm - 4pm">2pm - 4pm</Radio> <br />
                  <Radio value="5pm - 7pm">5pm - 7pm</Radio> <br />
                </RadioGroup>

                {selectedSlot && (
                  <Tag color={'green.400'}>
                    {' '}
                    <CheckCircleIcon /> {selectedSlot}
                  </Tag>
                )}
                <Text>• Message</Text>
                <Textarea
                  value={selectedMessage}
                  onChange={handleOptionChangeMessage}
                  required
                  placeholder="Write message here..."
                />
                <Button type="submit" bg={'green.800'} color={'white'}>
                  Submit
                </Button>
              </Flex>
            </>
          )}
        </Box>
      </SimpleGrid>
      <Heading py={'10px'}>Gallery</Heading>
      <Flex flexWrap={'wrap'} gap={'10px'} justifyContent={'space-evenly'}>
        <Image
          w={'300px'}
          src="https://www.yourfreecareertest.com/wp-content/uploads/2017/10/nursary_worker.jpg"
        />
        <Image
          w={'300px'}
          src="https://www.yourfreecareertest.com/wp-content/uploads/2017/10/nursary_worker.jpg"
        />
        <Image
          w={'300px'}
          src="https://www.yourfreecareertest.com/wp-content/uploads/2017/10/nursary_worker.jpg"
        />
        <Image
          w={'300px'}
          src="https://www.yourfreecareertest.com/wp-content/uploads/2017/10/nursary_worker.jpg"
        />
        <Image
          w={'300px'}
          src="https://www.yourfreecareertest.com/wp-content/uploads/2017/10/nursary_worker.jpg"
        />
        <Image
          w={'300px'}
          src="https://www.yourfreecareertest.com/wp-content/uploads/2017/10/nursary_worker.jpg"
        />
        <Image
          w={'300px'}
          src="https://www.yourfreecareertest.com/wp-content/uploads/2017/10/nursary_worker.jpg"
        />
        <Image
          w={'300px'}
          src="https://www.yourfreecareertest.com/wp-content/uploads/2017/10/nursary_worker.jpg"
        />
      </Flex>
    </>
  );
};
