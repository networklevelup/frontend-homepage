export interface IUser {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  isAdmin: boolean;
  validate: boolean;
  pass: string;
}

export interface IBlog {
  _id: string;
  title: string;
  subtitle: string;
  secondSubtitle: string;
  description: string;
  img: string;
}

export interface IInsta {
  id: string;
  images: {
    standard_resolution: {
      url: string;
    };
  };
}

export interface IBlogPicture {
  _id: string;
  description: string;
  link: string;
  img: string;
}

export interface ICompany {
  _id: string;
  first_CompanyName: string;
  first_name: string;
  last_name: string;
  email: string;
  isAdmin: boolean;
  validate: boolean;
  pass: string;
}

export interface IState {
  booleanState: boolean;
}

export interface ISkills {
  talentId: string,
    worksAreas: Array<Text>,
    levelExperience: string,
    locations: string,
    spanishSkills: string,
    englishSkills: string,
    germanSkills: string,
    futherLanguageSkills: string,
    furtherLanguage: string
}

