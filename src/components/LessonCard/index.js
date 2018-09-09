import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class LessonCard extends Component {
  render() {
    const { lesson } = this.props;
    return (
      <Grid item xs={12} sm={6} md={4} lg={4} xl={3} className="block-lesson-card-grid">
        <Grid container justify="center">
            <Card elevation={4} className="block-lesson-card">
              <CardMedia
                className="block-lesson-card-media"
                image={lesson.image}
                title={lesson.topic}
              />
              <CardContent className="block-lesson-card-content">
                <Typography gutterBottom variant="headline" component="h2" className="block-lesson-card-content-text">
                  {lesson.topic}
                </Typography>
                <Typography component="p" className="block-lesson-card-content-text">
                  {lesson.phonetic}
                </Typography>
              </CardContent>
              <CardActions className="block-lesson-card-action">
                <Button size="small" color="primary" component={Link} to={lesson.routerURL}>Learn More</Button>
              </CardActions>
            </Card>
        </Grid>
      </Grid>
    );
  }
}

export default LessonCard;
