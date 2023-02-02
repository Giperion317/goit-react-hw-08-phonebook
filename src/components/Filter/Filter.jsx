import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlise';
import { FormLabel, Input } from '@chakra-ui/react';

// import { FilterLable, FilterInput } from "./Filter.styled"

export const Filter = () => {
  const dispatch = useDispatch();

  const chengeFilter = event => {
    dispatch(setFilter(event.target.value));
  };
  return (
    <FormLabel
      fontFamily="cursive"
      fontSize="md"
      fontWeight="semibold"
      color="purple.800"
      textAlign="center"
      maxWidth="300px"
      mt="10"
    >
      Find contacts by name
      <Input
        border="1px"
        borderColor="purple.300"
        focusBorderColor="purple.400"
        mt="2"
        errorBorderColor="crimson"
        bg="blackAlpha.200"
        type="text"
        onChange={chengeFilter}
      />
    </FormLabel>
  );
};
