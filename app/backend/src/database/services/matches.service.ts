import Matches from '../models/matches.model';
import Teams from '../models/teams.model';
import { IMatch } from '../../interfaces';

class MatchesService {
  static getAll = async () => {
    const matchesData = await Matches.findAll({
      include: [
        { model: Teams, as: 'teamHome', attributes: ['teamName'] },
        { model: Teams, as: 'teamAway', attributes: ['teamName'] },
      ],
    });
    return matchesData;
  };

  static createMatches = async (data: IMatch) => {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress } = data;
    const match = await Matches.create({
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
      inProgress,
    });
    return {
      id: match.id,
      homeTeam,
      homeTeamGoals,
      awayTeam,
      awayTeamGoals,
      inProgress,
    };
  };

  static finishMatches = async (id: number) => {
    const response = await Matches.update({ inProgress: false }, { where: { id } });
    return response;
  };

}

export default MatchesService;
