import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const manageproduct = () => {

    const [productList, setproductList] = useState([]);

    const fetchProductData = async () => {
        const res = await axios.get('http://localhost:5000/product/getall');
        console.log(res.status);
        console.log(res.data);
        setproductList(res.data);
    }

    useEffect( () => {
        fetchProductData();
    }, []);

    const deleteProduct = (id) => {
        axios.delete('http://localhost:5000/product/delete/'+id)
        .then((result) => {
            toast.success('Product Deleted Successfully!')
        }).catch((err) => {
            console.log(err);
            toast.error('Failed to delete Product!');
        });
    }
    
  return (
    <div>
        <div className='max-w-[80%] mx-auto shadow-lg rounded-lg p-5'></div>
        <h1 className='mt-5 text-3xl font-bold text-center'>Manage Products</h1>
    </div>
  )
}

export default manageproduct;