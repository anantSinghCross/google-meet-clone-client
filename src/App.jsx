import Header from './components/Header'
import VideoPlayer from './components/VideoPlayer'
import Options from './components/Options'
import Notifications from './components/Notifications'

// TODO: Features to work on
// ✅ 1. video conferencing
// ✅ 2. audio communication (additional: 🔳feature to mute/unmute, 🔳video on/off)
// 🔳 3. chat functionality

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
