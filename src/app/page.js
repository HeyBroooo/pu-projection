import Image from 'next/image'



export default function Home() {

  const data = {
    yearsOflegecy: 18,
    events: "50+",
    participants: "10000+",
    prizeMoney: "7Lac+"
  }
  return (

    <div>

      <div className='flex justify-between '>

        <div style={{
          zIndex: -1,
          position: "fixed",
          width: "100vw",
          height: "100vh"
        }}>

          <Image
            src="/space-theme.jpg"
            alt="Mountains with snow"
            layout="fill"
            objectFit='cover'
          />
        </div>

        <div className="mt-5 ml-4">
          <Image src="/pu-projection.png" alt="logo" height={200} width={200} />
        </div>





        <div className=' text-end mt-5'>
          <h1 className='mr-2 md:mr-6 font-montserrat font-bold text-white  text-[10px] md:text-2xl'>PROJECTIONS 2024</h1>
          <h1 className='mr-2 md:mr-6 font-montserrat font-semibold text-white text-[8px] md:text-sm'>at Parul University</h1>
        </div>
      </div>

      <div className='flex md:flex-row flex-col md:justify-between'>
        <div className='flex justify-start'>
          <div className='pt-44 ml-7 md:ml-14 font-montserrat text-white'>
            <h1 className='text-5xl font-bold'>GUJARAT'S LARGEST <br></br> TECHNICAL FESTIVAL</h1>
            <p className='text-sm'>"Projections, Gujarat's largest annual tech fest hosted by Parul University, boasts an 18+ <br />year legacy. With over 10,000 participants and 45,000+ attendees, it offers a platform <br />for tech enthusiasts to showcase their talent across various domains. This year's theme,<br /> "Tech Marvels," focuses on practical advancements inspired by the Marvel Cinematic <br /> Universe. Join us on February 16th and 17th for 50+ technical and non-technical events,<br /> along with 20+ workshops and lectures by tech industry luminaries." </p>
            <button className='mt-6 underline'>See more..

            </button>
          </div>
        </div>


        <div className="flex-grow flex justify-center md:justify-end items-end relative md:pt-32 pt-20 mb-5 mt-5 ">
          <div className=" px-10 py-10 md:p-20 bg-opacity-30 border-l-2 border-y-2 border-gray-400 backdrop-blur-md bg-white text-black rounded-2xl md:rounded-l-2xl">
            <div className='flex flex-row  justify-between mb-20 '>
              <div className='flex flex-col gap-y-2 text-center mr-14'>
                <h1 className='font-bold font-montserrat text-white text-xl md:text-4xl'>{data.yearsOflegecy}</h1>
                <h3 className='font-montserrat font-medium text-gray-200 text-sm'>Years of Legacy</h3>
              </div>

              <div className='flex flex-col gap-y-2 text-center mr-10'>
                <h1 className='font-bold font-montserrat text-white text-xl md:text-4xl'>{data.events}</h1>
                <h3 className='font-montserrat font-medium text-gray-200 text-sm'>Events</h3>
              </div>

            </div>

            <div className='flex flex-row justify-between'>
              <div className='mr-10 text-center' >
                <h1 className='font-bold font-montserrat text-white text-xl md:text-4xl'>{data.participants}</h1>
                <h3 className='font-montserrat font-medium text-gray-200 text-sm'>Participants</h3>
              </div>

              <div className='mr-10 ml-5 text-center'>
                <h1 className='font-bold font-montserrat text-white text-xl md:text-4xl'>{data.prizeMoney}</h1>
                <h3 className='font-montserrat font-medium text-gray-200 text-sm'>Prize Money</h3>
              </div>

            </div>
          </div>
        </div>

      </div>
      <div className="flex-grow justify-center md:justify-end flex relative">
        <div className=" px-10 py-4 bg-opacity-20 border-y-2 border-l-2 border-gray-400 backdrop-blur-md bg-white text-black rounded-2xl md:rounded-l-2xl">
          <div className="text-base font-montserrat text-white font-bold mb-1">16th-17th February 2023</div>
        </div>
      </div>
    </div>
  )
}
