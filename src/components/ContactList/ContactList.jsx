export const ContactList = ({ contacts, deleteContact }) => (
    <ul>
        {contacts.map(({id, name, number}) => {
            return (
                <li key={id}>
                    <p>{name}:<span>{number}</span></p>
                    <button type="button" onClick={()=>deleteContact(id)}>Delete</button>
        </li>
        )})}
    </ul>
)