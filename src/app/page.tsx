import Image from 'next/image'

export default function Home() {
  return (
    <div className='max-w-7xl mx-auto pt-8 px-8 xl:px-0'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl: gap-6'>
        <div 
          className='bg-white rounded-md h-12 flex justify-center items-center'
        >
          Prod 1
        </div>
        <div 
          className='bg-white rounded-md h-12 flex justify-center items-center'
        >
          Prod 2
        </div>
        <div 
          className='bg-white rounded-md h-12 flex justify-center items-center'
        >
          Prod 3
        </div>
        <div 
          className='bg-white rounded-md h-12 flex justify-center items-center'
        >
          Prod 4
        </div>
        <div 
          className='bg-white rounded-md h-12 flex justify-center items-center'
        >
          Prod 5
        </div>
      </div>
    </div>
  )
}
