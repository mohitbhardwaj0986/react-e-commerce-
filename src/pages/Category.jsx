import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";

function Category() {
  const products = useSelector((state) => state.products);
  const [electronics, setElectronics] = useState([]);
  const [furniture, setFurniture] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [miscellaneous, setMiscellaneous] = useState([]);
  const [nuevo, setNuevo] = useState([]);

  useEffect(() => {
  
    const electronicsArr = [];
    const furnitureArr = [];
    const shoesArr = [];
    const miscellaneousArr = [];
    const nuevoArr = [];

     
    products.forEach((element) => {
      switch (element.category.name) {
        case "Electronics":
          electronicsArr.push(element);
          break;
        case "Furniture":
          furnitureArr.push(element);
          break;
        case "Shoes":
          shoesArr.push(element);
          break;
        case "Miscellaneous":
          miscellaneousArr.push(element);
          break;
        default:
          nuevoArr.push(element);
      }
    });

  
    setElectronics(electronicsArr);
    setFurniture(furnitureArr);
    setShoes(shoesArr);
    setMiscellaneous(miscellaneousArr);
    setNuevo(nuevoArr);
  }, [products]);

  return (
    <div>
      <h1 className="text-xl font-semibold mt-4">Electronics</h1>
      <hr />
      <div className="flex flex-wrap gap-2 justify-center">
        {electronics.length > 0 &&
          electronics.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              images={item.images}
            />
          ))}
      </div>
      <h1 className="text-xl font-semibold mt-4">Furniture</h1>
      <hr />
      <div className="flex gap-2 flex-wrap justify-center">
        {furniture.length > 0 &&
          furniture.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              images={item.images}
            />
          ))}
      </div>
      <h1 className="text-xl font-semibold mt-4">Shoes</h1>
      <hr />
      <div className="flex gap-2 flex-wrap justify-center">
        {shoes.length > 0 &&
          shoes.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              images={item.images}
            />
          ))}
      </div>
      <h1 className="text-xl font-semibold mt-4">Miscellaneous</h1>
      <hr />
      <div className="flex gap-2 flex-wrap justify-center">
        {miscellaneous.length > 0 &&
          miscellaneous.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              images={item.images}
            />
          ))}
      </div>
      <h1 className="text-xl font-semibold mt-4">Nuevo</h1>
      <hr />
      <div className="flex gap-2 flex-wrap justify-center">
        {nuevo.length > 0 &&
          nuevo.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              images={item.images}
            />
          ))}
      </div>
    </div>
  );
}

export default Category;
