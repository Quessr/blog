import HomeContainer from '../components/HomeContainer'
import Header from '../components/Header';

const Home = () => {
  return (
    <div className='h-screen text-5xl bg-purple-100 overflow-y-scroll'>
      <Header />
      <HomeContainer />
    </div>
  )
}

export default Home;