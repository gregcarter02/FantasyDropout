const requestPlayersType = 'REQUEST_PLAYERS';
const receivePlayersType = 'RECEIVE_PLAYERS';
const initialState = {
    players: {
        isPprScoring: false,
        DraftRankings: [],
    },
    isLoading: false
};

export const actionCreators = {
    requestPlayerData: isPprScoring => async (dispatch, getState) => {
        dispatch({ type: requestPlayersType });

        const url = `api/PlayerData/GetRankingsByFormat?isPprScoring=${isPprScoring}`;

        const response = await fetch(url);
        const players = await response.json();
        console.log(' api call ');
        console.log(players);

        dispatch({ type: receivePlayersType, isPprScoring, players });
    }
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === requestPlayersType) {
        return {
            ...state,
            isPprScoring: action.isPprScoring,
            isLoading: true
        };
    }

    if (action.type === receivePlayersType) {
        return {
            ...state,
            players: action.players,
            isPprScoring: action.isPprScoring,
            isLoading: false
        };
    }

    return state;
};
