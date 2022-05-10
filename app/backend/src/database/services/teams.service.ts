import Teams from '../models/teams.model';

class TeamsService {
  static getAll = async () => {
    const data = await Teams.findAll();
    return data;
  };
}

export default TeamsService;
