import { useEffect, useState } from "react";
import axios from "axios";
import Homepage from "./components/Homepage";

export default function App() {
  const [data, setData] = useState("");
  const getData = async () => {
    const res = await axios.get("/api/getData");
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Homepage />
    </div>
  );
}
