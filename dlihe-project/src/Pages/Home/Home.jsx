import React from 'react'
import Message from '../../Components/Message/Message'
import News from '../../Components/Dlihetoday/news'
import Header from '../Header/Header'
import Programs from '../../Components/Programs/Programs'
import Upperfoot from '../Footers/Upperfoot'
const Home = () => {
  return (
    <div>
      <Header/>
      <Programs/>
     <Message/>
     <News/>
     <Upperfoot/>
    </div>
  )
}

export default Home