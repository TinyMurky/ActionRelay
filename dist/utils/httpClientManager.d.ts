import * as httpm from '@actions/http-client';
export default class HttpClientManager {
    #private;
    static httpClient: httpm.HttpClient | null;
    /**
     * Get HttpClient with [USER_AGENT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent) header
     */
    static getInstance(): httpm.HttpClient;
}
