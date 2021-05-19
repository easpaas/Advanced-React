import PropTypes from 'prop-types';

export default function Page({ title, children }) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};
