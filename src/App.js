import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import CategoryFilter from './Components/CategoryFilter';
import Loader from './Components/Loader';
import VideoList from './Components/VideoList';
import micIcon from './icons/mic.jpg';
import searchIcon from './icons/search.jpg';

function App() {
  const [allVideos, setAllVideos] = useState([]);
  const [displayVideos, setDisplayVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setLoading(true);
    axios.get('https://ypapi.formz.in/api/public/videos')
      .then(response => {
        setAllVideos(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching data: ' + err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filteredVideos = allVideos.filter(video => {
      const videoCategory = video.category.toLowerCase();
      const searchCategory = filterCategory.toLowerCase();
      return filterCategory === 'All' || videoCategory === searchCategory;
    });
    const finalVideos = searchQuery
      ? filteredVideos.filter(video => video.title.toLowerCase().includes(searchQuery.toLowerCase()))
      : filteredVideos;
    setDisplayVideos(finalVideos);
  }, [filterCategory, searchQuery, allVideos]);

  const handleVoiceSearch = () => {
    console.log('Voice search triggered');
  };

  return (
    <div className="App">
      <header className="App-header bg-dark text-white py-3 mb-4">
        <h1 className="mb-0">Video Streaming App</h1>
      </header>

      {loading && <Loader />}
      {error && <div className="alert alert-danger" role="alert">{error}</div>}
      
      <div className="container">
        <div className="search-bar-container">
          <input
            type="text"
            placeholder="Search videos..."
            className="search-bar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-bar-icon" onClick={() => handleVoiceSearch()}>
            <img src={micIcon} alt="Microphone" className="microphone-icon" />
          </button>
          <button className="search-bar-icon">
            <img src={searchIcon} alt="Search" className="search-icon" />
          </button>
        </div>
        <CategoryFilter setFilterCategory={setFilterCategory} />
        <VideoList videos={displayVideos} />
      </div>
    </div>
  );
}

export default App;
