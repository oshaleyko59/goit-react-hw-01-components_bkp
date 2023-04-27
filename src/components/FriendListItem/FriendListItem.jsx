import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({id, avatar, name, isOnline}) => {
  return (
    <li className={css.item}>
      <span
        className={css.status}
        style={
          isOnline ? { backgroundColor: 'green' } : { backgroundColor: 'red' }
        }
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  )
};

FriendListItem.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool
};
