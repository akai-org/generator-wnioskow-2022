export const LEADER_NAME_ERROR = 'Imię i nazwisko przewodniczącego koła są wymagane';
export const SCIENCE_CLUB_ERROR = 'Nazwa koła naukowego jest wymagana';
export const DEPARTMENT_ERROR = 'Nazwa wydziału jest wymagana';
export const CLUB_PATRON_ERROR = 'Imię i nazwisko opiekuna koła są wymagane';
export const FULL_NAME_ERROR = 'Imię i nazwisko są wymagane';
export const INDEX_NUMBER_ERROR = 'Numer indeksu jest wymagany';
export const ROLE_ERROR = 'Funkcja pełniona w kole jest wymagana';
export const PERIOD_ERROR = 'Typ semestru jest wymagany';
export const NO_DESCRIPTION_ERROR = 'Opis jest wymagany';
export const NO_START_DATE_ERROR = 'Data rozpoczęcia jest wymagana';
export const NO_END_DATE_ERROR = 'Data zakończenia jest wymagana';
export const NO_ACTIVITIES_ERROR = 'Aktywności są wymagane';
export const WRONG_DATES_ERROR =
  'Data zakończenia musi być równa lub późniejsza niż data rozpoczęcia';
export const PERIOD_TYPE_ERROR = "Semestr musi mieć wartość: 'zimowy' lub 'letni'";

export const SUMMER_PERIOD = 'letni';
export const WINTER_PERIOD = 'zimowy';

export const DEFAULT_SELECT_VALUE = 'default';

export const INITIAL_ACTION_VALUES = {
  description: '',
  endDate: '',
  startDate: '',
};

export const INITIAL_INPUT_VALUES = {
  scienceClub: DEFAULT_SELECT_VALUE,
  department: DEFAULT_SELECT_VALUE,
  period: '',
  clubPatron: '',
  role: '',
  leaderName: '',
  fullName: '',
  indexNumber: '',
  activities: [INITIAL_ACTION_VALUES],
};
