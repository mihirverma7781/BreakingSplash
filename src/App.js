import React,{useState, useEffect} from 'react';
import  CharacterGrid from './components/characters/CharacterGrid'
import axios from 'axios'
import './App.css';
import Header from './components/ui/Header'
import Seacrh from './components/ui/Seacrh';


const App=()=> {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

useEffect(() => {
  axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
  .then(result=>{
      console.log(`-----------then block----------`)
      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
  }
  )
  .catch(err=>{
      console.log('--------catch block---------')
      setItems([])
  })


}, [query])



  return (
    <div className="container">
     <Header/>
     <Seacrh getQuery={(q)=> setQuery(q)} />
     <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
