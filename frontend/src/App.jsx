import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [data, setData] = useState("");
  const getData = async () => {
    const res = await axios.get("http://localhost:3000/getData");
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return <div>{data}</div>;
}
