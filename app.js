import React, { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const searchPosts = async () => {
    const response = await fetch("/api/posts");
    const posts = await response.json();

    const filteredPosts = posts.filter((post) => {
      return post.tags.includes(searchQuery);
    });

    return filteredPosts;
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search posts..."
        onChange={handleChange}
      />
      <ul>
        {searchPosts().map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;