using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace FantasyDropout.DataLayer.DataTypes
{
    public class RankingType
    {

        [JsonProperty("PPR")]
        public bool isPPR { get; set; }

        [JsonProperty("DraftRankings")]
        public List<PlayerType> PlayerRankings { get; set; }

    }
}