import React from 'react'
import img from './img.png'

export default function Home() {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center' style={{width:'100vw',height:'90vh'}}><div className="map" style={{width:'50vw',height:'90%',background:`url(${img})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'contain'}}></div><div className='d-flex justify-content-center align-items-center' style={{widht:'50vw',height:'95vh'}}></div></div>
      <div className='conatiner d-flex justify-content-center align-items-center' style={{width:'100vw'}}>
        <div className='text-center' style={{width:'35%'}}><h1>Reduce Carbon Emission</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fugit dignissimos quia minima ut. Cum excepturi veritatis quia ipsum reprehenderit commodi quod nesciunt. Commodi, magnam? Molestiae dicta quidem corrupti, dolor ab ea sit rem. Asperiores dolor nesciunt ipsa cum? Natus suscipit commodi facilis expedita, maxime soluta blanditiis delectus quo eos consectetur quae quisquam. Recusandae hic, minima nemo adipisci a similique iure, soluta ipsam officia ducimus voluptas exercitationem amet pariatur dicta.</p></div>
      </div>
    </>
  )
}
