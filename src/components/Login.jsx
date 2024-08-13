import React, { useState } from 'react'; // Import React and the useState hook
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { googleLogin } from '../services/api.jsx'; // Import the googleLogin function from your API service
import './Login.css'; // Import the CSS file for styling

// Define the Login component
function Login() {
  // useState hooks to manage the email and password state
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  
  // useNavigate hook for programmatic navigation
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      // Attempt to log in with the provided email and password
      await googleLogin(email, password);
      // Navigate to the '/onebox' route upon successful login
      navigate('/onebox');
    } catch (error) {
      // Log any errors that occur during the login attempt
      console.error('Login failed:', error);
    }
  };

  // Render the login form
  return (
    <div className="login-container"> {/* Container for the login form */}
      <form onSubmit={handleSubmit} className="login-form"> {/* Form element with a submit handler */}
        <input
          type="email"
          value={email} // Controlled input for email
          onChange={(e) => setEmail(e.target.value)} // Update email state on change
          placeholder="Email"
          required
          className="login-input"
        />
        <input
          type="password"
          value={password} // Controlled input for password
          onChange={(e) => setPassword(e.target.value)} // Update password state on change
          placeholder="Password"
          required
          className="login-input"
        />
        <button type="submit" className="login-button">Login</button> {/* Submit button */}
      </form>
    </div>
  );
}

export default Login; // Export the Login component
