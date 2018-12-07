import React from 'react';
import SearchButton from './SearchButton';
import Image from '../assets/images/lingomd-colorlogo-05.png'

function Search() {
  return (
    <div>
      <div>
        <img src={Image} alt='logo'></img>
        <h1>How can we help you today?</h1>
        <form>
          <input type='text' placeholder='I need...' />
            <div>
              <select>
                <option>5</option>
                <option>10</option>
                <option>15</option>
                <option>20</option>
                <option>30</option>
              </select>
              <p>miles from</p>
              <input type='text' />
            </div>
        </form>
      </div>
      <SearchButton/>
    </div>
  );
}

export default Search;