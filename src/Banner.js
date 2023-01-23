import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "./Request";
import axios from "./axios";

function Banner() {

    const [movie,setMovie] = useState([])

    useEffect(()  => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1 )
                ]
            );
            return request;
        }
        fetchData();
    },[])

    console.log(movie);

    function truncate(string, n) {
      return string?.length > n ? string.substring(0, n-1)+  '...': string; 
    }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        // backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/1ecf18b2-adad-4684-bd9a-acab7f2a875f/6abbb576-106a-4175-a16e-af91cf881736/IN-en-20230116-popsignuptwoweeks-perspective_alpha_website_large.jpg")`,
        // backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/7/71/Black.png")`,
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.
      backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{movie?.original_title || movie?.name }</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play </button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description"> 
        { truncate(movie?.overview,150)}</h1>
      
      </div>
      <div className="banner_fadeBottom"/>
    </header>
  );
}

export default Banner;
