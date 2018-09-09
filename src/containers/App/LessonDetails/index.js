import React, { PureComponent } from 'react';

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import LessonDetailsCard from '../../../components/LessonDetailsCard';
import WordCard from '../../../components/WordCard';

class LessonDetails extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      masterToggle: false,
      translatedToggles: new Array(props.lesson.words.length).fill(false),
    };
  }

  handleWordTranslate = (index) => {
    const togglesTemp = this.state.translatedToggles.slice();
    togglesTemp[index] = !this.state.translatedToggles[index];
    this.setState({
      translatedToggles: togglesTemp,
      masterToggle: this.getAllWordTranslateStatus(togglesTemp),
    });
  }

  handleAllWordChange = (e) => {
    this.setState({
      translatedToggles: new Array(this.props.lesson.words.length).fill(e.target.checked),
      masterToggle: e.target.checked,
    });
  }

  getAllWordTranslateStatus = (arrayToggle) => {
    const status = arrayToggle.find((element) => element === false);
    if (status === undefined || status === null) {
      return true;
    }
    return status;
  }

  render() {
    const { lesson } = this.props;
    const { translatedToggles, masterToggle } = this.state;
    return (
      <LessonDetailsCard
        lesson={{
          image: lesson.image,
          topic: lesson.topic,
        }}
      >
        <div className="block-lesson-details-toolbar">
          <FormControlLabel
            control={
              <Switch
                checked={masterToggle}
                onChange={this.handleAllWordChange}
              />
            }
            label={<Typography variant="body2">{'Translate All'}</Typography>}
            labelPlacement="start"
            className="block-lesson-details-toggle-master"
          />
        </div>
        {
          lesson.words.map((word, index) => (
            <span key={word.id}>
              <Divider className="block-lesson-details-divider" />
              <WordCard word={word} positionCount={index} isTranslated={translatedToggles[index]} handleWordTranslate={this.handleWordTranslate} />
            </span>
          ))
        }
      </LessonDetailsCard>
    );
  }
}

export default LessonDetails;
