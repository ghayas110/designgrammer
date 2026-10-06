"use client";
import CartItem from '@/components/Cartitems';
import Link from 'next/link';
// pages/cart.js
import React, { useState } from 'react';
import { getCourse, getCourseImage, getCourseStats } from '@/data/courses';

const toCartItem = (course) => {
    const { lectures, duration } = getCourseStats(course);
    return {
        ...course,
        author: course.instructor,
        image: getCourseImage(course),
        duration,
        lectures,
    };
};

const CartPage = () => {
    const [cartItems, setCartItems] = useState([toCartItem(getCourse(1))]);

    const [wishlist, setWishlist] = useState([toCartItem(getCourse(2)), toCartItem(getCourse(4))]);

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    const originalTotal = cartItems.reduce((sum, item) => sum + item.originalPrice, 0);

    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
   <div className="lg:col-span-2">

 
   
        <div className="container mx-auto px-4 py-8">

            <h1 className="text-3xl font-bold">Shopping Cart</h1>
            {/* Cart Items */}
            <div>
                <h2 className="text-xl font-semibold mt-6">{cartItems.length} Course in Cart</h2>
                {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
            {/* Wishlist Items */}
            <div>
                <h2 className="text-xl font-semibold mt-6">Recently Wishlisted</h2>
                {wishlist.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
      
        </div>
        
        </div>
        <div className="p-6 bg-gray-100 rounded-md shadow-md">
        <h2 className="text-lg font-bold">Total:</h2>
        <p className="text-2xl font-bold text-purple-600">${total.toFixed(2)}</p>
        <p className="text-sm text-gray-500 line-through">${originalTotal.toFixed(2)}</p>
     <Link href="/checkout">
        <button className="bg-purple-600 text-white py-2 px-4 rounded-md mt-4">
            Checkout
        </button>
    </Link>
        <div className="mt-4">
            <h3 className="text-md font-semibold">Promotions</h3>
            <p className="text-sm">ACCAGE0923 is applied</p>
            <input
                type="text"
                placeholder="Enter Coupon"
                className="w-full p-2 border rounded-md mt-2"
            />
            <button className="bg-purple-600 text-white py-2 px-4 rounded-md mt-2">
                Apply
            </button>
        </div>
    </div>
        </div>
    );
};

export default CartPage;
