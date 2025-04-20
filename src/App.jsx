import './App.css'
// import { Routes, Route, Link } from 'react-router-dom';
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { useState, useEffect, useRef, createContext, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Character from './components/Character'
import Inventory from './components/Inventory'
import Footer from './components/Footer'

function App() {

  const toys = ["Spider-Man", "Hulk", "Black Panther"]; // Your toy list
  const [gems, setGems] = useState(5);
  const TeamContext = createContext();
  const [health, setHealth] = useState(100)
  // const [score, setScore] = useState(100)
  const coins = useRef(0)// hidden coins (won't update on screen)

  const takeDamage = () => {
    setHealth(Math.max(health - 10, 0))
  }
  const recoverHealth = () => {
    setHealth(Math.min(health + 10, 100))
  }

  useEffect(() => {
    alert(`Health changed: ${health}%`)
  }, [health])


  const collectCoin = () => {
    coins.current += 1
    console.log(`Total coins: ${coins.current}`)
  }

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Stop the page from reloading
    alert("Form submitted! 🚀");
  }

  function TeamMember() {
    const mission = useContext(TeamContext); // No props needed!
    return <p>Mission: {mission}</p>;
  }
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-green-500">
        <Navbar />
      </div>

      <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>

      <div className='flex'>
        <div>
          <p>Health: {health}%</p>
          <button onClick={takeDamage}>Get Hit! 💥</button>
          <button onClick={recoverHealth}>Heal! ❤️</button>
        </div>

      </div>

      <button onClick={collectCoin} >Grab Coin! 🪙</button>

      <div>
        <p>Gems: {gems}</p>
        {/* Condition: Show dragon ONLY if gems >= 10 */}
        {gems >= 10 ? ( // If gems >= 10...
          <div>
            <h1>🐉 Your dragon appears! 🎉</h1>
            <button onClick={() => setGems(0)}>Reset Gems</button>
          </div>
        ) : ( // Else...
          <button onClick={() => setGems(gems + 2)}>Collect More Gems! 💎</button>
        )}
      </div>

      <div>
        <h2>My Toys 🪀</h2>
        <ul>
          {toys.map((toy, index) => ( // Loop through the toys!
            <li key={index}>🌟 {toy}</li> // Show each toy
          ))}
        </ul>
      </div>

      <div>
        <input
          type="text"
          placeholder="Type your name!"
          onChange={(e) => setName(e.target.value)} // Update name as you type
        />
        <p>Hello, {name}! 👋</p>
      </div>

      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>

      <Hero />

      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>🏠 Home Page - Welcome to the Game!</h1>} />
          <Route path="/character" element={<Character />} />
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
      </div>

      <Footer />
    </>
  )

}
export default App


// state management
// react routing 
// styling in react 
// performentce optimization



// useEffect done
// useRef done

// useContext
// useMemo
// useCallback

// conditional renderinf & renderting lists 
// handling EventSource
// react Router
// handling Form + connnecting react to Express Backend
// learn Redux


// then nextjs

