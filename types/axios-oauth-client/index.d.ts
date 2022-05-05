// Type definitions for ZeroMQ Node
// Project: https://github.com/JustinTulloss/zeromq.node
// Definitions by: Dave McKeown <https://github.com/davemckeown>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { AxiosInstance } from 'axios'
import AxiosTokenProvider from 'axios-token-interceptor'

type ClientOpts = {
  url: string
  [key: string]: string
}

// https://www.rfc-editor.org/rfc/rfc6749#section-4.1.2.1
type APICallErrorData = {
  error:
    | 'invalid_request'
    | 'unauthorized_client'
    | 'access_denied'
    | 'unsupported_response_type'
    | 'invalid_scope'
    | 'server_error'
    | 'temporarily_unavailable'
  error_description?: string
  error_uri?: string
  state?: string // REQUIRED if caller sent it
}

// see https://www.rfc-editor.org/rfc/rfc6749#section-4.1.4
type AccessTokenResponseData = {
  access_token: string
  expires_in: number
  refresh_token?: string
  [key: string]: string | number | undefined
}

declare function client(
  axios: AxiosInstance,
  options: ClientOpts
): () => Promise<AccessTokenResponseData | APICallErrorData>

declare function interceptor(
  tokenProvider: AxiosTokenProvider.TokenProvider,
  authenticate: any
): AxiosTokenProvider.TokenProvider

export {
    client,
    interceptor,
    APICallErrorData,
    AccessTokenResponseData,
    ClientOpts
}
