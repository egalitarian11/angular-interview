export class Patient {
  firstName: String
  lastName: String
  id: Number

  constructor(firstName: string, lastName: string, id: Number){
      this.firstName = firstName;
      this.lastName = lastName;
      this.id = id
  }
}