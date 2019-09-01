using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using FantasyDropout.DataLayer;
using FantasyDropout.DataLayer.DataTypes;

namespace FantasyDropout.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlayerDataController : ControllerBase
    {
        private IPlayerRankingRepository playerRankingRepository;

        public PlayerDataController()
        {
            playerRankingRepository = new PlayerRankingRepository();
        }


        [HttpGet("[action]")]
        public RankingType GetRankingsByFormat(bool isPprScoring)
        {   
            var playerRankings = playerRankingRepository.GetRankingsByFormat(isPprScoring);
            return playerRankings;
        }
    }
}