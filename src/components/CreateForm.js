import { useState, useRef } from "react";

const CreateForm = ({ handleCreate }) => {
  const [formData, setFormData] = useState({
    name: "",
    calories: "",
    carbohydrate: "",
    fat: "",
    protein: "",
  });
  const form = useRef(null);

  const handleOnChange = (e) => {
    const inputValue = e.target.value;
    const inputField = e.target.name;
    setFormData({ ...formData, [inputField]: inputValue });
  };

  const createProduct = (e) => {
    if (formData.name !== "") {
      e.preventDefault();
      handleCreate(formData);
      setFormData({
        name: "",
        calories: "",
        carbohydrate: "",
        fat: "",
        protein: "",
      });
      form.current.reset();
    }
  };

  return (
    <div className="table-container">
      <form ref={form}>
        <div className="table-row">
          <div className="cell">
            <input type="text" name="name" required onChange={handleOnChange} />
          </div>
          <div className="cell">
            <input type="text" name="calories" onChange={handleOnChange} />
          </div>
          <div className="cell">
            <input type="text" name="carbohydrate" onChange={handleOnChange} />
          </div>
          <div className="cell">
            <input type="text" name="fat" onChange={handleOnChange} />
          </div>
          <div className="cell">
            <input type="text" name="protein" onChange={handleOnChange} />
          </div>
          <div className="cell">
            <button type="submit" onClick={createProduct}>
              ADD
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
