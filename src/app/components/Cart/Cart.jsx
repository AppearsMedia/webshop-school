'use client'

import React from 'react'
import Grid from '../Grid/Grid'
import GridItem from '../GridItem/GridItem'
import ProductCard from '../ProductCard'
import Button from '@/app/elements/Button'
import { useRouter } from 'next/navigation';

export default function Cart({
  products
}) {

    const getTotalPrice = (cart) => {
        return cart.reduce((total, product) => total + product.price, 0);
    }

    const router = useRouter();

    const total = getTotalPrice(products)


    return (
        <div className="cart flex flex-column align-start justify-start gap-xxl">
        
            <h2>Cart</h2>
        <div className="wrapper contained flex justify-start align-start">
            {products && products.length > 0 ? 

            <div className="flex flex-column align-flex-start gap-xxl">
                    {products && products.map((p) => {
                    return (
                        <div className="flex" key={JSON.stringify(p)}>
                            <h2>{p.title}: {p.price} SEK</h2>
                        </div>
                    )
                    })}
                <div className="total">
                    <h2>Total: {total} SEK</h2>
                </div>
            </div>

            :

            <h2>No products in cart, try adding some!</h2>

            }
        </div>
        </div>
    )
}