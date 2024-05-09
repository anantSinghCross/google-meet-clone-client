import Header from './components/Header'
import VideoPlayer from './components/VideoPlayer'
import Options from './components/Options'
import Notifications from './components/Notifications'

// TODO: Features to work on
// ✅ 1. Video conferencing
// ✅ 2. Audio communication (additional: 🔳feature to mute/unmute, 🔳video on/off)
// 🔳 3. Chat functionality
// 🔳 4. Improve UI

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
