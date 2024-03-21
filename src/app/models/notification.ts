import {Supervisor} from "./supervisor";

export class Notification {

  firstName: string;

  lastName: string;

  phoneNumber: string;

  email: string;

  supervisorDTO: Supervisor;

  constructor(firstName: string, lastName: string, phoneNumber: string, email: string, supervisor: Supervisor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.supervisorDTO = supervisor;
  }
}
