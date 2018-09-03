import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import './lesson.css';

class LessonCard extends Component {
  render() {
    const { lesson } = this.props;
    return (
      <Grid item xs={12} sm={6} md={4} lg={4} xl={3} className="lesson">
        <Grid container justify="center">
            <Card elevation={4} className="block-card-view">
              <CardMedia
                className="card-media"
                image={lesson.image}
                title={lesson.topic}
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2" className="block-topic">
                  {lesson.topic}
                </Typography>
                <Typography component="p" className="block-sub-text">
                  {lesson.phonetic}
                </Typography>
              </CardContent>
              <CardActions className="block-lesson-action">
                <Button size="small" color="primary" component={Link} to={lesson.routerURL}>Learn More</Button>
              </CardActions>
            </Card>
        </Grid>
      </Grid>
    );
  }
}

export default LessonCard;
