'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ArtistCard from "@/components/ArtistCard";

const Artists = () => {
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchArtists = async () => {
      const res = await fetch("https://qevent-backend.labs.crio.do/artists");
      const artists = await res.json();
      setData(artists);
    };
    fetchArtists();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {data.map((artist, index) => (
        <ArtistCard artistData={artist} key={index} />
      ))}
    </div>
  );
};

export default Artists;