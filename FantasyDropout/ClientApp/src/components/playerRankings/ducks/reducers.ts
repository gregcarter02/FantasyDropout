import { IPlayerRanking, IPlayerRankingsState} from "../types";
import * as types from "./types";

const INITIAL_STATE: IPlayerRankingsState = {
  playerRankingsByFormat: {
    playerRankings: [] as IPlayerRanking[],
    isPprScoring: true,
  },
    loading: false,
    loadError: null,
  };




const playerRankingReducer = (state = INITIAL_STATE, action: any) => {
    switch(action.type) {
        case types.GET_PLAYER_RANKINGS_STARTED:
                return {
                    ...state,
                    loading: true,
                    loadError: null
                  };
        case types.GET_PLAYER_RANKINGS_SUCCESS:
          debugger;
            const players = action.response.map((f: any) => f as IPlayerRanking);
            return {
                ...state,
                players,
                loading: false
              };
              case types.GET_PLAYER_RANKINGS_FAILURE:
                    const error = action.error;
                    return {
                      ...state,
                      playerRankings: [],
                      loading: false,
                      loadError: error.message
                    };
                  default:
                    return state;
                }
              };


export default {
    playerRankings: playerRankingReducer
  };