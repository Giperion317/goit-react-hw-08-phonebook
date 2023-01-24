import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auht/auth-operations';
import { selectEmail } from 'redux/auht/auth-selector';

export const UserAuthMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectEmail);
  return (
    <div>
      <p>Welcome, {email}</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};
