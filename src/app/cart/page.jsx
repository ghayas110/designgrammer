"use client";
import CartItem from '@/components/Cartitems';
import Link from 'next/link';
// pages/cart.js
import React, { useState } from 'react';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            title: "Become a WordPress Developer: Unlocking Power With Code",
            author: "Brad Schiff",
            rating: 4.7,
            reviews: 25526,
            hours: 46,
            lectures: 234,
            level: "All Levels",
            price: 22.99,
            originalPrice: 129.99,
            badge: "Bestseller",
        },
    ]);

    const [wishlist, setWishlist] = useState([
        {
            id: 2,
            title: "The Complete Python Bootcamp From Zero to Hero in Python",
            author: "Jose Portilla",
            rating: 4.6,
            reviews: 523686,
            hours: 22,
            lectures: 156,
            level: "All Levels",
            price: 12.99,
            originalPrice: 74.99,
            badge: null,
        },
        {
            id: 3,
            title: "C++: From Beginner to Expert",
            author: "Arkadiusz Wlodarczyk",
            rating: 4.3,
            reviews: 10754,
            hours: 18,
            lectures: 104,
            level: "All Levels",
            price: 12.99,
            originalPrice: 74.99,
            badge: "Updated Recently",
        },
    ]);

    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
   <div className="lg:col-span-2">

 
   
        <div className="container mx-auto px-4 py-8">

            <h1 className="text-3xl font-bold">Shopping Cart</h1>
            {/* Cart Items */}
            <div>
                <h2 className="text-xl font-semibold mt-6">1 Course in Cart</h2>
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
        <p className="text-2xl font-bold text-purple-600">$22.99</p>
        <p className="text-sm text-gray-500 line-through">$129.99</p>
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
