import axios from "axios";

import * as actions from "./actions";

const getPlayerRankings = (val: boolean) => {
  console.log('operations');
  return (dispatch: any) => {
    dispatch(actions.getPlayerRankings(val));

    axios.get(`api/PlayerData/GetRankingsByFormat?isPprScoring=${val}`)
      .then((response: any) => {
        dispatch(actions.getPlayerRankingsSuccess(response.data));
      })
      .catch((err: Error) => {
        console.log(err);
        dispatch(actions.getPlayerRankingsFailure(err));
      });
  };
};

export {
    getPlayerRankings
};