"use client";

import EventCreateForm from "@/components/EventCreateForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export default function CreateEventPage() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/events");
    }
  }, [status, router]);

  const handleCreate = async (eventData) => {
    // Generate id and random image
    const id = uuidv4();
    const randomImgNum = Math.floor(Math.random() * 99) + 1;
    const image = `https://picsum.photos/300/200?random=${randomImgNum}`;

    const payload = {
      ...eventData,
      id,
      image,
    };

    try {
      const res = await fetch("https://qevent-backend.labs.crio.do/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.status === 201) {
        router.replace("/events");
      } else {
        alert("Event creation failed");
      }
    } catch (err) {
      alert("Event creation failed");
    }
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return <EventCreateForm onSubmit={handleCreate} />;
}