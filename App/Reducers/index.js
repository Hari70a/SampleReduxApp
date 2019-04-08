import repoReducer from "./RepoReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  gitRepos: repoReducer
});
