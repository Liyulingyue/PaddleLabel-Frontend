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
 * @interface PaddlelabelApiControllerUserLoginRequest
 */
export interface PaddlelabelApiControllerUserLoginRequest {
  /**
   *
   * @type {string}
   * @memberof PaddlelabelApiControllerUserLoginRequest
   */
  username: string;
  /**
   *
   * @type {string}
   * @memberof PaddlelabelApiControllerUserLoginRequest
   */
  password: string;
}

/**
 * Check if a given object implements the PaddlelabelApiControllerUserLoginRequest interface.
 */
export function instanceOfPaddlelabelApiControllerUserLoginRequest(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'username' in value;
  isInstance = isInstance && 'password' in value;

  return isInstance;
}

export function PaddlelabelApiControllerUserLoginRequestFromJSON(
  json: any,
): PaddlelabelApiControllerUserLoginRequest {
  return PaddlelabelApiControllerUserLoginRequestFromJSONTyped(json, false);
}

export function PaddlelabelApiControllerUserLoginRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): PaddlelabelApiControllerUserLoginRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    username: json['username'],
    password: json['password'],
  };
}

export function PaddlelabelApiControllerUserLoginRequestToJSON(
  value?: PaddlelabelApiControllerUserLoginRequest | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    username: value.username,
    password: value.password,
  };
}