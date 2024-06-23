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

import * as runtime from '../runtime';
import type {
  Annotation,
  ExportDatasetRequest,
  GetProgress200Response,
  ImportDatasetRequest,
  ImportOption,
  Label,
  PredictRequest,
  Project,
  SetAllRequest,
  SplitDatasetRequest,
  Tag,
  Task,
  ToEasydataRequest,
} from '../models/index';
import {
  AnnotationFromJSON,
  AnnotationToJSON,
  ExportDatasetRequestFromJSON,
  ExportDatasetRequestToJSON,
  GetProgress200ResponseFromJSON,
  GetProgress200ResponseToJSON,
  ImportDatasetRequestFromJSON,
  ImportDatasetRequestToJSON,
  ImportOptionFromJSON,
  ImportOptionToJSON,
  LabelFromJSON,
  LabelToJSON,
  PredictRequestFromJSON,
  PredictRequestToJSON,
  ProjectFromJSON,
  ProjectToJSON,
  SetAllRequestFromJSON,
  SetAllRequestToJSON,
  SplitDatasetRequestFromJSON,
  SplitDatasetRequestToJSON,
  TagFromJSON,
  TagToJSON,
  TaskFromJSON,
  TaskToJSON,
  ToEasydataRequestFromJSON,
  ToEasydataRequestToJSON,
} from '../models/index';

export interface CreateRequest {
  project: Omit<Project, 'project_id' | 'created' | 'modified'>;
  requestId?: number;
}

export interface ExportDatasetOperationRequest {
  projectId: number;
  exportDatasetRequest?: ExportDatasetRequest;
}

export interface GetRequest {
  projectId: number;
  requestId?: number;
}

export interface GetAllRequest {
  requestId?: number;
  orderBy?: string;
}

export interface GetAnnotationsRequest {
  projectId: number;
}

export interface GetLabelsRequest {
  projectId: number;
}

export interface GetOptionsRequest {
  projectType: string;
  imOrExport: string;
  requestId?: number;
}

export interface GetProgressRequest {
  projectId: number;
}

export interface GetTagsRequest {
  projectId: number;
}

export interface GetTasksRequest {
  projectId: string;
  orderBy?: string;
}

export interface ImportDatasetOperationRequest {
  projectId: number;
  importDatasetRequest?: ImportDatasetRequest;
}

export interface PredictOperationRequest {
  projectId: number;
  predictRequest?: PredictRequest;
}

export interface RemoveRequest {
  projectId: number;
  requestId?: number;
}

export interface RemoveLabelsRequest {
  projectId: number;
}

export interface SetAllOperationRequest {
  projectId: string;
  setAllRequest?: SetAllRequest;
}

export interface SetLabelsRequest {
  projectId: number;
  label?: Array<Label>;
}

export interface SplitDatasetOperationRequest {
  projectId: number;
  splitDatasetRequest?: SplitDatasetRequest;
}

export interface ToEasydataOperationRequest {
  projectId: number;
  toEasydataRequest?: ToEasydataRequest;
}

export interface UpdateRequest {
  projectId: number;
  project: Omit<Project, 'project_id' | 'created' | 'modified'>;
  requestId?: number;
}

/**
 *
 */
