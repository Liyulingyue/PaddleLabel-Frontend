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
 * @interface AddTagRequest
 */
export interface AddTagRequest {
  /**
   *
   * @type {number}
   * @memberof AddTagRequest
   */
  tagId?: number;
}

/**
 * Check if a given object implements the AddTagRequest interface.
 */
export function instanceOfAddTagRequest(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function AddTagRequestFromJSON(json: any): AddTagRequest {
  return AddTagRequestFromJSONTyped(json, false);
}

export function AddTagRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddTagRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    tagId: !exists(json, 'tag_id') ? undefined : json['tag_id'],
  };
}

export function AddTagRequestToJSON(value?: AddTagRequest | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    tag_id: value.tagId,
  };
}
