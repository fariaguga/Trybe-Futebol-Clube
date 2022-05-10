const Users = require('./Users.json');

interface IUser {
  id: number;
  username: string;
  role: string;
  email: string;
  password: string;
}

class Mock {
  constructor(
    public users: IUser[]
  ) {}

  public userLogin (email: string, password: string): Boolean {
    const userValidation = this.users.find((user) => (
      user.email === email && user.password === password
    ));
    if (userValidation) {
      return true;
    }

    return false;
  }
}

const userMock = new Mock(Users);

const User = {
  findOne: async (email: string, password: string) => userMock.userLogin(email, password),
};

export const mockClubs = [
  {"id": 1,"teamName": "Avaí/Kindermann"},
  {"id": 2,"teamName": "Bahia"},
  {"id": 3,"teamName": "Botafogo"},
]

export const matchsMock  = [
  {
    id: 1,
    homeTeam: 16,
    homeTeamGoals: 1,
    awayTeam: 8,
    awayTeamGoals: 1,
    inProgress: false,
    homeClub: {
      clubName: "São Paulo"
    },
    awayClub: {
      clubName: "Grêmio"
    }
  },
  {
    id: 2,
    homeTeam: 9,
    homeTeamGoals: 1,
    awayTeam: 14,
    awayTeamGoals: 1,
    inProgress: false,
    homeClub: {
      clubName: "Internacional"
    },
    awayClub: {
      clubName: "Santos"
    }
  },
  {
    id: 3,
    homeTeam: 4,
    homeTeamGoals: 3,
    awayTeam: 11,
    awayTeamGoals: 0,
    inProgress: false,
    homeClub: {
      clubName: "Corinthians",
    },
    awayClub: {
      clubName: "Napoli-SC",
    },
  },
  {
    id: 4,
    homeTeam: 3,
    homeTeamGoals: 0,
    awayTeam: 2,
    awayTeamGoals: 0,
    inProgress: false,
    homeClub: {
      clubName: "Botafogo",
    },
    awayClub: {
      clubName: "Bahia",
    },
  },
  {
    id: 5,
    homeTeam: 7,
    homeTeamGoals: 1,
    awayTeam: 10,
    awayTeamGoals: 1,
    inProgress: false,
    homeClub: {
      clubName: "Flamengo",
    },
    awayClub: {
      clubName: "Minas Brasília",
    },
  },
  {
    id: 6,
    homeTeam: 5,
    homeTeamGoals: 1,
    awayTeam: 13,
    awayTeamGoals: 1,
    inProgress: false,
    homeClub: {
      clubName: "Cruzeiro",
    },
    awayClub: {
      clubName: "Real Brasília",
    },
  },
  {
    id: 7,
    homeTeam: 12,
    homeTeamGoals: 2,
    awayTeam: 6,
    awayTeamGoals: 2,
    inProgress: false,
    homeClub: {
      clubName: "Palmeiras",
    },
    awayClub: {
      clubName: "Ferroviária",
    },
  },
  {
    id: 8,
    homeTeam: 15,
    homeTeamGoals: 0,
    awayTeam: 1,
    awayTeamGoals: 1,
    inProgress: false,
    homeClub: {
      clubName: "São José-SP",
    },
    awayClub: {
      clubName: "Avaí/Kindermann",
    },
  },
  {
    id: 9,
    homeTeam: 1,
    homeTeamGoals: 0,
    awayTeam: 12,
    awayTeamGoals: 3,
    inProgress: false,
    homeClub: {
      clubName: "Avaí/Kindermann",
    },
    awayClub: {
      clubName: "Palmeiras",
    },
  },
  {
    id: 10,
    homeTeam: 2,
    homeTeamGoals: 0,
    awayTeam: 9,
    awayTeamGoals: 2,
    inProgress: false,
    homeClub: {
      clubName: "Bahia",
    },
    awayClub: {
      clubName: "Internacional",
    },
  },
]
export {
  User,
};