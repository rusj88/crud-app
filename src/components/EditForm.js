import { useState } from "react";

const EditForm = ({ product, toggleEdit, handleUpdate }) => {
  const [formData, setFormData] = useState(product);
  const handleOnChange = (e) => {
    const inputValue = e.target.value;
    const inputField = e.target.name;
    setFormData({ ...formData, [inputField]: inputValue });
  };

  const updateProduct = (e, product) => {
    e.preventDefault();
    handleUpdate(product);
    toggleEdit(e);
  };

  return (
    <form>
      <div className="table-row">
        <div className="cell">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleOnChange}
          />
        </div>
        <div className="cell">
          <input
            type="text"
            name="calories"
            value={formData.calories}
            onChange={handleOnChange}
          />
        </div>
        <div className="cell">
          <input
            type="text"
            name="carbohydrate"
            value={formData.carbohydrate}
            onChange={handleOnChange}
          />
        </div>
        <div className="cell">
          <input
            type="text"
            name="fat"
            value={formData.fat}
            onChange={handleOnChange}
          />
        </div>
        <div className="cell">
          <input
            type="text"
            name="protein"
            value={formData.protein}
            onChange={handleOnChange}
          />
        </div>
        <div className="cell">
          <button onClick={(e) => updateProduct(e, formData)}>
            <i className="fa fa-check"></i>
          </button>
          <button onClick={toggleEdit}>
            <i className="fa fa-times"></i>
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditForm;
