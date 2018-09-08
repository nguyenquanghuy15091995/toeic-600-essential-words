import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import VolumnUp from '@material-ui/icons/VolumeUpRounded';
import Switch from '@material-ui/core/Switch';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import './word-card.css'

class WordCard extends Component {
  render() {
    const { word, positionCount, isTranslated, handleWordTranslate } = this.props;
    const { translated } = word;
    return (
      <div className="block-word">
        <Chip
          avatar={
            <Avatar className="block-word-chip-avatar">
              {positionCount + 1}
            </Avatar>
          }
          label={<Typography variant="title" className="block-word-chip-title-content">{`${word.label} (${word.type})`}</Typography>}
          className="block-word-chip-title"
          color="secondary"
        />
        <div className="block-word-translate-toggle">
          <Switch
            checked={isTranslated}
            onChange={() => handleWordTranslate(positionCount)}
          />
        </div>
        <div className="block-word-content">
          <div className="block-word-sound">
            <IconButton aria-label="Delete">
              <VolumnUp />
            </IconButton>
            <Typography variant="subheading">
              {word.phonetic}
            </Typography>
          </div>
          <ExpansionPanel expanded={isTranslated} className="block-word-content-translated">
            <ExpansionPanelDetails className="block-word-content-translated-details">
              <Typography variant="subheading" className="block-word-content-translated-text" gutterBottom>
                {'('}{
                  translated.labels.map((element, index) => index === 0 ? `${element}` : `, ${element}`)
                }{')'}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <Typography variant="subheading" gutterBottom>
            {`- ${word.description}.`}
          </Typography>
          <ExpansionPanel expanded={isTranslated} className="block-word-content-translated">
            <ExpansionPanelDetails className="block-word-content-translated-details">
              <Typography variant="subheading" className="block-word-content-translated-text" gutterBottom>
                {`(${translated.description})`}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <Typography variant="subheading" gutterBottom>
            <span className="block-word-content-example-subject">{'Example:'}</span>
            {` ${word.example}.`}
          </Typography>
          <ExpansionPanel expanded={isTranslated} className="block-word-content-translated">
            <ExpansionPanelDetails className="block-word-content-translated-details">
              <Typography variant="subheading" className="block-word-content-translated-text" gutterBottom>
                {`(${translated.example})`}
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </div>
    );
  }
}

export default WordCard;
