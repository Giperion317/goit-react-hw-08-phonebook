export const ContactItem = ({ id, name, number }, deleteContact) => (
  <li key={id}>
    <p>
      {name}:<span>{number}</span>
    </p>
    <button type="button" onClick={() => deleteContact(id)}>
      Delete
    </button>
  </li>)

