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
import type { Label } from './Label';
import { LabelFromJSON, LabelFromJSONTyped, LabelToJSON } from './Label';

/**
 *
 * @export
 * @interface CreateRequest
 */
export interface CreateRequest {
  /**
   *
   * @type {number}
   * @memberof CreateRequest
   */
  labelId?: number;
  /**
   *
   * @type {number}
   * @memberof CreateRequest
   */
  projectId?: number;
  /**
   *
   * @type {string}
   * @memberof CreateRequest
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof CreateRequest
   */
  color?: string;
  /**
   *
   * @type {string}
   * @memberof CreateRequest
   */
  comment?: string;
  /**
   *
   * @type {string}
   * @memberof CreateRequest
   */
  readonly created?: string;
  /**
   *
   * @type {string}
   * @memberof CreateRequest
   */
  readonly modified?: string;
  /**
   *
   * @type {number}
   * @memberof CreateRequest
   */
  superCategoryId?: number;
}

/**
 * Check if a given object implements the CreateRequest interface.
 */
export function instanceOfCreateRequest(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'name' in value;

  return isInstance;
}

export function CreateRequestFromJSON(json: any): CreateRequest {
  return CreateRequestFromJSONTyped(json, false);
}

export function CreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    labelId: !exists(json, 'label_id') ? undefined : json['label_id'],
    projectId: !exists(json, 'project_id') ? undefined : json['project_id'],
    name: json['name'],
    color: !exists(json, 'color') ? undefined : json['color'],
    comment: !exists(json, 'comment') ? undefined : json['comment'],
    created: !exists(json, 'created') ? undefined : json['created'],
    modified: !exists(json, 'modified') ? undefined : json['modified'],
    superCategoryId: !exists(json, 'super_category_id') ? undefined : json['super_category_id'],
  };
}

export function CreateRequestToJSON(value?: CreateRequest | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    label_id: value.labelId,
    project_id: value.projectId,
    name: value.name,
    color: value.color,
    comment: value.comment,
    super_category_id: value.superCategoryId,
  };
}
