/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Information about the current running state of the overall upgrade.
 *
 */
class UpgradeOperationHistoryStatus {
  /**
   * Create a UpgradeOperationHistoryStatus.
   * @member {string} [code] Code indicating the current status of the upgrade.
   * Possible values include: 'RollingForward', 'Cancelled', 'Completed',
   * 'Faulted'
   * @member {date} [startTime] Start time of the upgrade.
   * @member {date} [endTime] End time of the upgrade.
   */
  constructor() {
  }

  /**
   * Defines the metadata of UpgradeOperationHistoryStatus
   *
   * @returns {object} metadata of UpgradeOperationHistoryStatus
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UpgradeOperationHistoryStatus',
      type: {
        name: 'Composite',
        className: 'UpgradeOperationHistoryStatus',
        modelProperties: {
          code: {
            required: false,
            readOnly: true,
            serializedName: 'code',
            type: {
              name: 'Enum',
              allowedValues: [ 'RollingForward', 'Cancelled', 'Completed', 'Faulted' ]
            }
          },
          startTime: {
            required: false,
            readOnly: true,
            serializedName: 'startTime',
            type: {
              name: 'DateTime'
            }
          },
          endTime: {
            required: false,
            readOnly: true,
            serializedName: 'endTime',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = UpgradeOperationHistoryStatus;