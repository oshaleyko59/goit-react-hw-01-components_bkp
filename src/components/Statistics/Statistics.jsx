import PropTypes from 'prop-types';
import css from './Statistics.module.css';

let colors = {};

function getBackgroundColor(id) {
  let color = colors[id];
  if (!color) {
    color = `rgb(${Math.floor(Math.random() * 196)}, ${Math.floor(
      Math.random() * 196
    )}, ${Math.floor(Math.random() * 196)})`;
    colors[id] = color;
  }
  return color;
}

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li className={css.item} key={id} style={{backgroundColor: getBackgroundColor(id)}}>
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          )
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape),
};
