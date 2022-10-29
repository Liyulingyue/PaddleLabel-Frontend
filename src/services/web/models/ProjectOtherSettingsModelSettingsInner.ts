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
 * @interface ProjectOtherSettingsModelSettingsInner
 */
export interface ProjectOtherSettingsModelSettingsInner {
  /**
   *
   * @type {string}
   * @memberof ProjectOtherSettingsModelSettingsInner
   */
  modelName?: string;
  /**
   *
   * @type {string}
   * @memberof ProjectOtherSettingsModelSettingsInner
   */
  modelFilePath?: string;
  /**
   *
   * @type {string}
   * @memberof ProjectOtherSettingsModelSettingsInner
   */
  paramFilePath?: string;
}

/**
 * Check if a given object implements the ProjectOtherSettingsModelSettingsInner interface.
 */
export function instanceOfProjectOtherSettingsModelSettingsInner(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function ProjectOtherSettingsModelSettingsInnerFromJSON(
  json: any,
): ProjectOtherSettingsModelSettingsInner {
  return ProjectOtherSettingsModelSettingsInnerFromJSONTyped(json, false);
}

export function ProjectOtherSettingsModelSettingsInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ProjectOtherSettingsModelSettingsInner {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    modelName: !exists(json, 'modelName') ? undefined : json['modelName'],
    modelFilePath: !exists(json, 'modelFilePath') ? undefined : json['modelFilePath'],
    paramFilePath: !exists(json, 'paramFilePath') ? undefined : json['paramFilePath'],
  };
}

export function ProjectOtherSettingsModelSettingsInnerToJSON(
  value?: ProjectOtherSettingsModelSettingsInner | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    modelName: value.modelName,
    modelFilePath: value.modelFilePath,
    paramFilePath: value.paramFilePath,
  };
}