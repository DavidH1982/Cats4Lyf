import "./App.css";
import React, { useState, useEffect } from "react";

const faker = require("faker");
const randomName = () => {
  return faker.name.firstName();
};
const randomBreed = () => {
  return faker.animal.cat();
};
const age = () => {
  return Math.floor(Math.random() * 14) + 1;
};

const App = () => {
  useEffect(() => {
    photoHandler();
  }, []);

  const [data, setData] = useState([]);
  const [shown, setShown] = useState("false");

  const handleToggle = () => {
    setShown(!shown);
  };

  const boyOrGirl = () => {
    if (Math.ceil(Math.random() * 2) === 1) {
      return "Boy";
    } else {
      return "Girl";
    }
  };

  const photoHandler = async () => {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=24`
    );
    const data = await response.json();
    setData(data);
  };

  return (
    <div className="petPics">
      <div>
        <div className="clickForMore">
          <p>Click on any image for more information</p>
        </div>
        <ol>
          {data.length > 0 &&
            data.map((cat, number) => {
              return (
                <>
                  <li key={number.toString()}>
                    <div className="photoDiv">
                      <div
                        className={shown ? "hiddenInfo" : "shownInfo"}
                        onClick={() => handleToggle()}
                      >
                        <div>
                          <p>Name: {randomName()}</p>
                        </div>
                        <div>
                          <p>Breed: {randomBreed()}</p>
                        </div>
                        <div>
                          <p>Age: {age()}</p>
                        </div>
                        <div>
                          <p>Gender: {boyOrGirl()}</p>
                        </div>
                        <button className="addBasket">Add to Basket</button>
                        <div className="clickToClose">
                          <p>Click anywhere within this box to close</p>
                        </div>
                      </div>
                      <img
                        className="profilePicture"
                        src={cat.url}
                        alt=""
                        onClick={handleToggle}
                      />
                    </div>
                  </li>
                </>
              );
            })}
        </ol>
      </div>
    </div>
  );
};

export default App;
