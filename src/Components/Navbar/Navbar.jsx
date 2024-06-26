import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import User from '../../assets/nav_user.png'
import HamMenu from '../../assets/nav_hamMenu.png'
function Navbar() {
  return (
    <div className="nav">
      <div className="navbar" id="Navbar">
        <div className="navbar-left"><h1><b>PRO</b> WORK</h1></div>

        <div class="navbar-right">
          <div class="navbar-options-laptop">
            <Link class="jobs-explo" to="/prowork/jobs">JOBS</Link>
            <label class="jobs-explo" id="EXPLORE" for="exploreCheck" onclick="clickExplore()">EXPLORE</label>
            <input id="exploreCheck" type="checkbox" checked />
            <a class="jobs-explo" href="/prowork/jobs">ABOUT US</a>
            <a id="user-btn" onclick="clickUser()"><img src={User} /></a>
          </div>
          <div class="navbar-options-phone">
          <a id="user-btn" onclick="clickUser()"><img src={HamMenu} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar