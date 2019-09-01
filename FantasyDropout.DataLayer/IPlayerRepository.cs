using System;
using System.Collections.Generic;
using System.Text;
using FantasyDropout.DataLayer.DataTypes;

namespace FantasyDropout.DataLayer
{
    public interface IPlayerRankingRepository
    {
        RankingType GetRankingsByFormat(bool isPprScoring);
        void Update(PlayerType player);
        void GetPlayerById(int id);
        //IQueryable<T> SearchFor(Expression<Func<T, bool>> predicate);

    }
}
    

