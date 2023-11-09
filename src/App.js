
import './App.css';
import Card from './Card'
import data from './data'

function App() {
  const items = data.map(item =>{
    return (
      <Card
      key = {item.id}
      item = {item}
      // img = {item.coverImg}
      // rating = {item.stats.rating}
      // reviewCount = {item.stats.reviewCount}
      // country = {item.location}
      // title = {item.title}
      // price = {item.price}
      // openSpots = {item.openSpots}
    />
    )
  })
  return (
    <div>
      <section className='cards-list'>
        {items}
      </section>
    </div>
  )
}

export default App;
