import Teams from '../models/teams.model';

class TeamsService {
  static getAll = async () => {
    const data = await Teams.findAll();
    return data;
  };

  static getTeamsById = async (id: number) => {
    const data = await Teams.findOne({ where: { id } });
    return data;
  };
}

export default TeamsService;
