import './carousel.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function CarouselSlider(props) {
  if (props.content.isLoading) {
    return(
      <h1 className='title-query'>Data is Loading</h1>
    )
  }

  return(
    <main>
      <Carousel showThumbs='false' showArrows='true' infiniteLoop='true' className='carouse'>
        {props.content.items.map((game) => {
      var link = `games/${game.id}`
          return (
            <div key={game.id}>
              <img className='img-carouse' src={game.background_image} alt="" />
              <a href={link}><p className='legend'>{game.name}</p></a>
            </div>
          )
        
        })}
          
      </Carousel>
    </main>
  )
}