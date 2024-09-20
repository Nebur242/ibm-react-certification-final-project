import PropTypes from "prop-types";
import Header from "./header";

const Page = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
