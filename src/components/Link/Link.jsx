import PropTypes from "prop-types";

const Link = ({ route }) => {
  return (
    <li className="mr-8 hover:bg-red-800 px-5 text-red">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};
Link.propTypes = {
  route: PropTypes.object,
};
export default Link;
