
import { FilterLable, FilterInput } from "./Filter.styled"

export const Filter = ({ value, onChange }) => (
    <FilterLable>Find contacts by name
        <FilterInput type="text" value={value} onChange={onChange} />
    </FilterLable>
)