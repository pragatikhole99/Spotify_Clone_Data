import { useEffect, useState } from "react";

function Playlist() {
  const [playlist, sePlaylist] = useState([]);

  const getPlaylist = async () => {
    let data = await fetch(
      "https://v1.nocodeapi.com/pskhole99/spotify/hkUAucRhbrcbXIfy/playlists?id=3cEYpjA9oz9GiPac4AsH4n"
    );
    let convertedData = await data.json();
    console.log("Playlist data", convertedData.tracks.items);
    sePlaylist(convertedData.tracks.items);
  };

  useEffect(() => {
    getPlaylist();
  }, []);

  return (
    <>
      <h1 className="text-center bg-dark text-white py-3 px-3">
        Hello Playlist section of Spotify Clone App
      </h1>

      <div className="container">
        <div className="row mb-3">
          {playlist.map((item) => {
            return (
              <div
                className="col-md-4 col-sm-12 col-lg-4 col-xs-12 mt-3"
                key={item.track.id}
              >
                <div className="card shadow">
                  <img
                    src={item.track.album.images[0].url}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">
                      <b>Artist Name:</b> {item.track.album.artists[0].name}
                    </p>
                    <p className="card-text">
                    <b>Released Date:</b> {item.track.album.release_date}
                    </p>
                    <audio src={item.track.preview_url} controls></audio>
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

export default Playlist;
