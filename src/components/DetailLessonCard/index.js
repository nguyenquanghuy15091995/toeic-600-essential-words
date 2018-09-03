import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Zoom from '@material-ui/core/Zoom';

import './detail-lesson.css';

class DetailLessonCard extends Component {
  render() {
    const { lesson } = this.props;
    return (
      <div className="block-detail-lesson">
      <Zoom in={true}>
        <Grid item xs={12} sm={12} md={10} lg={8}>
          <Grid container justify="center">
            <Card elevation={4} className="block-detail-lesson-card">
              <CardMedia
                className="card-media"
                image={lesson.image}
                title={lesson.topic}
              >
                <div className="block-card-media-content">
                  <Typography variant="display3" align="center" component="h2" className="block-detail-lesson-card-title">
                    {lesson.topic.toUpperCase()}
                  </Typography>
                </div>
              </CardMedia>
              <CardContent>

              </CardContent>
            </Card>
          </Grid>
        </Grid>
        </Zoom>
      </div>
    );
  }
}

export default DetailLessonCard;
