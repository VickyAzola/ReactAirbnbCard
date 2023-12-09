import AirBnB from '/assets/airbnb.svg'

export default function Header() {
    return (
        <>
        <header className='flex items-center justify-start rounded-t-lg p-4 bg-white shadow shadow-b h-[4.375rem] '>
            <img className='w-20' src={AirBnB} alt="React Logo"/>
        </header>
        </>
    )
}
