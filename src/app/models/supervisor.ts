export class Supervisor {

  id: number;

  firstName: string;

  lastName: string;

  jurisdiction: string;


  constructor(id: number, firstName: string, lastName: string, jurisdiction: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.jurisdiction = jurisdiction;
  }
}
