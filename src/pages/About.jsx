import React, {useEffect} from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function About() {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios
        .get(`https://restcountries.com/v3.1/alpha/${id}`)
        .then((res) => {
          if (res.status === 200) {
            console.log(res.data)
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  return (
    <div>
      <Header />
      about
    </div>
  )
}

export default About
