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

const models = require('./index');

/**
 * A token filter that only keeps tokens with text contained in a specified
 * list of words. This token filter is implemented using Apache Lucene.
 *
 * @extends models['TokenFilter']
 */
class KeepTokenFilter extends models['TokenFilter'] {
  /**
   * Create a KeepTokenFilter.
   * @member {array} keepWords The list of words to keep.
   * @member {boolean} [lowerCaseKeepWords] A value indicating whether to lower
   * case all words first. Default is false. Default value: false .
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of KeepTokenFilter
   *
   * @returns {object} metadata of KeepTokenFilter
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: '#Microsoft.Azure.Search.KeepTokenFilter',
      type: {
        name: 'Composite',
        className: 'KeepTokenFilter',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          odatatype: {
            required: true,
            serializedName: '@odata\\.type',
            type: {
              name: 'String'
            }
          },
          keepWords: {
            required: true,
            serializedName: 'keepWords',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          lowerCaseKeepWords: {
            required: false,
            serializedName: 'keepWordsCase',
            defaultValue: false,
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = KeepTokenFilter;