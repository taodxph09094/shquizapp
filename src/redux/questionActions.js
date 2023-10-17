export const setCurrentQuestion = (index) => ({
    type: 'SET_CURRENT_QUESTION',
    payload: index,
  });
  
  export const addAnsweredQuestion = (index) => ({
    type: 'ADD_ANSWERED_QUESTION',
    payload: index,
  });