import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Post from '../Post/Post';

export const fetchData = async (url) => {
  const res = await fetch(url);
  return res.json();
};

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchData('https://jsonplaceholder.typicode.com/posts').then((data) =>
      setPosts(data)
    );
  }, []);
  return (
    <Grid container spacing={2}>
      {posts.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </Grid>
  );
};

export default Posts;
