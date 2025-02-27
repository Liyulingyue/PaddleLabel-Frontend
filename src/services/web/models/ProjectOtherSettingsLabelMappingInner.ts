/* tslint:disable */
/* eslint-disable */
/**
 * PaddleLabel API Specs
 * Web backend APIs for PaddleLabel
 *
 * The version of the OpenAPI document: 1.0.2
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
 * @interface ProjectOtherSettingsLabelMappingInner
 */
export interface ProjectOtherSettingsLabelMappingInner {
  /**
   *
   * @type {string}
   * @memberof ProjectOtherSettingsLabelMappingInner
   */
  model?: string;
  /**
   *
   * @type {string}
   * @memberof ProjectOtherSettingsLabelMappingInner
   */
  project?: string;
}

/**
 * Check if a given object implements the ProjectOtherSettingsLabelMappingInner interface.
 */
export function instanceOfProjectOtherSettingsLabelMappingInner(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function ProjectOtherSettingsLabelMappingInnerFromJSON(
  json: any,
): ProjectOtherSettingsLabelMappingInner {
  return ProjectOtherSettingsLabelMappingInnerFromJSONTyped(json, false);
}

export function ProjectOtherSettingsLabelMappingInnerFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ProjectOtherSettingsLabelMappingInner {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    model: !exists(json, 'model') ? undefined : json['model'],
    project: !exists(json, 'project') ? undefined : json['project'],
  };
}

export function ProjectOtherSettingsLabelMappingInnerToJSON(
  value?: ProjectOtherSettingsLabelMappingInner | null,
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    model: value.model,
    project: value.project,
  };
}
