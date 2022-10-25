import { useState } from "react";
import EditForm from "./EditForm";

const TableRow = ({ product, handleUpdate, handleRemove }) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
  };

  const removeProduct = (e, product) => {
    e.preventDefault();
    handleRemove(product);
  };

  return !isEditing ? (
    <div className="table-row" key={product.name}>
      <div className="cell">{product.name}</div>
      <div className="cell">{product.calories}</div>
      <div className="cell">{product.carbohydrate}</div>
      <div className="cell">{product.fat}</div>
      <div className="cell">{product.protein}</div>
      <div className="cell">
        <button onClick={toggleEdit}>
          <i className="fa fa-pencil"></i>{" "}
        </button>
        <button onClick={(e) => removeProduct(e, product)}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </div>
  ) : (
    <EditForm
      product={product}
      toggleEdit={toggleEdit}
      handleUpdate={handleUpdate}
      handleRemove={handleRemove}
    />
  );
};

export default TableRow;
