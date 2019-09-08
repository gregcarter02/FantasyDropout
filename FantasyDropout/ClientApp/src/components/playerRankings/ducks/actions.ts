import * as types from "./types";

const getPlayerRankings = (val: boolean) => ({
  type: types.GET_PLAYER_RANKINGS_STARTED,
  val,
});

const getPlayerRankingsSuccess = (response: any) => ({
  type: types.GET_PLAYER_RANKINGS_SUCCESS,
  response,
});

const getPlayerRankingsFailure = (error: any) => ({
  type: types.GET_PLAYER_RANKINGS_FAILURE,
  error,
});

export {
    getPlayerRankings,
    getPlayerRankingsSuccess,
    getPlayerRankingsFailure,
};


/*
export const actionCreators = {
  requestPlayerData: isPprScoring => async (dispatch, getState) => {
      dispatch({ type: requestPlayersType });

      const url = `api/PlayerData/GetRankingsByFormat?isPprScoring=${isPprScoring}`;



      dispatch({ type: receivePlayersType, isPprScoring, players });
  }
};
*/