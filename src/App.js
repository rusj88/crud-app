import { useState } from "react";
import "./App.css";
import { nutrition } from "./data";
import CreateForm from "./components/CreateForm";
import TableRow from "./components/TableRow";
import TableHeader from "./components/TableHeader";

const App = () => {
  const [data, setData] = useState(nutrition);
  const [formData, setFormData] = useState({
    name: "",
    calories: "",
    carbohydrate: "",
    fat: "",
    protein: "",
  });

  const handleOnChange = (e) => {
    const inputValue = e.target.value;
    const inputField = e.target.name;
    setFormData({ ...formData, [inputField]: inputValue });
  };

  const handleCreate = () => {
    setData([...data, { ...formData, id: Date.now() }]);
    setFormData({
      name: "",
      calories: "",
      carbohydrate: "",
      fat: "",
      protein: "",
    });
  };

  const handleUpdate = (product) => {
    const newData = data.map((ele) => (ele.id === product.id ? product : ele));
    setData(newData);
  };

  const handleRemove = (product) => {
    const newData = data.filter((ele) => {
      return ele.id !== product.id;
    });
    setData(newData);
  };

  return (
    <div className="App">
      <div className="table-container">
        <TableHeader />
        {data.map((product) => {
          return (
            <TableRow
              product={product}
              key={product.id}
              handleUpdate={handleUpdate}
              handleRemove={handleRemove}
            />
          );
        })}
      </div>
      <hr></hr>
      <CreateForm handleOnChange={handleOnChange} handleCreate={handleCreate} />
    </div>
  );
};

export default App;
