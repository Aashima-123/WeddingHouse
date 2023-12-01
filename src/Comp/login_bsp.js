import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const login_bsp = () => {
  return (
    <div>

<div class="wrapper fadeInDown">
  <div id="formContent">

    <form>
      <input type="text" id="login" class="fadeIn second" name="login" placeholder="login"></input>
      <input type="text" id="password" class="fadeIn third" name="login" placeholder="password"></input>
      <input type="submit" class="fadeIn fourth" value="Log In"></input>
    </form>

    <div id="formFooter">
      <a class="underlineHover" href="#">Forgot Password?</a>
    </div>

    </div>
    </div>
    </div>
  )
}

export default login_bsp
