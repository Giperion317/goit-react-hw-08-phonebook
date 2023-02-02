import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operation';
import { UpdateForm } from 'components/UpdateForm/UpdateForm';
import {
  Card,
  Avatar,
  ListItem,
  IconButton,
  CardBody,
  CardFooter,
  Text,
  Flex,
  Box,
} from '@chakra-ui/react';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin2Fill } from 'react-icons/ri';

export const ContactItem = (
  { id, name, number },
  showUpdateForm,
  userToUpdate,
  clousForm
) => {
  const dispatch = useDispatch();
  return (
    <ListItem key={id}>
      <Card overflow="hidden" variant="outline" boxShadow="lg">
        <CardBody
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexDirection={['column', 'column', null, 'row', null]}
          gap="3"
        >
          <Avatar name={name} size="sm" />
          <Box display="block">
            <Flex alignItems="baseline" gap="1">
              <Text
                fontFamily="cursive"
                fontSize="sm"
                fontWeight="semibold"
                color="purple.800"
              >
                Name:
              </Text>
              <Text
                fontFamily="cursive"
                fontSize="sm"
                fontWeight="semibold"
                color="pink.800"
              >
                {name}
              </Text>
            </Flex>
            <Flex alignItems="baseline" gap="1">
              <Text
                fontFamily="cursive"
                fontSize="sm"
                fontWeight="semibold"
                color="purple.800"
              >
                Phone:
              </Text>
              <Text
                fontFamily="cursive"
                fontSize="sm"
                fontWeight="semibold"
                color="pink.800"
              >
                {number}
              </Text>
            </Flex>
          </Box>
          <Flex alignItems="center" gap="1">
            <IconButton
              aria-label="Update contact"
              icon={<FaEdit size="25px" />}
              color="purple.800"
              _hover={{ color: 'pink.600' }}
              variant="outline"
              border="none"
              type="button"
              onClick={() => showUpdateForm(id)}
            />
            <IconButton
              aria-label="Delete contact"
              icon={<RiDeleteBin2Fill size="25px" />}
              color="purple.800"
              _hover={{ color: 'pink.600' }}
              variant="outline"
              border="none"
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            />
          </Flex>
        </CardBody>
        {userToUpdate && userToUpdate.id === id && (
          <CardFooter>
            <UpdateForm userToUpdate={userToUpdate} clousForm={clousForm} />
          </CardFooter>
        )}
      </Card>
    </ListItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  showUpdateForm: PropTypes.func.isRequired,
  userToUpdate: PropTypes.func.isRequired,
  clousForm: PropTypes.func.isRequired,
};
