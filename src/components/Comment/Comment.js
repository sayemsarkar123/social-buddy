import React, { useState, useEffect } from 'react';
import './Comment.css';
import { Grid } from '@material-ui/core';
import { fetchData } from '../Posts/Posts';

const Comment = ({ comment }) => {
  const { id, body } = comment;
  const [userData, setUserData] = useState(false);
  useEffect(() => {
    fetchData(
      `https://randomuser.me/api/?seed=${id}?inc=name,email,picture`
    ).then((data) => setUserData(data.results[0]));
  }, []);
  let userFullName;
  let userPic;
  if (userData) {
    userFullName = `${userData.name.title} ${userData.name.first} ${userData.name.last}`;
    userPic = userData.picture.medium;
  }
  return (
    <Grid container item md={12}>
      <Grid item md={1}>
        <img style={{ borderRadius: '50%' }} src={userPic} alt={userFullName} />
      </Grid>
      <Grid item md={11}>
        <p>{userFullName}</p>
        <p>{body}</p>
      </Grid>
    </Grid>
  );
};

export default Comment;
