import { UserAuthContext } from '../firebase/app'
import Chat from '../components/Chat'
import Auth from '../components/Auth'
import { useContext } from 'react'

const Home = () => {

  const user = useContext(UserAuthContext);

  return (
    <div className="home">
      {user !== null ? <Chat /> : <Auth />}
    </div>
  )
}

export default Home;