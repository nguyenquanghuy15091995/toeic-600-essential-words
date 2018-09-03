export const getDataFromLessonList = (id, lessons) => {
  if (id === null || id === undefined || !Array.isArray(lessons)) return null;
  const result = lessons.find((lesson) => lesson.id === id);
  return result;
};

export const mixDataToLessonList = (dataList, lessons) => {
  if (!Array.isArray(dataList) || !Array.isArray(lessons)) return [];
  const results = [];
  lessons.forEach((lesson) => {
    const dataTemp = dataList.find((data) => data.lessonId === lesson.id);
    if (isNotNullAndUndefined(dataTemp)) {
      results.push({
        ...lesson,
        words: dataTemp.words,
      })
    } else {
      results.push({
        ...lesson,
        words: [],
      })
    }
  });
  return results;
};

export const isNotNullAndUndefined = (value) => (value !== undefined && value !== null);


