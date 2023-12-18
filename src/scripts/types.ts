// // Level 1
export enum ESeasons {
  winter = "Зимний",
  spring = "Весенний",
  summer = "Летний",
  autumn = "Осенний",
}

export enum EParts {
  TECH = "Технический",
  DESIGN = "Дизайн",
  PROJECT = "Проектировщики",
}

type TSeason = {
  closeProjects: number;
  income: number;
  hired: number;
  dismissed: number;
  newProjects: number;
};

export type TSeasons = {
  winter: TSeason;
  spring: TSeason;
  summer: TSeason;
  autumn: TSeason;
};
