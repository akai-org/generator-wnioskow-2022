import { z } from 'zod';
import {
  CLUB_PATRON_ERROR,
  DEPARTMENT_ERROR,
  FULL_NAME_ERROR,
  INDEX_NUMBER_ERROR,
  LEADER_NAME_ERROR,
  NO_ACTIVITIES_ERROR,
  NO_DESCRIPTION_ERROR,
  NO_END_DATE_ERROR,
  NO_START_DATE_ERROR,
  PERIOD_ERROR,
  ROLE_ERROR,
  SCIENCE_CLUB_ERROR,
  SUMMER_PERIOD,
  WINTER_PERIOD,
} from './consts';

export const schema = z.object({
  leaderName: z.string().min(1, LEADER_NAME_ERROR),
  scienceClub: z
    .string()
    .min(1, SCIENCE_CLUB_ERROR)
    .refine((value) => value !== 'default', { message: SCIENCE_CLUB_ERROR }),
  department: z
    .string()
    .min(1, DEPARTMENT_ERROR)
    .refine((value) => value !== 'default', { message: DEPARTMENT_ERROR }),
  clubPatron: z.string().min(1, CLUB_PATRON_ERROR),
  fullName: z.string().min(1, FULL_NAME_ERROR),
  indexNumber: z.string().min(1, INDEX_NUMBER_ERROR),
  role: z.string().min(1, ROLE_ERROR),
  period: z
    .string()
    .min(1, PERIOD_ERROR)
    .refine(
      (period) => period === WINTER_PERIOD || period === SUMMER_PERIOD,
      "Semestr musi mieć wartość: 'zimowy' lub 'letni'",
    ),
  activities: z
    .object({
      description: z.string().min(1, NO_DESCRIPTION_ERROR),
      startDate: z.string().min(1, NO_START_DATE_ERROR),
      endDate: z.string().min(1, NO_END_DATE_ERROR),
    })
    .array()
    .min(1, NO_ACTIVITIES_ERROR),
});
