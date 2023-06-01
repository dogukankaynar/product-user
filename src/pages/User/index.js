import { useEffect, useState } from "react";
import { userContext } from "../../context/UserContext";
import Input from "../../components/FormComponent/input";
import Button from "../../components/FormComponent/button";
import { useFormik } from "formik";
import validationSchema from "../../components/FormComponent/validation";
import { useParams, useNavigate } from "react-router-dom";

function User() {
  const { addUser, userData, editUser } = userContext();
  const navigate = useNavigate();
  const { id } = useParams();

  const [edit, setEdit] = useState(false);
  const [initialValues, setInitialValues] = useState({
    id: new Date().getTime(),
    email: "",
    fullname: "",
  });

  useEffect(() => {
    if (id) {
      setEdit(true);
      const currentUser = userData.find(
        (user) => user.id.toString() === id.toString()
      );
      setInitialValues(currentUser);
    }
  }, [id]);

  const handleUser = (values) => {
    edit
      ? editUser({
          id: values.id,
          fullname: values.fullname,
          email: values.email,
        })
      : addUser({
          id: values.id,
          fullname: values.fullname,
          email: values.email,
        });
    navigate("/");
  };

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues,
      onSubmit: (values) => {
        console.log(values);
        handleUser(values);
      },
      enableReinitialize: true,
      validationSchema,
    });

  return (
    <div className="user-page">
      <div className="user-page-content">
        <h1>Add User Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex-column">
            <label>Adınız</label>
            <Input
              classname={"form-input"}
              name={"fullname"}
              id={values.id}
              value={values.fullname}
              onchange={handleChange}
              onblur={handleBlur}
            />
            {errors.fullname && touched.fullname && (
              <div className="error-message">{errors.fullname}</div>
            )}
          </div>
          <div className="flex-column">
            <label>Eposta</label>
            <Input
              classname={"form-input"}
              name={"email"}
              id={values.id}
              value={values.email}
              onchange={handleChange}
              onblur={handleBlur}
            />
            {errors.email && touched.email && (
              <div className="error-message">{errors.email}</div>
            )}
          </div>

          <br />
          <Button type={"submit"} classname={"button"} />
        </form>
      </div>
    </div>
  );
}

export default User;
