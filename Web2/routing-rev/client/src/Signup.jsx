import { Link, useNavigate} from 'react-router-dom';
import './Login.css'; //same css kay tapol

function Signup() {

  const navigate = useNavigate(); 

  const handleSignup = (e) => {
    e.preventDefault();

   
    navigate('/dashboard');
  };
  return (
    <div className="signup-container">
      <Link to="/" className="back-link">← Back</Link>

      <div className="login-wrapper">
        <div className="login-content">
          <h2>Sign Up</h2>
          <p>Create an account</p>
          <form className="signup-form" onSubmit={handleSignup}>
            <input type="name" placeholder="First name" required></input><br/><br/>
            <input type="name" placeholder="Last name" required></input><br/><br/>
            <input type="email" placeholder="Email" required /> <br/><br/>
            <input type="password" placeholder="Password" required /><br/><br/>
            <button type="submit">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
