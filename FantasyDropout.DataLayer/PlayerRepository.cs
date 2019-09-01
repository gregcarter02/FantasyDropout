using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;
using System.IO;
using FantasyDropout.DataLayer.DataTypes;


namespace FantasyDropout.DataLayer
{
    public class PlayerRankingRepository : IPlayerRankingRepository
    {
        const string PLAYER_RANKINGS_PPR = "PlayerRankings_PPR.json";
        const string PLAYER_RANKINGS_STANDARD = "PlayerRankings_Standard.json";
        const string PATH = "../FantasyDropout.DataLayer/Data/";

        RankingType playerRankings;

        public RankingType GetRankingsByFormat(bool isPprScoring)
        {
            var fileName = (isPprScoring) ? PLAYER_RANKINGS_PPR : PLAYER_RANKINGS_STANDARD;
            string result = string.Empty;

            using (StreamReader reader = new StreamReader(PATH+fileName))
            {
                result = reader.ReadToEnd();
            }
            playerRankings = JsonConvert.DeserializeObject<RankingType>(result);

            return playerRankings;
                
        }

        public void Update(PlayerType playerType)
        {
            var test = 0;

        }
        public void GetPlayerById(int id)
        {
            var test = id;

        }
        //IQueryable<T> SearchFor(Expression<Func<T, bool>> predicate);

    }
}
