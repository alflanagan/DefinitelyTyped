// Type definitions for axios-oauth-client 1.4
// Project: https://github.com/compwright/axios-oauth-client
// Definitions by: Adrian Flanagan <https://github.com/alflanagan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript version 4.7

/// <reference types="node" />
import { AxiosInstance } from 'axios';
import AxiosTokenProvider = require('axios-token-interceptor');

export interface ClientOpts {
    url: string;
    [key: string]: string;
}

// https://www.rfc-editor.org/rfc/rfc6749#section-4.1.2.1
export interface APICallErrorData {
    error:
        | 'invalid_request'
        | 'unauthorized_client'
        | 'access_denied'
        | 'unsupported_response_type'
        | 'invalid_scope'
        | 'server_error'
        | 'temporarily_unavailable';
    error_description?: string;
    error_uri?: string;
    state?: string; // REQUIRED if caller sent it
}

// see https://www.rfc-editor.org/rfc/rfc6749#section-4.1.4
export interface AccessTokenResponseData {
    access_token: string;
    expires_in: number;
    refresh_token?: string;
    [key: string]: string | number | undefined;
}

export function client(
    axios: AxiosInstance,
    options: ClientOpts,
): () => Promise<AccessTokenResponseData | APICallErrorData>;

export function interceptor(
    tokenProvider: AxiosTokenProvider.TokenProvider,
    authenticate: any,
): AxiosTokenProvider.TokenProvider;
