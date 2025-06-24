"use client";

import React, { useState } from "react";

const initialState = {
  name: "",
  location: "",
  date: "",
  time: "",
  tags: "",
  artist: "",
  price: "",
  description: "",
};

const EventCreateForm = ({ onSubmit }) => {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Prepare payload
    const payload = {
      ...form,
      tags: form.tags.split(",").map((tag) => tag.trim()).filter(Boolean),
      price: Number(form.price),
    };

    await onSubmit(payload);
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 mt-10 flex flex-col gap-6"
    >
      <h2 className="text-3xl font-bold bg-gradient-to-br from-orange-400 to-teal-600 bg-clip-text text-transparent mb-4">
        Create Event
      </h2>
      <div className="flex flex-col gap-4">
        <input
          className="border rounded-md px-4 py-2"
          name="name"
          placeholder="Event Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="border rounded-md px-4 py-2"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          required
        />
        <div className="flex gap-4">
          <input
            className="border rounded-md px-4 py-2 w-1/2"
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
          <input
            className="border rounded-md px-4 py-2 w-1/2"
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            required
          />
        </div>
        <input
          className="border rounded-md px-4 py-2"
          name="artist"
          placeholder="Artist"
          value={form.artist}
          onChange={handleChange}
          required
        />
        <input
          className="border rounded-md px-4 py-2"
          name="tags"
          placeholder="Tags (comma separated)"
          value={form.tags}
          onChange={handleChange}
          required
        />
        <input
          className="border rounded-md px-4 py-2"
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
        />
        <textarea
          className="border rounded-md px-4 py-2 min-h-[100px]"
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="bg-gradient-to-r from-orange-400 to-teal-600 text-white px-6 py-2 rounded-md font-medium hover:opacity-80 transition-all"
      >
        {loading ? "Creating..." : "Create Event"}
      </button>
    </form>
  );
};

export default EventCreateForm;