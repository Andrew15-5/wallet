/* tslint:disable */
/* eslint-disable */
/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: contact@fslabs.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  GetBlock401Response,
  JettonInfo,
} from '../models';
import {
    GetBlock401ResponseFromJSON,
    GetBlock401ResponseToJSON,
    JettonInfoFromJSON,
    JettonInfoToJSON,
} from '../models';

export interface GetJettonInfoRequest {
    accountId: string;
}

/**
 * JettonsApi - interface
 * 
 * @export
 * @interface JettonsApiInterface
 */
export interface JettonsApiInterface {
    /**
     * Get jetton metadata by jetton master address
     * @param {string} accountId account ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JettonsApiInterface
     */
    getJettonInfoRaw(requestParameters: GetJettonInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JettonInfo>>;

    /**
     * Get jetton metadata by jetton master address
     */
    getJettonInfo(requestParameters: GetJettonInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JettonInfo>;

}

/**
 * 
 */
export class JettonsApi extends runtime.BaseAPI implements JettonsApiInterface {

    /**
     * Get jetton metadata by jetton master address
     */
    async getJettonInfoRaw(requestParameters: GetJettonInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<JettonInfo>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling getJettonInfo.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/jettons/{account_id}`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => JettonInfoFromJSON(jsonValue));
    }

    /**
     * Get jetton metadata by jetton master address
     */
    async getJettonInfo(requestParameters: GetJettonInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<JettonInfo> {
        const response = await this.getJettonInfoRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
