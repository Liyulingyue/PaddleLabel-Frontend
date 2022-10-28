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

import * as runtime from '../runtime';
import type { AddTagRequest, Annotation, Data, Tag, Task } from '../models';
import {
  AddTagRequestFromJSON,
  AddTagRequestToJSON,
  AnnotationFromJSON,
  AnnotationToJSON,
  DataFromJSON,
  DataToJSON,
  TagFromJSON,
  TagToJSON,
  TaskFromJSON,
  TaskToJSON,
} from '../models';

export interface AddTagOperationRequest {
  taskId: string;
  requestId?: string;
  addTagRequest?: AddTagRequest;
}

export interface GetRequest {
  taskId: string;
}

export interface GetAllRequest {
  orderBy?: string;
}

export interface GetAnnotationsRequest {
  taskId: string;
}

export interface GetDatasRequest {
  taskId: string;
}

export interface GetTagsRequest {
  taskId: string;
}

export interface RemoveRequest {
  taskId: string;
}

export interface UpdateRequest {
  taskId: string;
  task: Task;
}

/**
 *
 */
export class TaskApi extends runtime.BaseAPI {
  /**
   * Add a tag to a task, the tag has to exist.
   * Add a new tag to the task
   */
  async addTagRaw(
    requestParameters: AddTagOperationRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<Tag>>> {
    if (requestParameters.taskId === null || requestParameters.taskId === undefined) {
      throw new runtime.RequiredError(
        'taskId',
        'Required parameter requestParameters.taskId was null or undefined when calling addTag.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (requestParameters.requestId !== undefined && requestParameters.requestId !== null) {
      headerParameters['request_id'] = String(requestParameters.requestId);
    }

    const response = await this.request(
      {
        path: `/tasks/{task_id}/tags`.replace(
          `{${'task_id'}}`,
          encodeURIComponent(String(requestParameters.taskId)),
        ),
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: AddTagRequestToJSON(requestParameters.addTagRequest),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TagFromJSON));
  }

  /**
   * Add a tag to a task, the tag has to exist.
   * Add a new tag to the task
   */
  async addTag(
    taskId: string,
    requestId?: string,
    addTagRequest?: AddTagRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<Tag>> {
    const response = await this.addTagRaw(
      { taskId: taskId, requestId: requestId, addTagRequest: addTagRequest },
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Create a new task
   */
  async createRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Task>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/tasks`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => TaskFromJSON(jsonValue));
  }

  /**
   * Create a new task
   */
  async create(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Task> {
    const response = await this.createRaw(initOverrides);
    return await response.value();
  }

  /**
   * Get info of a specific task
   */
  async getRaw(
    requestParameters: GetRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Task>> {
    if (requestParameters.taskId === null || requestParameters.taskId === undefined) {
      throw new runtime.RequiredError(
        'taskId',
        'Required parameter requestParameters.taskId was null or undefined when calling get.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/tasks/{task_id}`.replace(
          `{${'task_id'}}`,
          encodeURIComponent(String(requestParameters.taskId)),
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => TaskFromJSON(jsonValue));
  }

  /**
   * Get info of a specific task
   */
  async get(
    taskId: string,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Task> {
    const response = await this.getRaw({ taskId: taskId }, initOverrides);
    return await response.value();
  }

  /**
   * Your GET endpoint
   */
  async getAllRaw(
    requestParameters: GetAllRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<Task>>> {
    const queryParameters: any = {};

    if (requestParameters.orderBy !== undefined) {
      queryParameters['order_by'] = requestParameters.orderBy;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/tasks`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TaskFromJSON));
  }

  /**
   * Your GET endpoint
   */
  async getAll(
    orderBy?: string,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<Task>> {
    const response = await this.getAllRaw({ orderBy: orderBy }, initOverrides);
    return await response.value();
  }

  /**
   *
   * Get all annotations of a task
   */
  async getAnnotationsRaw(
    requestParameters: GetAnnotationsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<Annotation>>> {
    if (requestParameters.taskId === null || requestParameters.taskId === undefined) {
      throw new runtime.RequiredError(
        'taskId',
        'Required parameter requestParameters.taskId was null or undefined when calling getAnnotations.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/tasks/{task_id}/annotations`.replace(
          `{${'task_id'}}`,
          encodeURIComponent(String(requestParameters.taskId)),
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
   * Get all annotations of a task
   */
  async getAnnotations(
    taskId: string,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<Annotation>> {
    const response = await this.getAnnotationsRaw({ taskId: taskId }, initOverrides);
    return await response.value();
  }

  /**
   *
   * Get all datas of a task
   */
  async getDatasRaw(
    requestParameters: GetDatasRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<Data>>> {
    if (requestParameters.taskId === null || requestParameters.taskId === undefined) {
      throw new runtime.RequiredError(
        'taskId',
        'Required parameter requestParameters.taskId was null or undefined when calling getDatas.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/tasks/{task_id}/datas`.replace(
          `{${'task_id'}}`,
          encodeURIComponent(String(requestParameters.taskId)),
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(DataFromJSON));
  }

  /**
   *
   * Get all datas of a task
   */
  async getDatas(
    taskId: string,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<Data>> {
    const response = await this.getDatasRaw({ taskId: taskId }, initOverrides);
    return await response.value();
  }

  /**
   *
   * Get all tags of the task
   */
  async getTagsRaw(
    requestParameters: GetTagsRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<Tag>>> {
    if (requestParameters.taskId === null || requestParameters.taskId === undefined) {
      throw new runtime.RequiredError(
        'taskId',
        'Required parameter requestParameters.taskId was null or undefined when calling getTags.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/tasks/{task_id}/tags`.replace(
          `{${'task_id'}}`,
          encodeURIComponent(String(requestParameters.taskId)),
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
   * Get all tags of the task
   */
  async getTags(
    taskId: string,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<Tag>> {
    const response = await this.getTagsRaw({ taskId: taskId }, initOverrides);
    return await response.value();
  }

  /**
   * Delete a task and ALL DATA and ANNOTATIONS under the project. Won\'t delete file on file system
   * Delete a task and ALL DATA and ANNOTATIONS under the task.
   */
  async removeRaw(
    requestParameters: RemoveRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<void>> {
    if (requestParameters.taskId === null || requestParameters.taskId === undefined) {
      throw new runtime.RequiredError(
        'taskId',
        'Required parameter requestParameters.taskId was null or undefined when calling remove.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/tasks/{task_id}`.replace(
          `{${'task_id'}}`,
          encodeURIComponent(String(requestParameters.taskId)),
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
   * Delete a task and ALL DATA and ANNOTATIONS under the project. Won\'t delete file on file system
   * Delete a task and ALL DATA and ANNOTATIONS under the task.
   */
  async remove(
    taskId: string,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<void> {
    await this.removeRaw({ taskId: taskId }, initOverrides);
  }

  /**
   * Edit task info. Provide key value pair to change one value only. Provide all changed values to change multiple. Empty string will be set. Leave values don\'t intend to change out of request body.
   * Edit task info
   */
  async updateRaw(
    requestParameters: UpdateRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Task>> {
    if (requestParameters.taskId === null || requestParameters.taskId === undefined) {
      throw new runtime.RequiredError(
        'taskId',
        'Required parameter requestParameters.taskId was null or undefined when calling update.',
      );
    }

    if (requestParameters.task === null || requestParameters.task === undefined) {
      throw new runtime.RequiredError(
        'task',
        'Required parameter requestParameters.task was null or undefined when calling update.',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request(
      {
        path: `/tasks/{task_id}`.replace(
          `{${'task_id'}}`,
          encodeURIComponent(String(requestParameters.taskId)),
        ),
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: TaskToJSON(requestParameters.task),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => TaskFromJSON(jsonValue));
  }

  /**
   * Edit task info. Provide key value pair to change one value only. Provide all changed values to change multiple. Empty string will be set. Leave values don\'t intend to change out of request body.
   * Edit task info
   */
  async update(
    taskId: string,
    task: Task,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Task> {
    const response = await this.updateRaw({ taskId: taskId, task: task }, initOverrides);
    return await response.value();
  }
}
