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
/**
 * 
 * @export
 * @interface FuncAnalyzeOK
 */
export interface FuncAnalyzeOK {
    /**
     * 
     * @type {string}
     * @memberof FuncAnalyzeOK
     */
    boc: string;
    /**
     * 
     * @type {number}
     * @memberof FuncAnalyzeOK
     */
    dateCreate: number;
    /**
     * 
     * @type {string}
     * @memberof FuncAnalyzeOK
     */
    fift: string;
    /**
     * 
     * @type {string}
     * @memberof FuncAnalyzeOK
     */
    id: string;
}

/**
 * Check if a given object implements the FuncAnalyzeOK interface.
 */
export function instanceOfFuncAnalyzeOK(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "boc" in value;
    isInstance = isInstance && "dateCreate" in value;
    isInstance = isInstance && "fift" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function FuncAnalyzeOKFromJSON(json: any): FuncAnalyzeOK {
    return FuncAnalyzeOKFromJSONTyped(json, false);
}

export function FuncAnalyzeOKFromJSONTyped(json: any, ignoreDiscriminator: boolean): FuncAnalyzeOK {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'boc': json['boc'],
        'dateCreate': json['date_create'],
        'fift': json['fift'],
        'id': json['id'],
    };
}

export function FuncAnalyzeOKToJSON(value?: FuncAnalyzeOK | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'boc': value.boc,
        'date_create': value.dateCreate,
        'fift': value.fift,
        'id': value.id,
    };
}

