const initialState = {
    currentQuestionIndex: 1,
    answeredQuestions: [],
  };
  
  const questionReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CURRENT_QUESTION':
        return { ...state, currentQuestionIndex: action.payload };
      case 'ADD_ANSWERED_QUESTION':
        return {
          ...state,
          answeredQuestions: [...state.answeredQuestions, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default questionReducer;