import Header from './components/Header'
import VideoPlayer from './components/VideoPlayer'
import Options from './components/Options'
import Notifications from './components/Notifications'
import Chat from './components/Chat'

function App() {
  return (
    <div className='flex flex-col'>
      <Header/>
      <div className='p-4'>
        <Notifications/>
        <VideoPlayer/>
        <Options/>
      </div>
        <Chat/>
    </div>
  )
}

export default App
