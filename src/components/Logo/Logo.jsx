import { FaRegAddressBook } from 'react-icons/fa';
import { Icon } from '@chakra-ui/react';
import { Heading, Flex } from '@chakra-ui/react';

export const Logo = () => {
  return (
    <Flex alignItems="center" gap='2'>
      <Icon as={FaRegAddressBook} w={9} h={9} color='purple.600'/>
      <Heading as="h1" bgGradient="linear(to-l, purple.600, pink.600)" bgClip='text' fontFamily='cursive' fontSize='5xl'>Phonebook</Heading>
    </Flex>
  );
};
