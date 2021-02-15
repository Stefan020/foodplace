import React from 'react';
import { GetByPubDate } from './GetByPubDate';
import {GetByStars} from './GetByStars';

const Home = () => {
    return (
      <div className="home">
        <GetByPubDate />
        {/* <GetByStars /> */}
      </div>
    );
  }
  
  export default Home;
  