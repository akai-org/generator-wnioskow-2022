import { z } from 'zod';
import {
  CLUB_PATRON_ERROR,
  DEFAULT_SELECT_VALUE,
  DEPARTMENT_ERROR,
  FULL_NAME_ERROR,
  INDEX_NUMBER_ERROR,
  LEADER_NAME_ERROR,
  NO_ACTIVITIES_ERROR,
  NO_DESCRIPTION_ERROR,
  NO_END_DATE_ERROR,
  NO_START_DATE_ERROR,
  PERIOD_ERROR,
  PERIOD_TYPE_ERROR,
  ROLE_ERROR,
  SCIENCE_CLUB_ERROR,
  SUMMER_PERIOD,
  WINTER_PERIOD,
  WRONG_DATES_ERROR,
} from './consts';

export const schema = z.object({
  leaderName: z.string().min(1, LEADER_NAME_ERROR),
  scienceClub: z
    .string()
    .min(1, SCIENCE_CLUB_ERROR)
    .refine((value) => value !== DEFAULT_SELECT_VALUE, { message: SCIENCE_CLUB_ERROR }),
  department: z
    .string()
    .min(1, DEPARTMENT_ERROR)
    .refine((value) => value !== DEFAULT_SELECT_VALUE, { message: DEPARTMENT_ERROR }),
  clubPatron: z.string().min(1, CLUB_PATRON_ERROR),
  fullName: z.string().min(1, FULL_NAME_ERROR),
  indexNumber: z.string().min(1, INDEX_NUMBER_ERROR),
  role: z.string().min(1, ROLE_ERROR),
  period: z
    .string()
    .min(1, PERIOD_ERROR)
    .refine((period) => period === WINTER_PERIOD || period === SUMMER_PERIOD, PERIOD_TYPE_ERROR),
  activities: z
    .object({
      description: z.string().min(1, NO_DESCRIPTION_ERROR),
      startDate: z.string().min(1, NO_START_DATE_ERROR),
      endDate: z.string().min(1, NO_END_DATE_ERROR),
    })
    .refine((activity) => {
      if (
        activity.startDate.length === 0 ||
        activity.endDate.length === 0 ||
        activity.description.length === 0
      )
        return true;
      const startDate = new Date(activity.startDate);
      const endDate = new Date(activity.endDate);
      return startDate <= endDate;
    }, WRONG_DATES_ERROR)
    .array()
    .min(1, NO_ACTIVITIES_ERROR),
});
