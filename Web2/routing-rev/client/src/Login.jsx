import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();

   
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <Link to="/" className="back-link">← Back</Link>

      <div className="login-wrapper">
        <div className="login-content">
          <h2>Login</h2>
          <form className="login-form" onSubmit={handleLogin}>
            <input type="email" placeholder="Email" required /><br></br><br></br>
            <input type="password" placeholder="Password" required /><br></br><br></br>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
