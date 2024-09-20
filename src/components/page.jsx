import PropTypes from "prop-types";
import Header from "./header";

const Page = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
