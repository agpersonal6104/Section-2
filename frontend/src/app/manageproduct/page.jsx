'use client';
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

    const displayProducts = () => {
        if(productList.length === 0)
        {
            return <p>Loading.... Please Wait!</p>
        }
        else
        {
            return <table className='w-full border-2 border-blue-500'>
            <thead className='text-left text-white bg-blue-500'>
              
              <tr>
                <th className='p-3 text-lg'>ID</th>
                <th className='p-3 text-lg'>Title</th>
                <th className='p-3 text-lg'>Brand</th>
                <th className='p-3 text-lg'>Category</th>
                <th className='p-3 text-lg'>Model</th>
                <th className='p-3 text-lg'>Price</th>
                <th colSpan={2}>Actions</th>
                </tr>
              
            </thead>
            
            <tbody>
                {
                    productList.map( (product) => {
                        return <tr key={product._id} className='border border-blue-500'>
                
                            <td className='p-3'> {product._id} </td>
                            <td className='p-3'>{product.title}</td>
                            <td className='p-3'>{product.brand}</td>
                            <td className='p-3'>{product.category}</td>
                            <td className='p-3'>{product.model}</td>
                            <td className='p-3'>{product.price}</td>
                        </tr>
                    })
                }
            </tbody>
            </table>
        }
    }
    
  return (
    <div>
        <div className='max-w-[80%] mx-auto shadow-lg rounded-lg p-5'>

        <h1 className='mt-5 text-3xl font-bold text-center'>Manage Products</h1>
        {displayProducts()}
        
        </div>
    </div>
  )
}

export default manageproduct;