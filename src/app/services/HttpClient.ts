enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PATCH = 'PATCH',
  DELETE = 'DELETE'
}

export class HttpClient {
  private readonly DEFAULT_HEADERS: HeadersInit = {
    'Content-Type': 'application/json'
  };

  constructor() {}

  get<T>(url: string, headers?: HeadersInit): Promise<T> {
    return this.fetchData<T>(url, HttpMethod.GET, headers, null);
  }

  post<T>(url: string, body?: any, headers?: HeadersInit): Promise<T> {
    return this.fetchData<T>(url, HttpMethod.POST, headers, body);
  }

  patch<T>(url: string, body?: any, headers?: HeadersInit): Promise<T> {
    return this.fetchData<T>(url, HttpMethod.PATCH, headers, body);
  }

  delete<T>(url: string, headers?: HeadersInit): Promise<T> {
    return this.fetchData<T>(url, HttpMethod.DELETE, headers, null);
  }

  private fetchData<T>(
    url: string,
    method: HttpMethod,
    headers: HeadersInit = this.DEFAULT_HEADERS,
    requestBody?: any
  ): Promise<T> {
    const body = requestBody ? JSON.stringify(requestBody) : undefined;
    return fetch(url, {
      headers,
      method,
      body
    }).then((response) => response.json());
  }
}
