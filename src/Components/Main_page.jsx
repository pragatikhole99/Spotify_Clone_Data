import React, { useState, useEffect } from "react";
import axios from "axios";
function Main_page() {
  const [data, setData] = useState([]);
  


  const getTrack = async () => {
    let data = await fetch(
      "https://v1.nocodeapi.com/pskhole99/spotify/hkUAucRhbrcbXIfy/search?q=daku&type=track"
    );
    let convertedData = await data.json();
    console.log("Song data", convertedData.tracks.items);
    setData(convertedData.tracks.items);
  };

 


  useEffect(() => {
    getTrack();
  }, []);

  return (
    <>
      <h1 className="text-center bg-dark text-white py-3 px-3">Hello welocme to Spotify Clone App</h1>

      <div className="container">
        <div className="row mb-3">
        {data.map((item) => {
        return (
         <div className="col-md-4 col-sm-12 col-lg-4 col-xs-12 mt-3" key={item.id}>
           <div className="card shadow">
            <img src={item.album.images[0].url} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">
               Artist Name: {item.album.artists[0].name}
              </p>
              <p className="card-text">
               Released Date: {item.album.release_date}
              </p>
             <audio src={item.preview_url} controls></audio>
            </div>
          </div>
         </div>
        );
      })}
        </div>
      </div>
    </>
  );
}

export default Main_page;
