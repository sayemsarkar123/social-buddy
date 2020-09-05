import React, { useEffect, useState } from 'react';
import './PostDetails.css';
import { useParams } from 'react-router-dom';
import { fetchData } from '../Posts/Posts';
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core';
import Comment from '../Comment/Comment';

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetchData(`https://jsonplaceholder.typicode.com/posts/${id}`).then((data) =>
      setPost(data)
    );
    fetchData(
      `https://jsonplaceholder.typicode.com/comments/?postId=${id}`
    ).then((data) => setComments(data));
  }, []);
  return (
    <div style={{ padding: '16px' }}>
      <Grid container spacing={2}>
        <Grid item md={12}>
          <Card>
            <CardActionArea>
              <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                  {post.id}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {post.body}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        {
          comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
        }
      </Grid>
    </div>
  );
};

export default PostDetails;
