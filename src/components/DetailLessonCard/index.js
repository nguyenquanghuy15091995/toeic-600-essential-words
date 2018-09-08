import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';

import './detail-lesson.css';

class DetailLessonCard extends Component {
  render() {
    const { lesson, children } = this.props;
    return (
      <div className="block-detail-lesson">
        <Grow in={true} timeout={1000}>
          <Grid item xs={12} sm={12} md={10} lg={8}>
            <Grid container justify="center">
              <Card elevation={4} className="block-detail-lesson-card">
                <CardMedia
                  className="card-media"
                  image={lesson.image}
                  title={lesson.topic}
                >
                  <div className="block-card-media-content">
                    <Typography variant="display2" align="center" component="h2" className="block-detail-lesson-card-title">
                      {lesson.topic.toUpperCase()}
                    </Typography>
                  </div>
                </CardMedia>
                <CardContent>
                  {children}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grow>
      </div>
    );
  }
}

export default DetailLessonCard;
