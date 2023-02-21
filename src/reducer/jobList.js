export const initialState = {
  data: [],
  isLoading: false,
  error: false,
};

const jobListReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "JOB_LIST_REQUEST":
      return { ...state, isLoading: true };
    case "JOB_LIST_SUCCESS":
      return { ...state, data: payload.data, isLoading: false };
    case "JOB_LIST_ERROR":
      return { ...state, isLoading: false, error: "Job list Api error" };
    default:
      throw new Error(`No case for type ${type} found in jobListReducer.`);
  }
};

export default jobListReducer;
