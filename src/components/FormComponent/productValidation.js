import *as yup from "yup"


const validation = yup.object().shape({
    product_name:yup.string().required("zorunlu alan"),
    price:yup.number().required("zorunlu alan"),
})


export default validation;