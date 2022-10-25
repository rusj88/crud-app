import { useRef } from "react";

const CreateForm = ({ handleOnChange, handleCreate }) => {
  const form = useRef(null);

  const createProduct = (e) => {
    e.preventDefault();
    handleCreate();
    form.current.reset();
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
