import { connect } from "react-redux";
import PlayerRankingComponent from "./PlayerRankingComponent";
import * as operations from "./ducks/operations";
import { IRootState } from "./types";

const mapStateToProps = (state: IRootState) => {
  return {
    playerRankings: state.playerRankings.playerRankings,
    loading: state.playerRankings.loading,
    loadError: state.playerRankings.loadError
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getPlayerRankings: (val: boolean) => dispatch(operations.getPlayerRankings(val))
  };
};

const PlayerRankingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerRankingComponent);

export default PlayerRankingContainer;