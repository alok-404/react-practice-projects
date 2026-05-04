import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios"

export const AnimeDetail = () => {
  const { id } = useParams();

  const fetchDetail = async () => {
    try {
      const res = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
      console.log(res.data);
    } catch {
      console.log("Failed to fetch anime details");
    } finally {
      //   setLoading(false);
    }
  };

  fetchDetail

  return <div>AnimeDetail</div>;
};