export class ProjectApi extends runtime.BaseAPI {
  /**
   *
   * Create a new project
   */
  async createRaw(
    requestParameters: CreateRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Project>> {
    if (requestParameters['project'] == null) {
      throw new runtime.RequiredError(
        'project',
        'Required parameter "project" was null or undefined when calling create().',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (requestParameters['requestId'] != null) {
      headerParameters['request_id'] = String(requestParameters['requestId']);
    }

    const response = await this.request(
      {
        path: `/projects`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: ProjectToJSON(requestParameters['project']),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => ProjectFromJSON(jsonValue));
  }

  /**
   *
   * Create a new project
   */
  async create(
    project: Project,
    requestId?: number,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Project> {
    const response = await this.createRaw(
      { project: project, requestId: requestId },
      initOverrides,
    );
    return await response.value();
  }

  /**
   *
   * Export dataset to specified directory
   */
  async exportDatasetRaw(
    requestParameters: ExportDatasetOperationRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters['projectId'] == null) {
      throw new runtime.RequiredError(
        'projectId',
        'Required parameter "projectId" was null or undefined when calling exportDataset().',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/projects/{project_id}/export`.replace(
          `{${'project_id'}}`,
          encodeURIComponent(String(requestParameters['projectId'])),
        ),
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: ExportDatasetRequestToJSON(requestParameters['exportDatasetRequest']),
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   *
   * Export dataset to specified directory
   */
  async exportDataset(
    projectId: number,
    exportDatasetRequest?: ExportDatasetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<void> {
    await this.exportDatasetRaw(
      { projectId: projectId, exportDatasetRequest: exportDatasetRequest },
      initOverrides,
    );
  }

  /**
   *
   * Get info of a specific project
   */
  async getRaw(
    requestParameters: GetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Project>> {
    if (requestParameters['projectId'] == null) {
      throw new runtime.RequiredError(
        'projectId',
        'Required parameter "projectId" was null or undefined when calling get().',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (requestParameters['requestId'] != null) {
      headerParameters['request_id'] = String(requestParameters['requestId']);
    }

    const response = await this.request(
      {
        path: `/projects/{project_id}`.replace(
          `{${'project_id'}}`,
          encodeURIComponent(String(requestParameters['projectId'])),
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => ProjectFromJSON(jsonValue));
  }

  /**
   *
   * Get info of a specific project
   */
  async get(
    projectId: number,
    requestId?: number,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Project> {
    const response = await this.getRaw(
      { projectId: projectId, requestId: requestId },
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Read all projects, sort by last modify date
   */
  async getAllRaw(
    requestParameters: GetAllRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<Project>>> {
    const queryParameters: any = {};

    if (requestParameters['orderBy'] != null) {
      queryParameters['order_by'] = requestParameters['orderBy'];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (requestParameters['requestId'] != null) {
      headerParameters['request_id'] = String(requestParameters['requestId']);
    }

    const response = await this.request(
      {
        path: `/projects`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ProjectFromJSON));
  }

  /**
   * Read all projects, sort by last modify date
   */
  async getAll(
    requestId?: number,
    orderBy?: string,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<Project>> {
    const response = await this.getAllRaw(
      { requestId: requestId, orderBy: orderBy },
      initOverrides,
    );
    return await response.value();
  }

  /**
   *
   * Get all annotations under a project
   */
  async getAnnotationsRaw(
    requestParameters: GetAnnotationsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<Annotation>>> {
    if (requestParameters['projectId'] == null) {
      throw new runtime.RequiredError(
        'projectId',
        'Required parameter "projectId" was null or undefined when calling getAnnotations().',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/projects/{project_id}/annotations`.replace(
          `{${'project_id'}}`,
          encodeURIComponent(String(requestParameters['projectId'])),
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AnnotationFromJSON));
  }

  /**
   *
   * Get all annotations under a project
   */
  async getAnnotations(
    projectId: number,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<Annotation>> {
    const response = await this.getAnnotationsRaw({ projectId: projectId }, initOverrides);
    return await response.value();
  }

  /**
   *
   * Get all labels under a project
   */
  async getLabelsRaw(
    requestParameters: GetLabelsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<Label>>> {
    if (requestParameters['projectId'] == null) {
      throw new runtime.RequiredError(
        'projectId',
        'Required parameter "projectId" was null or undefined when calling getLabels().',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/projects/{project_id}/labels`.replace(
          `{${'project_id'}}`,
          encodeURIComponent(String(requestParameters['projectId'])),
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(LabelFromJSON));
  }

  /**
   *
   * Get all labels under a project
   */
  async getLabels(
    projectId: number,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<Label>> {
    const response = await this.getLabelsRaw({ projectId: projectId }, initOverrides);
    return await response.value();
  }

  /**
   * Read all projects, sort by last modify date
   */
  async getOptionsRaw(
    requestParameters: GetOptionsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<ImportOption>>> {
    if (requestParameters['projectType'] == null) {
      throw new runtime.RequiredError(
        'projectType',
        'Required parameter "projectType" was null or undefined when calling getOptions().',
      );
    }

    if (requestParameters['imOrExport'] == null) {
      throw new runtime.RequiredError(
        'imOrExport',
        'Required parameter "imOrExport" was null or undefined when calling getOptions().',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (requestParameters['requestId'] != null) {
      headerParameters['request_id'] = String(requestParameters['requestId']);
    }

    const response = await this.request(
      {
        path: `/projects/options/{im_or_export}/{project_type}`
          .replace(
            `{${'project_type'}}`,
            encodeURIComponent(String(requestParameters['projectType'])),
          )
          .replace(
            `{${'im_or_export'}}`,
            encodeURIComponent(String(requestParameters['imOrExport'])),
          ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(ImportOptionFromJSON),
    );
  }

  /**
   * Read all projects, sort by last modify date
   */
  async getOptions(
    projectType: string,
    imOrExport: string,
    requestId?: number,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<ImportOption>> {
    const response = await this.getOptionsRaw(
      { projectType: projectType, imOrExport: imOrExport, requestId: requestId },
      initOverrides,
    );
    return await response.value();
  }

  /**
   *
   * Get project progress
   */
  async getProgressRaw(
    requestParameters: GetProgressRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<GetProgress200Response>> {
    if (requestParameters['projectId'] == null) {
      throw new runtime.RequiredError(
        'projectId',
        'Required parameter "projectId" was null or undefined when calling getProgress().',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/projects/{project_id}/progress`.replace(
          `{${'project_id'}}`,
          encodeURIComponent(String(requestParameters['projectId'])),
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      GetProgress200ResponseFromJSON(jsonValue),
    );
  }

  /**
   *
   * Get project progress
   */
  async getProgress(
    projectId: number,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<GetProgress200Response> {
    const response = await this.getProgressRaw({ projectId: projectId }, initOverrides);
    return await response.value();
  }

  /**
   *
   * Get all tags under a project
   */
  async getTagsRaw(
    requestParameters: GetTagsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<Tag>>> {
    if (requestParameters['projectId'] == null) {
      throw new runtime.RequiredError(
        'projectId',
        'Required parameter "projectId" was null or undefined when calling getTags().',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/projects/{project_id}/tags`.replace(
          `{${'project_id'}}`,
          encodeURIComponent(String(requestParameters['projectId'])),
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TagFromJSON));
  }

  /**
   *
   * Get all tags under a project
   */
  async getTags(
    projectId: number,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<Tag>> {
    const response = await this.getTagsRaw({ projectId: projectId }, initOverrides);
    return await response.value();
  }

  /**
   *
   * Get all tasks under a project
   */
  async getTasksRaw(
    requestParameters: GetTasksRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<Task>>> {
    if (requestParameters['projectId'] == null) {
      throw new runtime.RequiredError(
        'projectId',
        'Required parameter "projectId" was null or undefined when calling getTasks().',
      );
    }

    const queryParameters: any = {};

    if (requestParameters['orderBy'] != null) {
      queryParameters['order_by'] = requestParameters['orderBy'];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/projects/{project_id}/tasks`.replace(
          `{${'project_id'}}`,
          encodeURIComponent(String(requestParameters['projectId'])),
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TaskFromJSON));
  }

  /**
   *
   * Get all tasks under a project
   */
  async getTasks(
    projectId: string,
    orderBy?: string,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<Task>> {
    const response = await this.getTasksRaw(
      { projectId: projectId, orderBy: orderBy },
      initOverrides,
    );
    return await response.value();
  }

  /**
   *
   */
  async importDatasetRaw(
    requestParameters: ImportDatasetOperationRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters['projectId'] == null) {
      throw new runtime.RequiredError(
        'projectId',
        'Required parameter "projectId" was null or undefined when calling importDataset().',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/projects/{project_id}/import`.replace(
          `{${'project_id'}}`,
          encodeURIComponent(String(requestParameters['projectId'])),
        ),
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: ImportDatasetRequestToJSON(requestParameters['importDatasetRequest']),
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   *
   */
  async importDataset(
    projectId: number,
    importDatasetRequest?: ImportDatasetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<void> {
    await this.importDatasetRaw(
      { projectId: projectId, importDatasetRequest: importDatasetRequest },
      initOverrides,
    );
  }

  /**
   *
   * Run prediction on all data in the dataset
   */
  async predictRaw(
    requestParameters: PredictOperationRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters['projectId'] == null) {
      throw new runtime.RequiredError(
        'projectId',
        'Required parameter "projectId" was null or undefined when calling predict().',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/projects/{project_id}/predict`.replace(
          `{${'project_id'}}`,
          encodeURIComponent(String(requestParameters['projectId'])),
        ),
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: PredictRequestToJSON(requestParameters['predictRequest']),
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   *
   * Run prediction on all data in the dataset
   */
  async predict(
    projectId: number,
    predictRequest?: PredictRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<void> {
    await this.predictRaw({ projectId: projectId, predictRequest: predictRequest }, initOverrides);
  }

  /**
   * Delete a project record and ALL TASKS RECORDS under the project. Won\'t delete file on file system
   * Delete a project record and ALL TASKS RECORDS under the project.
   */
  async removeRaw(
    requestParameters: RemoveRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters['projectId'] == null) {
      throw new runtime.RequiredError(
        'projectId',
        'Required parameter "projectId" was null or undefined when calling remove().',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (requestParameters['requestId'] != null) {
      headerParameters['request_id'] = String(requestParameters['requestId']);
    }

    const response = await this.request(
      {
        path: `/projects/{project_id}`.replace(
          `{${'project_id'}}`,
          encodeURIComponent(String(requestParameters['projectId'])),
        ),
        method: 'DELETE',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Delete a project record and ALL TASKS RECORDS under the project. Won\'t delete file on file system
   * Delete a project record and ALL TASKS RECORDS under the project.
   */
  async remove(
    projectId: number,
    requestId?: number,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<void> {
    await this.removeRaw({ projectId: projectId, requestId: requestId }, initOverrides);
  }

  /**
   *
   * Delete all labels under a project
   */
  async removeLabelsRaw(
    requestParameters: RemoveLabelsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters['projectId'] == null) {
      throw new runtime.RequiredError(
        'projectId',
        'Required parameter "projectId" was null or undefined when calling removeLabels().',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/projects/{project_id}/labels`.replace(
          `{${'project_id'}}`,
          encodeURIComponent(String(requestParameters['projectId'])),
        ),
        method: 'DELETE',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   *
   * Delete all labels under a project
   */
  async removeLabels(
    projectId: number,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<void> {
    await this.removeLabelsRaw({ projectId: projectId }, initOverrides);
  }

  /**
   *
   */
  async setAllRaw(
    requestParameters: SetAllOperationRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters['projectId'] == null) {
      throw new runtime.RequiredError(
        'projectId',
        'Required parameter "projectId" was null or undefined when calling setAll().',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/projects/{project_id}/tasks`.replace(
          `{${'project_id'}}`,
          encodeURIComponent(String(requestParameters['projectId'])),
        ),
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: SetAllRequestToJSON(requestParameters['setAllRequest']),
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   *
   */
  async setAll(
    projectId: string,
    setAllRequest?: SetAllRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<void> {
    await this.setAllRaw({ projectId: projectId, setAllRequest: setAllRequest }, initOverrides);
  }

  /**
   *
   * Set all labels under a project, will delete previous labels
   */
  async setLabelsRaw(
    requestParameters: SetLabelsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<Label>>> {
    if (requestParameters['projectId'] == null) {
      throw new runtime.RequiredError(
        'projectId',
        'Required parameter "projectId" was null or undefined when calling setLabels().',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/projects/{project_id}/labels`.replace(
          `{${'project_id'}}`,
          encodeURIComponent(String(requestParameters['projectId'])),
        ),
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: requestParameters['label']!.map(LabelToJSON),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(LabelFromJSON));
  }

  /**
   *
   * Set all labels under a project, will delete previous labels
   */
  async setLabels(
    projectId: number,
    label?: Array<Label>,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<Label>> {
    const response = await this.setLabelsRaw({ projectId: projectId, label: label }, initOverrides);
    return await response.value();
  }

  /**
   *
   * Split this project\'s data into train, validation and test dataset.
   */
  async splitDatasetRaw(
    requestParameters: SplitDatasetOperationRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<SplitDatasetRequest>> {
    if (requestParameters['projectId'] == null) {
      throw new runtime.RequiredError(
        'projectId',
        'Required parameter "projectId" was null or undefined when calling splitDataset().',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/projects/{project_id}/split`.replace(
          `{${'project_id'}}`,
          encodeURIComponent(String(requestParameters['projectId'])),
        ),
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: SplitDatasetRequestToJSON(requestParameters['splitDatasetRequest']),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      SplitDatasetRequestFromJSON(jsonValue),
    );
  }

  /**
   *
   * Split this project\'s data into train, validation and test dataset.
   */
  async splitDataset(
    projectId: number,
    splitDatasetRequest?: SplitDatasetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<SplitDatasetRequest> {
    const response = await this.splitDatasetRaw(
      { projectId: projectId, splitDatasetRequest: splitDatasetRequest },
      initOverrides,
    );
    return await response.value();
  }

  /**
   *
   */
  async toEasydataRaw(
    requestParameters: ToEasydataOperationRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters['projectId'] == null) {
      throw new runtime.RequiredError(
        'projectId',
        'Required parameter "projectId" was null or undefined when calling toEasydata().',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/projects/{project_id}/toEasydata`.replace(
          `{${'project_id'}}`,
          encodeURIComponent(String(requestParameters['projectId'])),
        ),
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: ToEasydataRequestToJSON(requestParameters['toEasydataRequest']),
      },
      initOverrides,
    );

    return new runtime.VoidApiResponse(response);
  }

  /**
   *
   */
  async toEasydata(
    projectId: number,
    toEasydataRequest?: ToEasydataRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<void> {
    await this.toEasydataRaw(
      { projectId: projectId, toEasydataRequest: toEasydataRequest },
      initOverrides,
    );
  }

  /**
   * Edit multiple project properties. Empty strings will be set. Properties not in request body won\'t be changed
   * Edit multiple project properties
   */
  async updateRaw(
    requestParameters: UpdateRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Project>> {
    if (requestParameters['projectId'] == null) {
      throw new runtime.RequiredError(
        'projectId',
        'Required parameter "projectId" was null or undefined when calling update().',
      );
    }

    if (requestParameters['project'] == null) {
      throw new runtime.RequiredError(
        'project',
        'Required parameter "project" was null or undefined when calling update().',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (requestParameters['requestId'] != null) {
      headerParameters['request_id'] = String(requestParameters['requestId']);
    }

    const response = await this.request(
      {
        path: `/projects/{project_id}`.replace(
          `{${'project_id'}}`,
          encodeURIComponent(String(requestParameters['projectId'])),
        ),
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: ProjectToJSON(requestParameters['project']),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => ProjectFromJSON(jsonValue));
  }

  /**
   * Edit multiple project properties. Empty strings will be set. Properties not in request body won\'t be changed
   * Edit multiple project properties
   */
  async update(
    projectId: number,
    project: Project,
    requestId?: number,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Project> {
    const response = await this.updateRaw(
      { projectId: projectId, project: project, requestId: requestId },
      initOverrides,
    );
    return await response.value();
  }
}
