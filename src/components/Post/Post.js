import React from 'react';
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const Post = ({ post }) => {
  const { id, title, body } = post;
  const history = useHistory();
  return (
    <Grid item md={4}>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            onClick={() => history.push(`/post/${id}`)}
            size="small"
            color="primary"
          >
            Get Details
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Post;
