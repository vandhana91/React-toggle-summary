//import logo from './logo.svg';
import React,{useState} from 'react';
//import {component} from 'react';
import './App.css';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';


function App() {
  
  const movies=[
    {
      name:"Master",
    image:'https://m.media-amazon.com/images/M/MV5BNmU1OTYzYzAtMDcyOS00MDI0LTg2ZmQtYTEyMDdmMmQ0MjY5XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_FMjpg_UX1000_.jpg',
    
    rating:"⭐8.8",
    summary:"John Durairaj, an alcoholic professor, gets enrolled to teach at a juvenile facility, unbeknownst to him. He soon clashes with a ruthless gangster, who uses the children as scapegoats for his crimes."
    },
    {
      name:"96",
    image:'https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/96-Trisha-Vijay-Sethupathi-Trailer-Audio.jpg?itok=nqkQVh-B',
    
    rating:"⭐8.5",
    summary:'K Ramachandran, a photographer, gets nostalgic after he visits his school in his hometown. During a reunion with his classmates, he meets Janaki, his childhood sweetheart.'
    },
    {
      name:"Doctor",
      image:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202104/Sivakarthikeyan_Doctor_OTT_rel_1200x768.jpeg?KNWpemxGnQ064XxcnK.Kh7lsfpemnZQJ&size=770:433',
     
      rating:"⭐8.2",
      summary:'When a military doctor tracks down his former fiancees kidnapped niece, he discovers a complex human trafficking ring in Goa. He then weaves an intricate trap to capture the perpetrators.'
      },
      {
        name:"Bahubali 2",
        image:'https://m.media-amazon.com/images/M/MV5BODY0NTQ0MzctNmNlMi00MWUxLThmNTEtMGFhNjczYmVjYjcxXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg',
        
        rating:"⭐9.2",
        summary:'After learning that his father was brutally killed by Bhallaladeva, Mahendra Baahubali raises an army to defeat him and release his mother from the formers captivity.'
        },
        {
          name:"Soorarai Pottru",
          image:'https://gumlet.assettype.com/swarajya%2F2020-11%2F3ad8ec93-097f-4fd6-94b1-671d4c532895%2Fsoo.jpg?w=1200&auto=format%2Ccompress&ogImage=true',
          
          rating:"⭐7.9",
          summary:'Maara, a young man from a remote village, dreams of launching his own airline service. However, he must overcome several obstacles and challenges in order to be successful in his quest.'
          },
          {
            name:"Maanadu",
            image:'https://upload.wikimedia.org/wikipedia/en/thumb/c/c4/Maanaadu_poster.jpg/220px-Maanaadu_poster.jpg',
            
            rating:"⭐8.5",
            summary:'On the day of a public conference by the states Chief Minister, his bodyguard and a police officer become stuck in a time loop.'
            },
            {
              name:"Jai Bhim",
              image:'https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/jai_bhim_twiiter_review_1.jpg',
              
              rating:"⭐8.9",
              summary:'A brave activist-lawyer fights for justice when a poor tribal man, who gets falsely accused of robbery, goes missing from the police custody.'
              },
              {
                rating:"⭐8.9",
                image:'https://images.indianexpress.com/2018/11/sarkar-759-1.jpg',
                name:"Sarkar",
               
                summary:'An NRI businessman returns home and learns about the practice of fraudulent voting. When he decides to investigate, two corrupt politicians strive to block his path.'
                },
  

  ];
  const [name,setName] = useState("");
  const [image,setPoster] = useState("");
  const [rating,setRating] = useState("");
  const [summary,setSummary] = useState("");
  const [movieList,setMovieList] = useState(movies);
  
  return (
   

    <div className="App">
       <div className='add-movie'>
      {/*<h3> Enter Movie Details</h3>*/}
      <input
        value = {name}
        onChange= {(event)=>setName(event.target.value)}
        placeholder = "Name"
      />
      <input
        value = {image}
        onChange= {(event)=>setPoster(event.target.value)}
        placeholder = "Poster"
      />
      <input
        value = {rating}
        onChange= {(event)=>setRating(event.target.value)}
        placeholder = "Rating"
      />
      <input
        value = {summary}
        onChange= {(event)=>setSummary(event.target.value)}
        placeholder = "Summary"
      />
      
      <Button onClick={()=>{
        const newMovie={
          
          name: name,
          image:image,
          rating : rating,
          summary: summary
        };
        console.log(newMovie);
        setMovieList([...movieList,newMovie]);
      }}
      variant="outlined"
      >
          Add Movie
      </Button>
      
    </div>
      <br>
      </br>
      <div className='cart'>
        </div>
        <br></br>
      <section className='movie-list'>
      {movieList.map((movie)=>(
        <Cart
        image={movie.image}
        name={movie.name}
        rating={movie.rating}
        summary={movie.summary}
        
        />
        )
      )}
      </section>
      
    </div>
 
  );
}

export default App;

function Cart({image,name,rating,summary}){
  const[show,setShow] = useState(true);
 
  return(
    
    <div className='movie'>
     
      <img src={image}
      alt='movie'
      className='movie-image'/>
      <div className='movie-desc'>
      <h3 className='movie-name'>{name}</h3>
      <h3 className='rating'>{rating} </h3>
      </div>
      <button onClick={()=>setShow(!show)} >
        Toggle Summary
        </button>
        
      {/*<p className='summary'>{summary}</p>*/}
      {show? <p className='summary'>{summary}</p>: ""}
      
      <Counter/>
      </div>
  );
}

function Counter(){
  const [like,setLike] = useState(0);
  const [disLike,setDisLike] = useState(0);
  return(
    <div className='counter'>
      <IconButton onClick={()=>setLike(like + 1)}
       color="primary"
       aria-label="add to shopping cart"
      >
        <Badge badgeContent={like} color="primary">
        👍
        </Badge>
      </IconButton>
      <IconButton onClick={()=>setDisLike(disLike + 1)}
      color="error"
      aria-label="add to shopping cart"
      >
      <Badge badgeContent={disLike} color="error">
        👎
        </Badge>
      </IconButton>
      
    </div>
  );

}

//setSearch(search + 1)
//onClick={()=>addToCart(dress)}