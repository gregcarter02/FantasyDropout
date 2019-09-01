using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace FantasyDropout.DataLayer.DataTypes
{
    public class PlayerType
    {

        [JsonProperty("playerId")]
        public string PlayerId { get; set; }

        [JsonProperty("position")]
        public string Position { get; set; }

        [JsonProperty("displayName")]
        public string DisplayName { get; set; }

        [JsonProperty("fname")]
        public string Fname { get; set; }

        [JsonProperty("lname")]
        public string LastName { get; set; }

        [JsonProperty("team")]
        public string Team { get; set; }

        [JsonProperty("byeWeek")]
        public string ByeWeek { get; set; }

        [JsonProperty("standDev")]
        public string StandDev { get; set; }

        [JsonProperty("nerdRank")]
        public string NerdRank { get; set; }

        [JsonProperty("positionRank")]
        public string PositionRank { get; set; }

        [JsonProperty("overallRank")]
        public int OverallRank { get; set; }
    }
}
