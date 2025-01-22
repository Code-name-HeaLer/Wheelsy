"use client";

import React from 'react'
import Image from 'next/image'
import { CustomButton } from '@/types';

const CustomButton = ({title, containerStyles, handleClick, btnType}: CustomButton) => {
  return (
    <button
    disabled={false}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
      <span className={`felx-1`}>
        {title}
      </span>
    </button>
  )
}

export default CustomButton
