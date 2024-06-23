/* tslint:disable */
/* eslint-disable */
/**
 * PP Label ML backend API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 *
 * @export
 * @interface TrainRequest
 */
export interface TrainRequest {
  /**
   *
   * @type {string}
   * @memberof TrainRequest
   */
  dataDir: string;
  /**
   *
   * @type {object}
   * @memberof TrainRequest
   */
  configs: object;
}

/**
 * Check if a given object implements the TrainRequest interface.
 */
export function instanceOfTrainRequest(value: object): value is TrainRequest {
  if (!('dataDir' in value) || value['dataDir'] === undefined) return false;
  if (!('configs' in value) || value['configs'] === undefined) return false;
  return true;
}

export function TrainRequestFromJSON(json: any): TrainRequest {
  return TrainRequestFromJSONTyped(json, false);
}

export function TrainRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrainRequest {
  if (json == null) {
    return json;
  }
  return {
    dataDir: json['data_dir'],
    configs: json['configs'],
  };
}

export function TrainRequestToJSON(value?: TrainRequest | null): any {
  if (value == null) {
    return value;
  }
  return {
    data_dir: value['dataDir'],
    configs: value['configs'],
  };
}
