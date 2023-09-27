import Image from 'next/image'



export default function Home() {
  return (
    <>
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
      <div className="pt-5 ml-10">
        <Image src="/pu-projection.png" alt="Google" height={200} width={200} className="w-32 md:w-48 lg:w-64"/>
      </div>

      <div className="flex-grow flex justify-end">
        <div>
          <h1 className='mr-6 text-2xl'>PROJECTIONS 2024</h1>
          <p className='ml-20'>at Parul University</p>
        </div>
      </div>

          <div className='pt-40 ml-14'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl mb-4'>GUJARAT'S LARGEST <br></br> TECHNICAL FESTIVAL</h1>
            <p className='text-sm '>"Projections, Gujarat's largest annual tech fest hosted by Parul University, boasts an 18+ <br />year legacy. With over 10,000 participants and 45,000+ attendees, it offers a platform <br />for tech enthusiasts to showcase their talent across various domains. This year's theme,<br /> "Tech Marvels," focuses on practical advancements inspired by the Marvel Cinematic <br /> Universe. Join us on February 16th and 17th for 50+ technical and non-technical events,<br /> along with 20+ workshops and lectures by tech industry luminaries." </p>
           
            <button className='mt-6'>see more<i className='fas fa-arrow-right'></i></button>
          </div>

          <div className="flex-grow flex justify-end relative mb-5 hidden md:block">
        <div className="absolute bottom-0 right-0 p-20 bg-opacity-10 backdrop-blur-md bg-white text-black rounded-lg">
          <div className="text-lg font-bold">50+ Years of Legacy</div>
          <div className="text-lg">Events</div>
          <div className="text-lg">10,000+ Participants</div>
          <div className="text-lg">Prize money</div>
        </div>
      </div>


      <div className="flex-grow flex justify-end relative">
        <div className="absolute bottom-[-1] right-0 p-4 bg-opacity-10 backdrop-blur-md bg-white text-black rounded-lg ">
          <div className="text-base font-bold mb-1">50+ Years of Legacy</div>
        </div>
      </div>
    </>
  )
}
