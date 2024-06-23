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

import { mapValues } from '../runtime';
/**
 *
 * @export
 * @interface ImportDatasetRequest
 */
export interface ImportDatasetRequest {
  /**
   *
   * @type {string}
   * @memberof ImportDatasetRequest
   */
  importDir?: string;
  /**
   *
   * @type {string}
   * @memberof ImportDatasetRequest
   */
  importFormat?: string;
}

/**
 * Check if a given object implements the ImportDatasetRequest interface.
 */
export function instanceOfImportDatasetRequest(value: object): value is ImportDatasetRequest {
  return true;
}

export function ImportDatasetRequestFromJSON(json: any): ImportDatasetRequest {
  return ImportDatasetRequestFromJSONTyped(json, false);
}

export function ImportDatasetRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ImportDatasetRequest {
  if (json == null) {
    return json;
  }
  return {
    importDir: json['import_dir'] == null ? undefined : json['import_dir'],
    importFormat: json['import_format'] == null ? undefined : json['import_format'],
  };
}

export function ImportDatasetRequestToJSON(value?: ImportDatasetRequest | null): any {
  if (value == null) {
    return value;
  }
  return {
    import_dir: value['importDir'],
    import_format: value['importFormat'],
  };
}
