"use client";

import VideosTable from "@/components/manage-video-table";
import { useEffect, useState } from "react";

const Manage = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch("/api/video");
        const data = await res.json();
        setVideos(data);
      } catch (err) {
        console.error("Error fetching videos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <VideosTable media={videos} />
    </>
  );
};

export default Manage;
