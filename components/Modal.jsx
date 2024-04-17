"use client"
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import Image from "next/image";

export default function Modal({ children }) {
    const router = useRouter()
    const modalRef = useRef(null)



    const handleClose = () => {
        router.back()
    }

    useEffect(() => {
        if(!modalRef.current?.open){
            modalRef.current?.showModal()
        }
    }, [])

    return createPortal(
       
            <dialog className='w-[70%] shadow-teal-700 shadow-md border border-teal-600 flex flex-col p-2 rounded-md dark:bg-black/80 dark:bg-opacity-95 dark:text-gray-100'
                ref={modalRef}
                onClose={handleClose}

            >

                <span onClose={handleClose}
                    className='bg-white cursor-pointer ml-auto '
                    onClick={handleClose}
                >
                    <Image
                        src="/assets/icons/xmark.svg"
                        alt="close"
                        width={30}
                        height={30} />
                </span>


                {children}
            </dialog>
        
        ,
        document.getElementById('modal-root')
    )
}
