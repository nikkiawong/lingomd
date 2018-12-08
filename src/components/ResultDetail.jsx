import React from 'react';
import Nav from './Nav';

function ResultDetail() {
  return (
    <div>
      <Nav />
      <div>
        <div>
          <p>Back</p>
        </div>
        <div>
          <div>
            <div>
              <img src='https://png2.kisspng.com/20180427/jfw/kisspng-computer-icons-computer-software-woman-user-skin-material-5ae339610610a6.2292518415248408010249.png'></img>
            </div>
            <div>
              <h2>Doctor Name, M.D.</h2>
              <h3>Specialty</h3>
            </div>
          </div>
          <div>
            <p>Description</p>
          </div>
          <div>
            <p>Address</p>
            <p>Phone Number</p>
            <p>Email Address</p>
            <p><a href='/'>Website</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultDetail;