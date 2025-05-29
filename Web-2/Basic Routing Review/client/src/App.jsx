import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome</h1>
      <Link to="/login">
        <button style={{ margin: '10px' }}>LOGIN</button>
      </Link>
      <Link to="/signup">
        <button style={{ margin: '10px' }}>SIGNUP</button>
      </Link>
    </div>
  )
}
