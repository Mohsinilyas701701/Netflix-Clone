import './App.css';
import Row from './Row'
import requests from './requests'
import Banner from './Banner';
import Navbar from './Navbar';

function App(props) {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true} />
      <Row title = 'Trending Now' fetchUrl = {requests.fetchTrending}/>
      <Row title = 'Top Rated' fetchUrl = {requests.fetchTopRated}/>  
      <Row title = 'Action Movies' fetchUrl = {requests.fetchActionMovies}/>
      <Row title = 'Comedy Movies' fetchUrl = {requests.fetchComedyMovies}/>
      <Row title = 'Documentaries' fetchUrl = {requests.fetchDocumentaries}/>
      <Row title = 'Horror Movies' fetchUrl = {requests.fetchHorrorMovies}/>
      <Row title = 'Romantic Movies' fetchUrl = {requests.fetchRomanceMovies}/>
    
    </div>
  );
}

export default App;
