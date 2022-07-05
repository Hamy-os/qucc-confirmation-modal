import { useState, useRef } from "react";
import "./App.css";
import Dialog from "./components/Dialog";

const data = [
  {
    id: 1,
    name: "IphoneX",
    img:
      "https://didongviet.vn/pub/media/catalog/product//i/p/iphone-x-mau-xam-didongviet.jpg"
  }
];

export default function App() {
  const [products, setProducts] = useState(data);
  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
    nameProduct: ""
  });
  const idProductRef = useRef();
  const handleDialog = (message, isLoading, nameProduct) => {
    setDialog({
      message,
      isLoading,
      nameProduct
    });
  };

  const handleDelete = (id) => {
    const index = data.findIndex((p) => p.id === id);
    handleDialog("Are you sure you want to delete?", true, data[index].name);
    idProductRef.current = id;
  };

  const areUSureDelete = (choose) => {
    if (choose) {
      setProducts(products.filter((p) => p.id !== idProductRef.current));
      alert("deleted.")
      handleDialog("", false);
    } else {
      alert("not deleted.")
      handleDialog("", false);
    }
  };
  return (
    <div className="App">
      {products.map((p) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <h3>{p.name}</h3>
          <img
            style={{ objectFit: "cover", width: "100px", height: "100px" }}
            src={p.img}
            alt={p.name}
          />
          <button
            onClick={() => handleDelete(p.id)}
            style={{
              marginTop: "10px",
              background: "red",
              fontWeight: "bolder",
              border: "none",
              padding: "8px",
              cursor: "pointer",
              color: "white",
              borderRadius: "8px"
            }}
          >
            Delete
          </button>
        </div>
      ))}
      {dialog.isLoading && (
          <Dialog
          nameProduct={dialog.nameProduct}
          onDialog={areUSureDelete}
          message={dialog.message}
        />
        
      )}
    </div>
  );
}
