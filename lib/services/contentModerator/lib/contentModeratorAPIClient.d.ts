/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClient, ServiceClientOptions, ServiceClientCredentials } from 'ms-rest';
import * as models from "./models";
import * as operations from "./operations";

export default class ContentModeratorAPIClient extends ServiceClient {
  /**
   * @class
   * Initializes a new instance of the ContentModeratorAPIClient class.
   * @constructor
   *
   * @param {credentials} credentials - Subscription credentials which uniquely identify client subscription.
   *
   * @param {azureRegionBaseUrl} baseUrl - Supported Azure regions for Content Moderator endpoints. Possible values include: 'westus.api.cognitive.microsoft.com', 'westus2.api.cognitive.microsoft.com', 'eastus.api.cognitive.microsoft.com', 'eastus2.api.cognitive.microsoft.com', 'westcentralus.api.cognitive.microsoft.com', 'southcentralus.api.cognitive.microsoft.com', 'westeurope.api.cognitive.microsoft.com', 'northeurope.api.cognitive.microsoft.com', 'southeastasia.api.cognitive.microsoft.com', 'eastasia.api.cognitive.microsoft.com', 'australiaeast.api.cognitive.microsoft.com', 'brazilsouth.api.cognitive.microsoft.com', 'contentmoderatortest.azure-api.net'
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - Options for the underlying request object
   * {@link https://github.com/request/request#requestoptions-callback Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   */
  constructor(credentials: ServiceClientCredentials, baseUrl: string, options?: ServiceClientOptions);

  credentials: ServiceClientCredentials;

  baseUrl: string;

  // Operation groups
  imageModeration: operations.ImageModeration;
  textModeration: operations.TextModeration;
  listManagementImageLists: operations.ListManagementImageLists;
  listManagementTermLists: operations.ListManagementTermLists;
  listManagementImage: operations.ListManagementImage;
  listManagementTerm: operations.ListManagementTerm;
  reviews: operations.Reviews;
}

export { ContentModeratorAPIClient, models as ContentModeratorAPIModels };
