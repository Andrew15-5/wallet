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
  AccountStaking,
  GetBlock401Response,
  StakingPoolInfo200Response,
  StakingPools200Response,
} from '../models';
import {
    AccountStakingFromJSON,
    AccountStakingToJSON,
    GetBlock401ResponseFromJSON,
    GetBlock401ResponseToJSON,
    StakingPoolInfo200ResponseFromJSON,
    StakingPoolInfo200ResponseToJSON,
    StakingPools200ResponseFromJSON,
    StakingPools200ResponseToJSON,
} from '../models';

export interface PoolsByNominatorsRequest {
    accountId: string;
}

export interface StakingPoolInfoRequest {
    accountId: string;
    acceptLanguage?: string;
}

export interface StakingPoolsRequest {
    availableFor?: string;
    includeUnverified?: boolean;
    acceptLanguage?: string;
}

/**
 * StakingApi - interface
 * 
 * @export
 * @interface StakingApiInterface
 */
export interface StakingApiInterface {
    /**
     * All pools where account participates
     * @param {string} accountId account ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StakingApiInterface
     */
    poolsByNominatorsRaw(requestParameters: PoolsByNominatorsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountStaking>>;

    /**
     * All pools where account participates
     */
    poolsByNominators(requestParameters: PoolsByNominatorsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountStaking>;

    /**
     * Pool info
     * @param {string} accountId account ID
     * @param {string} [acceptLanguage] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StakingApiInterface
     */
    stakingPoolInfoRaw(requestParameters: StakingPoolInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StakingPoolInfo200Response>>;

    /**
     * Pool info
     */
    stakingPoolInfo(requestParameters: StakingPoolInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StakingPoolInfo200Response>;

    /**
     * All pools available in network
     * @param {string} [availableFor] account ID
     * @param {boolean} [includeUnverified] return also pools not from white list - just compatible by interfaces (maybe dangerous!)
     * @param {string} [acceptLanguage] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StakingApiInterface
     */
    stakingPoolsRaw(requestParameters: StakingPoolsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StakingPools200Response>>;

    /**
     * All pools available in network
     */
    stakingPools(requestParameters: StakingPoolsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StakingPools200Response>;

}

/**
 * 
 */
export class StakingApi extends runtime.BaseAPI implements StakingApiInterface {

    /**
     * All pools where account participates
     */
    async poolsByNominatorsRaw(requestParameters: PoolsByNominatorsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountStaking>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling poolsByNominators.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/staking/nominator/{account_id}/pools`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountStakingFromJSON(jsonValue));
    }

    /**
     * All pools where account participates
     */
    async poolsByNominators(requestParameters: PoolsByNominatorsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountStaking> {
        const response = await this.poolsByNominatorsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Pool info
     */
    async stakingPoolInfoRaw(requestParameters: StakingPoolInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StakingPoolInfo200Response>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling stakingPoolInfo.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
            headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
        }

        const response = await this.request({
            path: `/v2/staking/pool/{account_id}`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StakingPoolInfo200ResponseFromJSON(jsonValue));
    }

    /**
     * Pool info
     */
    async stakingPoolInfo(requestParameters: StakingPoolInfoRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StakingPoolInfo200Response> {
        const response = await this.stakingPoolInfoRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * All pools available in network
     */
    async stakingPoolsRaw(requestParameters: StakingPoolsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StakingPools200Response>> {
        const queryParameters: any = {};

        if (requestParameters.availableFor !== undefined) {
            queryParameters['available_for'] = requestParameters.availableFor;
        }

        if (requestParameters.includeUnverified !== undefined) {
            queryParameters['include_unverified'] = requestParameters.includeUnverified;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
            headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
        }

        const response = await this.request({
            path: `/v2/staking/pools`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StakingPools200ResponseFromJSON(jsonValue));
    }

    /**
     * All pools available in network
     */
    async stakingPools(requestParameters: StakingPoolsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StakingPools200Response> {
        const response = await this.stakingPoolsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
