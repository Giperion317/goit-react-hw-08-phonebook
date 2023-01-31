import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auht/auth-selector';

export const Navigation = () => {
  const token = useSelector(selectToken);
  return (
    <nav>
      <ul>
        {token ? (
          <li>
            <NavLink to="contacts">Contacts</NavLink>
          </li>
        ) : (
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
