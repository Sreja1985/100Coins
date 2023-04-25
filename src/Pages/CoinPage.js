import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function CoinPage() {

  let {id} = useParams(); 
  const [coin, setCoin] = useState({
    name: "",
    img: "",
    rank: "",
    symbol: "",
    totalSupply: "",
    circulatingSupply: "",
    platform: "",
    price:""
  });

  const [money, setMoney] = useState("1");

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then((response) => {
      setCoin({
        name: response.data.name,
        img: response.data.image.large,
        rank: response.data.coingecko_rank,
        symbol: response.data.symbol.toUpperCase(),
        totalSupply: response.data.market_data.total_supply,
        circulatingSupply: response.data.market_data.circulating_supply,
        platform: response.data.asset_platform_id,
        price: response.data.market_data.current_price.usd,
      });
      //console.log(response.data);
   })
}, [id]);

  

  return (
    <main className='coin__page'>
          <Helmet>
                <title>100Coins-{coin.symbol}</title>
          </Helmet>
      <section className='coin__cards'>
        <article className='card__image'>
            <img alt={coin.name} src={coin.img} />
            <div className='card__math'>
              <p>
                <strong>Coins: </strong> 
                <input 
                  type='text'
                  onChange={e => setMoney(e.target.value)} 
                  value={money} 
                  name="money" 
                  maxLength="10"
                /> 
              </p>
              <p>
                <strong>Price:</strong> 
                <input 
                  type='text' 
                  value={money * (coin.price)}
                  name="price" 
                  maxLength="10"
                  disabled
                /> 
              </p>
            </div>
        </article>

        <article className='card__data'>
          <p><strong>Rank:</strong>  {coin.rank}.</p>
          <p><strong>Name: </strong>  {coin.name}</p>
          <p><strong>Symbol:</strong>  {coin.symbol}</p>
          <p><strong>In action:</strong>  {Math.trunc(coin.circulatingSupply)}</p>
          <p><strong>Total Supply:</strong>  {Math.trunc(coin.totalSupply)}</p> 
          <p><strong>Platform: </strong> {(coin.platform) ? (coin.platform) : (coin.name.toLocaleLowerCase())}</p>       
        </article>
        </section>
    </main>
  )
}

export default CoinPage
