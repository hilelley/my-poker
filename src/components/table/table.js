import React, { useState, useEffect } from "react";
import "./table.css";
import Player from "./components/player/player";
import Settings from "./components/settings/settings";
import axios from "axios";
import ReactSlider from "react-slider";

function Table() {
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://randomuser.me/api/");
      setData(result.data.results[0]);
    };
    fetchData();
  }, []);
  return (
    <div className="table">
      {data.name && (
        <div className="tabelImg">
          <Player
            className="p2"
            pictuer="/images/dmoUser.png"
            name={
              <span>
                Hilel
                <br></br>
                Ley
              </span>
            }
            credit={44}
          />
          <Player
            className="p5"
            pictuer={data.picture.thumbnail}
            name={
              <span>
                {data.name.first}
                <br></br>
                {data.name.last}
              </span>
            }
            credit={44}
          />
        </div>
      )}
      <Settings />
    </div>
  );
}
export default Table;
