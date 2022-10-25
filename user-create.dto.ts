import { UserRole } from "../models/user.entity";

export interface UserCreateDTO {
  id: number;
  username: String;
  password: String;
  firstName: String;
  lastName: String;
  age: number;
  gender: String;
  role: UserRole;
}
