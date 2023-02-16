import { useState, useEffect } from "react";

function Main() {
  const apiKey = "f8dfde8d-2109-4a10-99bf-702969dc8fa3";
  const [swData, setData] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "52e86caffdmshfab4f64ca02d928p13fd42jsnc5c2d058f202",
        "X-RapidAPI-Host": "indeed-indeed.p.rapidapi.com",
      },
    };
    fetch(
      "https://indeed-indeed.p.rapidapi.com/apisearch?publisher=undefined&v=2&format=json&callback=%3CREQUIRED%3E&q=java&l=austin%2C%20tx&sort=%3CREQUIRED%3E&radius=25&st=%3CREQUIRED%3E&jt=%3CREQUIRED%3E&start=%3CREQUIRED%3E&limit=%3CREQUIRED%3E&fromage=%3CREQUIRED%3E&highlight=%3CREQUIRED%3E&filter=%3CREQUIRED%3E&latlong=%3CREQUIRED%3E&co=%3CREQUIRED%3E&chnl=%3CREQUIRED%3E&userip=%3CREQUIRED%3E&useragent=%3CREQUIRED%3E",
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
}

export default Main;
