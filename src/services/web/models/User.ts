/* tslint:disable */
/* eslint-disable */
/**
 * PP-Label API Spec
 * Back end APIs for PP-Label
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: me@linhan.email
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 *
 * @export
 * @interface User
 */
export interface User {
  /**
   *
   * @type {number}
   * @memberof User
   */
  readonly userId?: number;
  /**
   *
   * @type {string}
   * @memberof User
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof User
   */
  email?: string;
  /**
   *
   * @type {string}
   * @memberof User
   */
  password?: string;
  /**
   *
   * @type {number}
   * @memberof User
   */
  roleId?: number;
}

/**
 * Check if a given object implements the User interface.
 */
export function instanceOfUser(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function UserFromJSON(json: any): User {
  return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    userId: !exists(json, 'user_id') ? undefined : json['user_id'],
    name: !exists(json, 'name') ? undefined : json['name'],
    email: !exists(json, 'email') ? undefined : json['email'],
    password: !exists(json, 'password') ? undefined : json['password'],
    roleId: !exists(json, 'role_id') ? undefined : json['role_id'],
  };
}

export function UserToJSON(value?: User | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    name: value.name,
    email: value.email,
    password: value.password,
    role_id: value.roleId,
  };
}
