import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./components/table/table";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://randomuser.me/api/");
      setData(result.data.results[0]);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Table />
    </div>
  );
}

export default App;
