import *as yup from "yup"


const validation = yup.object().shape({
    email:yup.string().email('Geçerli bir e-mail giriniz').required("zorunlu alan"),
    fullname:yup.string().min(5,"en az 5 karakter olmalıdır").required("zorunlu alan"),
})


export default validation;