// import { NextFetchEvent } from "next/server"
'use client';
import { useEffect, useState } from "react";
import EventCard from "@/components/EventCard";
import { useSearchParams } from "next/navigation";

const Events = () => {
  const searchParams = useSearchParams();
  const artist = searchParams.get("artist");
  const tag = searchParams.get("tag");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      let res = await fetch("https://qevent-backend.labs.crio.do/events");
      let events = await res.json();
      if (artist) {
        events = events.filter(event => event.artist === artist);
      }
      if (tag) {
        events = events.filter(event => event.tags?.includes(tag));
      }
      setData(events);
    };
    fetchEvents();
  }, [artist]);

  return (
    <div className="flex flex-wrap justify-center">
      {data?.map(eventData => (
        <EventCard eventData={eventData} key={eventData.id} />
      ))}
    </div>
  );
};

export default Events;