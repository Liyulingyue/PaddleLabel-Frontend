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
 * @interface LoadSampleRequest
 */
export interface LoadSampleRequest {
  /**
   *
   * @type {number}
   * @memberof LoadSampleRequest
   */
  taskCategoryId?: number;
}

/**
 * Check if a given object implements the LoadSampleRequest interface.
 */
export function instanceOfLoadSampleRequest(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function LoadSampleRequestFromJSON(json: any): LoadSampleRequest {
  return LoadSampleRequestFromJSONTyped(json, false);
}

export function LoadSampleRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): LoadSampleRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    taskCategoryId: !exists(json, 'task_category_id') ? undefined : json['task_category_id'],
  };
}

export function LoadSampleRequestToJSON(value?: LoadSampleRequest | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    task_category_id: value.taskCategoryId,
  };
}
