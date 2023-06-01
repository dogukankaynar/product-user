import { useEffect, useState } from "react";
import { allProductList } from "../../context/ProductContext";
import { useParams, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import validationSchema from "../../components/FormComponent/productValidation";
import Input from "../../components/FormComponent/input";
import Button from "../../components/FormComponent/button";

function Product() {
  const { productList, addProduct, editProduct } = allProductList();
  const { id } = useParams();
  const navigate = useNavigate();

  const [edit, setEdit] = useState(false);

  const [initialValues, setInitialValues] = useState({
    id: new Date().getTime(),
    product_name: "",
    price: "",
  });

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues,
      onSubmit: (values) => {
        console.log(values);
        handleProduct(values);
      },
      enableReinitialize: true,
      validationSchema,
    });

  useEffect(() => {
    if (id) {
      setEdit(true);
      const currentProduct = productList.find(
        (product) => product.id.toString() === id.toString()
      );
      setInitialValues(currentProduct);
      console.log("currentProduct", currentProduct);
    }
  }, [id]);

  console.log("edit", edit);
  console.log("id", id);
  const handleProduct = (values) => {
    edit
      ? editProduct({
          id: values.id,
          product_name: values.product_name,
          price: values.price,
        })
      : addProduct({
          id: values.id,
          product_name: values.product_name,
          price: values.price,
        });
        navigate("/");

  };

  return (
    <div className="user-page">
      <div className="user-page-content">
        <h1>Add Product Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex-column">
            <label>Product name</label>
            <Input
              classname={"form-input"}
              name={"product_name"}
              id={values.id}
              value={values.product_name}
              onchange={handleChange}
              onblur={handleBlur}
            />
            {errors.product_name && touched.product_name && (
              <div className="error-message">{errors.product_name}</div>
            )}
          </div>
          <div className="flex-column">
            <label>Product Price</label>
            <Input
              classname={"form-input"}
              name={"price"}
              id={values.id}
              value={values.price}
              onchange={handleChange}
              onblur={handleBlur}
            />
            {errors.price && touched.price && (
              <div className="error-message">{errors.price}</div>
            )}
          </div>

          <br />
          <Button type={"submit"} classname={"button"} />
        </form>
      </div>
    </div>
  );
}

export default Product;
