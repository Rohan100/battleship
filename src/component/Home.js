import React, { useContext } from 'react'
import logo from '../assets/images/bs_logo.png'
import { avatars } from '../avatars'
import { shipContext } from '../context'

function Home({startGame}) {
  const {setAvatar} = useContext(shipContext);

  const selectAvatar =(i) => {
    setAvatar(i)
  }

  return (
    <div className="home">
            <img  src={logo} id='battleship-img' alt="" />
            <div className="slider">
              {
                avatars.map((i,k) => 
                  <img 
                    src={i.img}
                    key={k}
                    onClick={()=>selectAvatar(i)}
                    alt={i.name}
                    />
                )
              }
            </div>
            <div>
            <input type="text" name='name' className='name-inp' placeholder='Name' />
            </div>
            <button onClick={() => startGame(true)} className='btn'>Start</button>
    </div>
  )
}

export default Home