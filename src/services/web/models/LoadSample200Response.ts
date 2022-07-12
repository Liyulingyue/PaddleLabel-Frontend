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
 * @interface LoadSample200Response
 */
export interface LoadSample200Response {
  /**
   *
   * @type {number}
   * @memberof LoadSample200Response
   */
  projectId?: number;
}

/**
 * Check if a given object implements the LoadSample200Response interface.
 */
export function instanceOfLoadSample200Response(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function LoadSample200ResponseFromJSON(json: any): LoadSample200Response {
  return LoadSample200ResponseFromJSONTyped(json, false);
}

export function LoadSample200ResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): LoadSample200Response {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    projectId: !exists(json, 'project_id') ? undefined : json['project_id'],
  };
}

export function LoadSample200ResponseToJSON(value?: LoadSample200Response | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    project_id: value.projectId,
  };
}
