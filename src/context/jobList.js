import { createContext, useReducer, useContext } from "react";
import jobListReducer, { initialState } from "../reducer/jobList";

const JobListContext = createContext(initialState);

export const JobListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(jobListReducer, initialState);

  const value = {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error,
    dispatch,
  };
  return (
    <JobListContext.Provider value={value}>{children}</JobListContext.Provider>
  );
};

const useJobList = () => {
  const context = useContext(JobListContext);

  if (context === undefined) {
    throw new Error("useShop must be used within JobListContext");
  }

  return context;
};

export default useJobList;
