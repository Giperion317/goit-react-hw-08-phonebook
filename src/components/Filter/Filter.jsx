import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlise';

import { FilterLable, FilterInput } from "./Filter.styled"

export const Filter = () => {
  const dispatch = useDispatch();

  const chengeFilter = (event) => {
    dispatch(setFilter(event.target.value))
  }
  return(
    <FilterLable>Find contacts by name
        <FilterInput type="text" onChange={chengeFilter} />
    </FilterLable>
)}
