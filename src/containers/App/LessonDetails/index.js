import React, { PureComponent } from 'react';

import DetailLessonCard from '../../../components/DetailLessonCard';

class LessonDetails extends PureComponent {
  render() {
    const { lesson } = this.props;
    return (
      <DetailLessonCard
        lesson={{
          image: lesson.image,
          topic: lesson.topic,
        }}
      >

      </DetailLessonCard>
    );
  }
}

export default LessonDetails;
