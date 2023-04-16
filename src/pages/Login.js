import React from 'react'

const Login = () => {
  return (
    
      <div id="form">
		<div>
			<label for="username">Username</label>
			<input type="text" name="username" id="username"/>
		</div>
		<div>
			<label for="password">Password</label>
			<input type="password" name="password" id="password"/>
		</div>
		<button id="submit" class="btn">Submit</button>
	</div>
    
  )
}

export default Login