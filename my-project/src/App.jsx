// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import HeaderLoggedOut from "./components/HeaderLoggedOut"
// import HeaderLoggedIn from "./components/HeaderLoggedIn"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-gray-100 rounded-xl p-4 container mx-auto flex flex-col gap-4">
        <HeaderLoggedOut />
        <main>
          <section className="p-4">
            <h1>Welcome to my app!</h1>
          </section>
        </main>
      </div>
    </>
  )
}

export default App
