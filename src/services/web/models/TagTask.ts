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
 * @interface TagTask
 */
export interface TagTask {
  /**
   *
   * @type {number}
   * @memberof TagTask
   */
  tagTaskId?: number;
  /**
   *
   * @type {number}
   * @memberof TagTask
   */
  projectId?: number;
  /**
   *
   * @type {number}
   * @memberof TagTask
   */
  tagId?: number;
  /**
   *
   * @type {number}
   * @memberof TagTask
   */
  taskId?: number;
}

/**
 * Check if a given object implements the TagTask interface.
 */
export function instanceOfTagTask(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function TagTaskFromJSON(json: any): TagTask {
  return TagTaskFromJSONTyped(json, false);
}

export function TagTaskFromJSONTyped(json: any, ignoreDiscriminator: boolean): TagTask {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    tagTaskId: !exists(json, 'tag_task_id') ? undefined : json['tag_task_id'],
    projectId: !exists(json, 'project_id') ? undefined : json['project_id'],
    tagId: !exists(json, 'tag_id') ? undefined : json['tag_id'],
    taskId: !exists(json, 'task_id') ? undefined : json['task_id'],
  };
}

export function TagTaskToJSON(value?: TagTask | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    tag_task_id: value.tagTaskId,
    project_id: value.projectId,
    tag_id: value.tagId,
    task_id: value.taskId,
  };
}
