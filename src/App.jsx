import Header from './Header'
import Card from './Card'
import imgGroup from '/assets/Group77.png'
import CardData from './CardData'

export default function App() {

  const cardElem = CardData.map(card =>    
    <Card 
      key={card.id}
      {...card}
    />
  )

  return (
    <>
      <div className=' rounded-lg bg-white min-h-min w-[34rem] h-[54rem] m-8'>
        <Header />

        <div className='w-[25rem] mx-auto py-6'>
          <img className='w-[24.74413rem] h-[14.5rem]'src={imgGroup} />
        </div>

        <div className='px-8'>
          <h1 className='text-[2.25rem] font-bold mb-2'>Online Experiences</h1>
          <p className='text-[1rem] max-w-[20rem] text-[#222] '>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>

        <div className='flex my-12 ml-6 gap-x-4'>
          {cardElem}
        </div>
      </div>
    </>
  )
}
