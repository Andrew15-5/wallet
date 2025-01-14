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

import { exists, mapValues } from '../runtime';
import type { AccountAddress } from './AccountAddress';
import {
    AccountAddressFromJSON,
    AccountAddressFromJSONTyped,
    AccountAddressToJSON,
} from './AccountAddress';

/**
 * 
 * @export
 * @interface DomainBid
 */
export interface DomainBid {
    /**
     * 
     * @type {AccountAddress}
     * @memberof DomainBid
     */
    bidder: AccountAddress;
    /**
     * 
     * @type {boolean}
     * @memberof DomainBid
     */
    success: boolean;
    /**
     * 
     * @type {string}
     * @memberof DomainBid
     */
    txHash: string;
    /**
     * 
     * @type {number}
     * @memberof DomainBid
     */
    txTime: number;
    /**
     * 
     * @type {number}
     * @memberof DomainBid
     */
    value: number;
}

/**
 * Check if a given object implements the DomainBid interface.
 */
export function instanceOfDomainBid(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "bidder" in value;
    isInstance = isInstance && "success" in value;
    isInstance = isInstance && "txHash" in value;
    isInstance = isInstance && "txTime" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function DomainBidFromJSON(json: any): DomainBid {
    return DomainBidFromJSONTyped(json, false);
}

export function DomainBidFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainBid {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bidder': AccountAddressFromJSON(json['bidder']),
        'success': json['success'],
        'txHash': json['txHash'],
        'txTime': json['txTime'],
        'value': json['value'],
    };
}

export function DomainBidToJSON(value?: DomainBid | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bidder': AccountAddressToJSON(value.bidder),
        'success': value.success,
        'txHash': value.txHash,
        'txTime': value.txTime,
        'value': value.value,
    };
}

