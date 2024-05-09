import Header from './components/Header'
import VideoPlayer from './components/VideoPlayer'
import Options from './components/Options'
import Notifications from './components/Notifications'

function App() {
  return (
    <div className='flex flex-col'>
      <Header/>
      <div className='p-4'>
        <Notifications/>
        <VideoPlayer/>
        <Options/>
      </div>
    </div>
  )
}

export default App
