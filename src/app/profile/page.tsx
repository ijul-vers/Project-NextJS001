// src/app/profile/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const res = await fetch("/api/news", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });

    if (res.ok) {
      console.log("News saved successfully");
      router.push("/profile");
    } else {
      console.error("Error saving news");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="bg-white p-4 rounded shadow-sm">
        <h2 className="text-center mb-4">Profile Page</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="content" className="form-label">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              placeholder="Content"
              onChange={(e) => setContent(e.target.value)}
              required
              className="form-control"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
