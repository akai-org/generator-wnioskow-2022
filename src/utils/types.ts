import { SUMMER_PERIOD, WINTER_PERIOD } from './consts';
import { z } from 'zod';
import { schema } from './schema';
import { DeepPartial, FieldArrayWithId, FieldErrors, UseFormRegister } from 'react-hook-form';

export type Semester = typeof WINTER_PERIOD | typeof SUMMER_PERIOD;

export interface ClubsResponse {
  clubs: string[];
}

export interface DepartmentsResponse {
  departments: string[];
}

export interface StudentAchievementInRequest {
  description: string;
  start_date: string;
  end_date: string;
}

export interface ApplicationGenerationPostRequest {
  club_leader_full_name: string;
  club_name: string;
  club_department: string;
  club_patron_full_name: string;
  student_full_name: string;
  student_function: string;
  semester: Semester;
  student_album_number: number;
  student_achievements: StudentAchievementInRequest[];
}

export type SchemaType = z.infer<typeof schema>;

export type InputNames = keyof SchemaType;

export interface FormRegistrationProperties {
  fields: FieldArrayWithId<DeepPartial<SchemaType>, 'actions', 'id'>[];
  errors: FieldErrors<SchemaType>;
  register: UseFormRegister<SchemaType>;
}
