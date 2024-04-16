'use client'
import React, { Fragment, useState } from 'react'
import Image from 'next/image'
import { useRouter, usePathname } from "next/navigation";

export default function LangSwitcher() {
    const pathname = usePathname()
    const router = useRouter()
    const langShort = pathname.substring(1, 3)
    const [show, setShow] = useState(false)


    const languages = [
        {
            code: 'en',
            language: 'english',
            img: 'usa.png'
        },
        {
            code: 'bn',
            language: 'bengali',
            img: 'bd.png'
        }
    ]
    const foundLang = languages.find(lang => lang.code === langShort)
    const [selectLang, setSelectLang] = useState(foundLang ?? languages[0])
    

    const onToggleLang = ( ) => {
        setShow(!show)
    }

    const handleSelectLang = (lang) => {
        setSelectLang({...lang})
        onToggleLang()
        router.push(`/${lang.code}`)
    }
    return (
        <div className='relative'>
            <button className="flex items-center gap-2" onClick={onToggleLang}>
                <Image className="max-w-8" src={`/assets/${selectLang.img}`} width={100} height={100} alt={selectLang.language} />
                {selectLang.language}
            </button>
            {
                show && <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white p-2 z-10 shadow-lg ">
                    {
                        languages.map((lang, i) => (
                            <Fragment key={i}>
                                <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100" onClick={() => handleSelectLang(lang)}>
                                    <Image className="max-w-8" src={`/assets/${lang.img}`} width={100} height={100} alt="bangla" />
                                    <span className='text-dark'>{lang.language}</span>
                                </li>
                            </Fragment>
                        ))
                    }

                </div>
            }
        </div>
    )
}
