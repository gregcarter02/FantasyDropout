export interface IPlayerRankingsByFormat {
  playerRankings: IPlayerRanking[];
  isPprScoring: boolean;
}
export interface IPlayerRanking {
  playerId: string;
  displayName: string;
  position: string;
  positionRank: number;
  overallRank: number;
  byeWeek: number;
  }
  
  export interface IPlayerRankingsProps {
    playerRankingsByFormat: IPlayerRankingsByFormat;
    loading: boolean;
    loadError: string | null;
    getPlayerRankings: (val: boolean) => void;
  }
  
  export interface IRootState {
    playerRankings: IPlayerRankingsState;
  }
  
  export interface IPlayerRankingsState {
    playerRankingsByFormat: IPlayerRankingsByFormat;
    loading: boolean;
    loadError: string | null;
  }