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
