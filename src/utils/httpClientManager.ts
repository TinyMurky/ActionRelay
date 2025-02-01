import * as httpm from '@actions/http-client'
export default class HttpClientManager {
  static readonly #USER_AGENT = `ActionRelay`

  // static readonly #USER_AGENT = `ActionRelay/0.0.1`
  static httpClient: httpm.HttpClient | null = null

  /**
   * Get HttpClient with [USER_AGENT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent) header
   */
  public static getInstance(): httpm.HttpClient {
    if (!this.httpClient) {
      this.httpClient = new httpm.HttpClient(HttpClientManager.#USER_AGENT)
    }

    return this.httpClient
  }
}
