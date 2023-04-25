import PropTypes from 'prop-types';
import css from './Description.module.css';
import defaultAvatar from 'defaultAvatar.png';

export const Description = ({
  username,
  tag,
  location = 'Unknown',
  avatar,
}) => (
  <div className={css.description}>
    <img
      src={avatar || defaultAvatar}
      alt={username + ' avatar'} width="180px"
      className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>
);

Description.propTypes = {
  avatar: PropTypes.string,
  tag: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  location: PropTypes.string,
};
