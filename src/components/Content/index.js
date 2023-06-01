import React from "react";
import { userContext } from "../../context/UserContext";
import { allProductList } from "../../context/ProductContext";
import { useNavigate } from "react-router-dom";
import ItemCard from "../ItemCard";

function Content() {
  const { userData, deleteUser } = userContext();
  const { productList,deleteProduct } = allProductList();
  // const { editUser } = userList();
  const navigate = useNavigate();

  return (
    <div className="content">
      <section className="content-2">
        {productList.map((item) => (
          <React.Fragment key = {item.id}>
            <ItemCard name={item.product_name}
             id={item.id}
             onEdit={()=>navigate(`/product/${item.id}`)}
             onDelete={()=>deleteProduct(item.id)} />
          </React.Fragment>
        ))}
      </section>
      <section className="content-2">
        {userData.map((item) => (
          <React.Fragment key = {item.id}>
            <ItemCard
              name={item.fullname}
              id={item.id}
              onEdit={() => navigate(`/user/${item.id}`)}
              onDelete={() => deleteUser(item.id)}
            />
          </React.Fragment>
        ))}
      </section>
    </div>
  );
}

export default Content;
