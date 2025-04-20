import { useState } from 'react'

function Inventory() {
  const [items] = useState([
    '⚔️ Sword',
    '🛡️ Shield',
    '❤️ Health Potion',
    '✨ Magic Scroll'
  ])

  return (
    <div style={{ padding: '20px' }}>
      <h1>Your Inventory 🎒</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index} style={{ margin: '10px 0' }}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Inventory 