import PropTypes from "prop-types";

export const ingItem = PropTypes.shape({
  calories: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  proteins: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  __v: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired,
});

export const ingredientPropType = PropTypes.shape({
  ingredients: PropTypes.arrayOf(ingItem).isRequired,
  ingType: PropTypes.string.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
  changeModal: PropTypes.func.isRequired,
});
