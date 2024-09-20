import PropTypes from "prop-types";

const Card = ({ plant, buttonDisabled, onButtonClick = () => {} }) => {
  return (
    <div className=" bg-white py-6 px-8 flex flex-col items-center rounded relative overflow-hidden">
      {plant.sale && (
        <p className="bg-red-500 text-white absolute top-0 right-0 px-4 uppercase">
          Sale
        </p>
      )}

      <h3 className="text-lg mb-4 capitalize">{plant.title}</h3>
      <img className="object-cover" src={plant.image_url} alt="snake plant" />
      <p className="text-red-500 text-xl my-2">${plant.price}</p>
      <p className="text-center mb-4 italic">{plant.description}</p>

      <button
        disabled={buttonDisabled}
        onClick={() => onButtonClick(plant)}
        className={`px-5 py-3 hover:opacity-80 text-md rounded text-white ${
          buttonDisabled ? "bg-gray-300" : "bg-primary "
        }`}
      >
        {`${buttonDisabled ? "Added" : "Add"} to Cart`}
      </button>
    </div>
  );
};

Card.propTypes = {
  plant: {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image_url: PropTypes.string.isRequired,
    sale: PropTypes.bool.isRequired,
  },
  onButtonClick: PropTypes.func,
  buttonDisabled: PropTypes.bool.isRequired,
};

export default Card;
