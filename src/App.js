import logo from './logo.svg';
import './App.css';
import './style.css'
import React from 'react'

export default function App() {
  const show2=()=>{
    document.getElementById('c1').style.display="none";
   document.getElementById('c2').style.display="inline";
   document.body.style.backgroundImage = "url(images/img2.png)";
   }
   const show1=()=>{
       document.getElementById('c2').style.display="none";
       document.getElementById('c1').style.display="inline";
       document.body.style.backgroundImage = "url(images/img1.png)"; 
   }
  return (
    <div>
      <div class="Contain">
      <div class="left">
        <img width="50%"height="10%"src="images/Vector (1).png" alt="" onclick={show1}/>
      </div>
      <div class="content1" id="c1">
      <h1>Hall Notices</h1>
      <br/>
      <br/>
      <br/>
      <p>
        This is to notify all the boarders of Nehru Hall of Residence that the
        following rooms are to be vacated by 1st December,2022 and handover of
        the unlocked rooms to be done to the hall manager / supervisor.
      </p>
      <li>All triple sharing rooms of A,B,C and D block.</li>
      <ol type="1">
        <li>A200,A201,A202</li>
        <li>B401-B413</li>
        <li>C135,C136,C235,C236,C237,C336,C337,C338,C401-C421</li>
        <li>D123,D124,D224,D225,D226,D324,D325,D326,D401-D415.</li>
      </ol>
      <br/>
      <br/>
      <br/>
      <h1>Warden</h1>
    </div>
    <div class="content2" id="c2">
      <h1>Institute Notices</h1>
      <br/>
      <br/>
      <br/>
      <p>
        This is to notify all the boarders of Nehru Hall of Residence that the
        following rooms are to be vacated by 1st December,2022 and handover of
        the unlocked rooms to be done to the hall manager / supervisor.
      </p>
      <li>All triple sharing rooms of A,B,C and D block.</li>
      <ol type="1">
        <li>A200,A201,A202</li>
        <li>B401-B413</li>
        <li>C135,C136,C235,C236,C237,C336,C337,C338,C401-C421</li>
        <li>D123,D124,D224,D225,D226,D324,D325,D326,D401-D415.</li>
      </ol>
      <br/>
      <br/>
      <br/>
     <br/>
     <br/>
     <br/>
    </div>
    <div class="right">
      <img width="50%"height="10%"src="images/Vector.png" alt="" onclick={show2}/>
  </div>
  </div>
    </div>
  )
}
