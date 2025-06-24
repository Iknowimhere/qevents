import EventCard from "@/components/EventCard";
import { Suspense } from 'react';

async function getEvents(searchParams) {
  const res = await fetch("https://qevent-backend.labs.crio.do/events", { next: { revalidate: 3600 } });
  let events = await res.json();
  
  const artist = searchParams?.artist;
  const tag = searchParams?.tag;
  
  if (artist) {
    events = events.filter(event => event.artist === artist);
  }
  if (tag) {
    events = events.filter(event => event.tags?.includes(tag));
  }
  return events;
}

export default async function Events({ searchParams }) {
  const data = await getEvents(searchParams);

  return (
    <Suspense fallback={<div>Loading events...</div>}>
      <div className="flex flex-wrap justify-center">
        {data?.map(eventData => (
          <EventCard eventData={eventData} key={eventData.id} />
        ))}
      </div>
    </Suspense>
  );
}