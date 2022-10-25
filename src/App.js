import { useState } from "react";
import "./App.css";
import { nutrition } from "./data";
import CreateForm from "./components/CreateForm";
import TableRow from "./components/TableRow";
import TableHeader from "./components/TableHeader";

const App = () => {
  const [data, setData] = useState(nutrition);

  const handleCreate = (productData) => {
    setData([...data, { ...productData, id: Date.now() }]);
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
      <CreateForm handleCreate={handleCreate} />
    </div>
  );
};

export default App;
