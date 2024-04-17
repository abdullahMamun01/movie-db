'use client'
import getGenreTitle from '@/utils/getGenreTitle';
import Image from 'next/image';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
const MovieCard = ({movie}) => {

    const {id,title,genre_ids,poster_path} = movie
    const stars = 4
    const href = '/'
    return (
        <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
            <Image
                className="w-full object-cover"
                src={poster_path} // Static image path based on title
                alt={title}
      
                width={300} height={300}
            />
            
            <figcaption className="pt-4">
                <h3 className="text-xl mb-1">{title}</h3>
                <p className="text-[#575A6E] text-sm mb-2">{getGenreTitle(genre_ids)}</p>
                <div className="flex items-center space-x-1 mb-5">
                    {[...Array(stars)].fill(0).map((_, index) => (
                        <Image
                            key={index}
                            src="/assets/star.svg" // Static path for star icon
                            width={14}
                            height={14}
                            alt="Star"
                        />
                    ))}
                </div>
                <Link 
                    className="bg-primary rounded-lg py-2 px-5 flex items-center cursor-pointer justify-center gap-2 text-[#171923] font-semibold text-sm disabled "
                    href={`/en/movies/${id}`}
                >
                    <Image src="/assets/tag.svg" alt="Details" width={14} height={14} /> {/* Static path for details icon */}
                    <span>Details</span>
                </Link>
            </figcaption>
        </figure>
    );
};

export default MovieCard;