import React from 'react'
import Banner from '../Components/Banner/Banner'
import Cards from '../Components/Cards/Cards'
import Compaines from '../Components/Compaines/Compaines'
import Tab from '../Components/Tab/Tab'
import Planning from '../Components/Planning/Planning'
import Carftsol from '../Components/Carftsolution/Carftsol'
import Achivement from '../Components/Achivement/Achivement'
import Faq from '../Components/FAQ/Faq'

const Home = () => {
  return (
    <div>
      <Banner />
      <Cards />
      <Compaines />
      <Tab />
      <Planning />
      <Carftsol />
      <Achivement />
      <Faq />

    </div>
  )
}

export default Home
