import { getDictionary } from '@/app/[lang]/dictionary/dictionaries';
import Image from 'next/image';
import Link from 'next/link';

export default async function Sidebar({lang}) {
    const localContent  = await  getDictionary(lang)
    return (
        <aside className=''>
            <ul className="space-y-2">
                <li>
                    <Link href="/" className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black">
                        <Image src="/assets/icons/trending.svg" width={24} height={24} alt="Trending" />
                        <span>{localContent.trending}</span>

                    </Link>
                </li>
                <li>
                    <Link href="/" className="flex items-center space-x-2 px-5 py-3.5 rounded-lg">
                        <Image src="/assets/icons/newRelease.svg" width={24} height={24} alt="New Releases" />
                        <span>{localContent.newRelease}</span>

                    </Link>
                </li>
                <li>
                    <Link href="/" className="flex items-center space-x-2 px-5 py-3.5 rounded-lg">
                        <Image src="/assets/icons/commingSoon.svg" width={24} height={24} alt="Coming Soon" />
                        <span>{localContent.comingSoon}</span>

                    </Link>
                </li>
                <li>
                    <Link href="/" className="flex items-center space-x-2 px-5 py-3.5 rounded-lg">

                        <Image src="/assets/icons/favourite.svg" width={24} height={24} alt="Favourites" />
                        <span>{localContent.favourites}</span>
                    </Link>
                </li>
                <li>
                    <Link href="/" className="flex items-center space-x-2 px-5 py-3.5 rounded-lg">
                        <Image src="/assets/icons/watchLater.svg" width={24} height={24} alt="Watch Later" />
                        <span>{localContent.watchLater}</span>

                    </Link>
                </li>
            </ul>
        </aside>
    );
}
