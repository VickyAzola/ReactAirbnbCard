import StarImg from '/assets/Star.svg'
import { PropTypes } from "prop-types";

export default function Card(props) {

    
    return (
    <>
        <div className='relative'>
            {props.openSpots === 0 && <div className='absolute top-2 left-2 bg-white py-1 px-2 rounded font-bold text-xs text-[#918E9B]'> SOLD OUT </div>}
            <img 
                src={`/assets/${props.img}`} 
                alt={props.alt}
                className='w-[11rem] h-[14.6875rem]' 
            />
            <div className='mt-2 text-[0.7rem]'>
                <div className='flex gap-x-1 items-center'>
                    <img src={StarImg} className='mb-[0.2rem]'  />
                    <p className='text-[#918E9B]'>
                        <span className='text-[#222]'>{props.stars} </span>
                        ({props.reviews}) • {props.country} 
                    </p>
                </div>
                <p className='my-1 font-light'>{props.description}</p>
                <p className='text-[#918E9B]'>
                    <span className='text-[#222] font-bold'>From ${props.price} </span>
                    / person
                </p>
            </div>
        </div>
    </>
    )
}


Card.propTypes  = {
    img: PropTypes.string,
    alt: PropTypes.string,
    stars: PropTypes.string,
    reviews: PropTypes.number,
    country: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    openSpots: PropTypes.number,
};
