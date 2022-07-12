/* tslint:disable */
/* eslint-disable */
/**
 * PP Label ML backend API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 *
 * @export
 * @interface LoadRequest
 */
export interface LoadRequest {
  /**
   *
   * @type {object}
   * @memberof LoadRequest
   */
  initParams?: object;
}

/**
 * Check if a given object implements the LoadRequest interface.
 */
export function instanceOfLoadRequest(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function LoadRequestFromJSON(json: any): LoadRequest {
  return LoadRequestFromJSONTyped(json, false);
}

export function LoadRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoadRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    initParams: !exists(json, 'init_params') ? undefined : json['init_params'],
  };
}

export function LoadRequestToJSON(value?: LoadRequest | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    init_params: value.initParams,
  };
}
