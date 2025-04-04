import React from 'react'
import Image from 'next/image'

const CartIcon = () => {
  return (
    <div className='flex items-center gap-4'>
        <div className='relative w-8 h-8 md:w-5 md:h-5'>
            <Image src='/cart.png' alt='' fill sizes="(max-width: 768px) 2rem, 3rem" />
        </div>
        <span>Cart (3)</span>
    </div>
  )
}

export default CartIcon