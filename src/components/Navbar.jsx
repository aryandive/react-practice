import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav style={{ padding: '20px', background: '#f0f0f0' }}>
      <Link to="/" style={{ marginRight: '10px' }}>🏠 Home</Link>
      <Link to="/character" style={{ marginRight: '10px' }}>🎮 Customize Hero</Link>
      <Link to="/inventory">🎒 Inventory</Link>
    </nav>
  )
}

export default Navbar