/* eslint-disable react-hooks/rules-of-hooks */
import { createContext,useState,useContext,useEffect } from "react";

const ProductContext = createContext ();
export const ProductProvider =({children})=>{
    const [productList,setProductList]=useState(JSON.parse(localStorage.getItem("productData")));
  

    const addProduct =(product)=>{
        setProductList((prevProductList)=>[...prevProductList,product])
    }

    useEffect(()=>{
        localStorage.setItem("productData",JSON.stringify(productList))
    },[productList])

    const deleteProduct =(id)=>{
        const filteredData=productList.filter((item)=>item.id!==id)
        setProductList(filteredData)
    }
    
    const editProduct = (data)=>{
        const fiteredData=productList.filter((user)=>user.id!==data.id)
        fiteredData.push(data)
        setProductList(fiteredData)
    }


    const values ={
        productList,
        addProduct,
        deleteProduct,
        editProduct,
    }



    return(
        <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
    )
}

export const allProductList =()=>useContext(ProductContext)