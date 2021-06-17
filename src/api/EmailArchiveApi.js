/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2.1
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['Configuration', 'ApiClient', 'model/BccEmailArchive', 'model/BccEmailArchiveHistoryList', 'model/BccEmailArchiveList', 'model/ErrorDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Configuration'), require('../ApiClient'), require('../model/BccEmailArchive'), require('../model/BccEmailArchiveHistoryList'), require('../model/BccEmailArchiveList'), require('../model/ErrorDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.EmailArchiveApi = factory(root.Docusign.Configuration, root.Docusign.ApiClient, root.Docusign.BccEmailArchive, root.Docusign.BccEmailArchiveHistoryList, root.Docusign.BccEmailArchiveList, root.Docusign.ErrorDetails);
  }
}(this, (Configuration, ApiClient, BccEmailArchive, BccEmailArchiveHistoryList, BccEmailArchiveList, ErrorDetails) => {
  /**
   * EmailArchive service.
   * @module api/EmailArchiveApi
   */

  /**
   * Constructs a new EmailArchiveApi.
   * @alias module:api/EmailArchiveApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  const exports = function (apiClient) {
    this.apiClient = apiClient || Configuration.default.getDefaultApiClient() || ApiClient.instance;

    this.setApiClient = function (apiClient) {
      this.apiClient = apiClient;
    };

    this.getApiClient = function () {
      return this.apiClient;
    };

    /**
     * (Optional) Callback function to receive the result of the createBCCEmailArchive operation. If none specified a Promise will be returned.
     * @callback module:api/EmailArchiveApi~createBCCEmailArchiveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BccEmailArchive} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Creates a blind carbon copy email archive entry
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {module:model/BccEmailArchive} optsOrCallback.bccEmailArchive
     * @param {module:api/EmailArchiveApi~createBCCEmailArchiveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BccEmailArchive}
     */
    this.createBCCEmailArchive = function (accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      const postBody = optsOrCallback.bccEmailArchive;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling createBCCEmailArchive");
      }

      if (typeof callback !== 'function' && arguments.length && typeof arguments[arguments.length - 1] === 'function') {
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length - 1];
      }

      const pathParams = {
        accountId,
      };
      const queryParams = {
      };
      const headerParams = {
      };
      const formParams = {
      };

      const authNames = ['docusignAccessCode'];
      const contentTypes = [];
      const accepts = ['application/json'];
      const returnType = BccEmailArchive;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/settings/bcc_email_archives', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback,
      );
    };

    /**
     * (Optional) Callback function to receive the result of the deleteBCCEmailArchive operation. If none specified a Promise will be returned.
     * @callback module:api/EmailArchiveApi~deleteBCCEmailArchiveCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Delete a blind carbon copy email archive for an account.
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} bccEmailArchiveId
     * @param {module:api/EmailArchiveApi~deleteBCCEmailArchiveCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteBCCEmailArchive = function (accountId, bccEmailArchiveId, callback) {
      const postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling deleteBCCEmailArchive");
      }

      // verify the required parameter 'bccEmailArchiveId' is set
      if (bccEmailArchiveId === undefined || bccEmailArchiveId === null) {
        throw new Error("Missing the required parameter 'bccEmailArchiveId' when calling deleteBCCEmailArchive");
      }

      if (typeof callback !== 'function' && arguments.length && typeof arguments[arguments.length - 1] === 'function') {
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length - 1];
      }

      const pathParams = {
        accountId,
        bccEmailArchiveId,
      };
      const queryParams = {
      };
      const headerParams = {
      };
      const formParams = {
      };

      const authNames = ['docusignAccessCode'];
      const contentTypes = [];
      const accepts = ['application/json'];
      const returnType = null;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/settings/bcc_email_archives/{bccEmailArchiveId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback,
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getBCCEmailArchiveHistoryList operation. If none specified a Promise will be returned.
     * @callback module:api/EmailArchiveApi~getBCCEmailArchiveHistoryListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BccEmailArchiveHistoryList} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get the blind carbon copy email archive history entries for the specified archive
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {String} bccEmailArchiveId
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.count
     * @param {String} optsOrCallback.startPosition
     * @param {module:api/EmailArchiveApi~getBCCEmailArchiveHistoryListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BccEmailArchiveHistoryList}
     */
    this.getBCCEmailArchiveHistoryList = function (accountId, bccEmailArchiveId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      const postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getBCCEmailArchiveHistoryList");
      }

      // verify the required parameter 'bccEmailArchiveId' is set
      if (bccEmailArchiveId === undefined || bccEmailArchiveId === null) {
        throw new Error("Missing the required parameter 'bccEmailArchiveId' when calling getBCCEmailArchiveHistoryList");
      }

      if (typeof callback !== 'function' && arguments.length && typeof arguments[arguments.length - 1] === 'function') {
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length - 1];
      }

      const pathParams = {
        accountId,
        bccEmailArchiveId,
      };
      const queryParams = {
        count: optsOrCallback.count,
        start_position: optsOrCallback.startPosition,
      };
      const headerParams = {
      };
      const formParams = {
      };

      const authNames = ['docusignAccessCode'];
      const contentTypes = [];
      const accepts = ['application/json'];
      const returnType = BccEmailArchiveHistoryList;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/settings/bcc_email_archives/{bccEmailArchiveId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback,
      );
    };

    /**
     * (Optional) Callback function to receive the result of the getBCCEmailArchiveList operation. If none specified a Promise will be returned.
     * @callback module:api/EmailArchiveApi~getBCCEmailArchiveListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BccEmailArchiveList} data The data returned by the service call.
     * @param {String} If a callback was specified, the response The complete HTTP response, else a Promise resolving the response Data.
     */

    /**
     * Get the blind carbon copy email archive entries owned by the specified account
     * @param {String} accountId The external account number (int) or account ID Guid.
     * @param {Object} optsOrCallback Optional parameters, if you are passing no optional parameters, you can either pass a null or omit this parameter entirely.
     * @param {String} optsOrCallback.count
     * @param {String} optsOrCallback.startPosition
     * @param {module:api/EmailArchiveApi~getBCCEmailArchiveListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BccEmailArchiveList}
     */
    this.getBCCEmailArchiveList = function (accountId, optsOrCallback, callback) {
      optsOrCallback = optsOrCallback || {};

      if (typeof optsOrCallback === 'function') {
        callback = optsOrCallback;
        optsOrCallback = {};
      }

      const postBody = null;

      // verify the required parameter 'accountId' is set
      if (accountId === undefined || accountId === null) {
        throw new Error("Missing the required parameter 'accountId' when calling getBCCEmailArchiveList");
      }

      if (typeof callback !== 'function' && arguments.length && typeof arguments[arguments.length - 1] === 'function') {
        if (typeof optsOrCallback !== 'undefined') {
          optsOrCallback = callback;
        }
        callback = arguments[arguments.length - 1];
      }

      const pathParams = {
        accountId,
      };
      const queryParams = {
        count: optsOrCallback.count,
        start_position: optsOrCallback.startPosition,
      };
      const headerParams = {
      };
      const formParams = {
      };

      const authNames = ['docusignAccessCode'];
      const contentTypes = [];
      const accepts = ['application/json'];
      const returnType = BccEmailArchiveList;

      return this.apiClient.callApi(
        '/v2.1/accounts/{accountId}/settings/bcc_email_archives', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback,
      );
    };
  };

  return exports;
}));
