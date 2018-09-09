import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { TOPIC_CLASSIFICATIONS } from '../constants';
import LessonCard from '../../../components/LessonCard';
import * as lessonListActions from './actions';

class LessonList extends PureComponent {
  render() {
    const { lessons, lessonListInfo, toggleExPanel } = this.props;
    return (
      <div className="block-lesson-list">
        {
          TOPIC_CLASSIFICATIONS.ALL.map((classification) => {
            const lessonFiltereds = lessons.filter((element) => element.classification === classification.value);
            return (
              <div key={classification.value} className="block-topic-area">
                <ExpansionPanel expanded={lessonListInfo.exPanel[`${classification.value}`]} onChange={() => toggleExPanel(classification.value)} className="block-expansion">
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className="block-expansion-summary">
                    <Typography variant="title" component="h2" className="block-expansion-summary-text">{classification.label.toUpperCase()}</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className="block-expansion-details">
                    {
                      lessonFiltereds.map((lesson) => <LessonCard key={lesson.id} lesson={lesson} />)
                    }
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
            );
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  lessonListInfo: state.lessonListInfo,
});

const mapDispatchToProps = (dispatch) => ({
  toggleExPanel: bindActionCreators(lessonListActions.toggleExPanelByClass, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(LessonList);
