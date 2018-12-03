export class Errors {
  public static get SERVER_ERROR(): string {
    return 'Server Communication Failed';
  }

  public static get OPERATORS_NOT_FOUND(): string {
    return 'No operators exist in Database';
  }

  public static get OPERATOR_NOT_REGISTERED(): string {
    return 'Registration of new operator failed';
  }

  public static get OPERATOR_NOT_FOUND(): string {
    return 'Operator with given operator ID does not exist in database';
  }

  public static get OPERATOR_NOT_UPDATED(): string {
    return 'Updation of operator failed';
  }

  public static get OPERATOR_NOT_DELETED(): string {
    return 'Deletion of operator failed';
  }
}
