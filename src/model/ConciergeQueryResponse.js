/**
 * DocuSign REST API
 * The DocuSign REST API provides you with a powerful, convenient, and simple Web services API for interacting with DocuSign.
 *
 * OpenAPI spec version: v2
 * Contact: devcenter@docusign.com
 *
 * NOTE: This class is auto generated. Do not edit the class manually and submit a new issue instead.
 *
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Docusign) {
      root.Docusign = {};
    }
    root.Docusign.ConciergeQueryResponse = factory(root.Docusign.ApiClient);
  }
}(this, (ApiClient) => {
  /**
   * The ConciergeQueryResponse model module.
   * @module model/ConciergeQueryResponse
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ConciergeQueryResponse</code>.
   * @alias module:model/ConciergeQueryResponse
   * @class
   */
  const exports = function () {
    const _this = this;
  };

  /**
   * Constructs a <code>ConciergeQueryResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConciergeQueryResponse} obj Optional instance to populate.
   * @return {module:model/ConciergeQueryResponse} The populated <code>ConciergeQueryResponse</code> instance.
   */
  exports.constructFromObject = function (data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entityLocale')) {
        obj.entityLocale = ApiClient.convertToType(data.entityLocale, 'String');
      }
      if (data.hasOwnProperty('entityTimeZone')) {
        obj.entityTimeZone = ApiClient.convertToType(data.entityTimeZone, 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj.message = ApiClient.convertToType(data.message, 'String');
      }
      if (data.hasOwnProperty('zuoraEntityName')) {
        obj.zuoraEntityName = ApiClient.convertToType(data.zuoraEntityName, 'String');
      }
    }
    return obj;
  };

  /**
   *
   * @member {String} entityLocale
   */
  exports.prototype.entityLocale = undefined;
  /**
   *
   * @member {String} entityTimeZone
   */
  exports.prototype.entityTimeZone = undefined;
  /**
   *
   * @member {String} message
   */
  exports.prototype.message = undefined;
  /**
   *
   * @member {String} zuoraEntityName
   */
  exports.prototype.zuoraEntityName = undefined;

  return exports;
}));
