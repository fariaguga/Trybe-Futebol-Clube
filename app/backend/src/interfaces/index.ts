export interface IUser {
    id: number,
    username: string,
    email: string,
    password: string,
    role: string,
  }

  export interface IMatch {
    homeTeam: number,
    awayTeam: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
    inProgress: boolean,
  }


  export interface ILeaderboard {
    name: string,
    totalPoints: number,
    totalGames: number,
    totalVictories: number,
    totalDraws: number,
    totalLosses: number,
    goalsFavor: number,
    goalsOwn: number,
    goalsBalance: number,
    efficiency: number,
  }
