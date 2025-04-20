import { useState } from 'react'

function Character() {
  const [heroName, setHeroName] = useState('Warrior')
  const [heroColor, setHeroColor] = useState('blue')

  return (
    <div style={{ padding: '20px' }}>
      <h1>Create Your Hero! 🦸♂️</h1>
      <div>
        <label>Hero Name: </label>
        <input 
          type="text" 
          value={heroName}
          onChange={(e) => setHeroName(e.target.value)}
        />
      </div>
      
      <div style={{ marginTop: '10px' }}>
        <label>Armor Color: </label>
        <select value={heroColor} onChange={(e) => setHeroColor(e.target.value)}>
          <option value="red">🔴 Red</option>
          <option value="blue">🔵 Blue</option>
          <option value="green">🟢 Green</option>
        </select>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Your Hero:</h3>
        <p>Name: {heroName}</p>
        <p>Armor Color: <span style={{ color: heroColor }}>⬤</span></p>
      </div>
    </div>
  )
}

export default Character