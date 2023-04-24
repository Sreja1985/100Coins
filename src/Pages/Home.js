import React ,{useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css';
import Card from '../Components/Card';

function Home() {

  
  const [listOfCoins, setListOfCoins] = useState([]);
  const [textSearch, setTextSearch] = useState("");
  

  useEffect(() => {
    const loadCoins = async () => {
      const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
       setListOfCoins(response.data);
       //console.log(response.data);
    };

    loadCoins();
  }, [])

  
  return (
    <section className='home'>

        <input className='search' type='text' onChange={(e) => setTextSearch(e.target.value)} placeholder='Coins...' />
        
        <section className='coin__list'>
        { listOfCoins.filter((listOfCoins) => 
          listOfCoins.name.toLowerCase().includes(textSearch)
          ).map((listOfCoins) => {
          return (
            <Card
              url = {`/coin/${listOfCoins.id}`}
              key = {listOfCoins.id}
              alt={listOfCoins.name}
              image={listOfCoins.image}
              name={listOfCoins.name}
              symbol={listOfCoins.symbol}
              price={listOfCoins.current_price}
            />
          )
          
        })}
        </section>
      </section>   
  )
}

export default Home
