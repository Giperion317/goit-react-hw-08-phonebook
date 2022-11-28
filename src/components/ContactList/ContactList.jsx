export const ContactList = ({ contacts }) => (
    <ul>
        {contacts.map(({id, name, number}) => {
            return (
                <li key={id}>
                    <p>{name}:<span>{number}</span></p>
                    <button type="button">Delete</button>
        </li>
        )})}
    </ul>
)