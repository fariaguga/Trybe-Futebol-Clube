import Matches from '../models/matches.model';
import Teams from '../models/teams.model';

class MatchesService {
  static getAll = async () => {
    const matchesData = await Matches.findAll({
      include: [
        { model: Teams, as: 'homeTeam', attributes: ['teamName'] },
        { model: Teams, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });
    return matchesData;
  };
}

export default MatchesService;
