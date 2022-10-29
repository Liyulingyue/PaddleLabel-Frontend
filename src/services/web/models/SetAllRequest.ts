/* tslint:disable */
/* eslint-disable */
/**
 * PaddleLabel API Specs
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
 * @interface SetAllRequest
 */
export interface SetAllRequest {
  /**
   *
   * @type {boolean}
   * @memberof SetAllRequest
   */
  dataPredicted?: boolean;
}

/**
 * Check if a given object implements the SetAllRequest interface.
 */
export function instanceOfSetAllRequest(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function SetAllRequestFromJSON(json: any): SetAllRequest {
  return SetAllRequestFromJSONTyped(json, false);
}

export function SetAllRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SetAllRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    dataPredicted: !exists(json, 'data_predicted') ? undefined : json['data_predicted'],
  };
}

export function SetAllRequestToJSON(value?: SetAllRequest | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    data_predicted: value.dataPredicted,
  };
}