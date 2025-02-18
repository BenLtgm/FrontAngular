/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { apiFilmGet$Json } from '../fn/film/api-film-get-json';
import { ApiFilmGet$Json$Params } from '../fn/film/api-film-get-json';
import { apiFilmGet$Plain } from '../fn/film/api-film-get-plain';
import { ApiFilmGet$Plain$Params } from '../fn/film/api-film-get-plain';
import { apiFilmIdDelete } from '../fn/film/api-film-id-delete';
import { ApiFilmIdDelete$Params } from '../fn/film/api-film-id-delete';
import { apiFilmIdGet$Json } from '../fn/film/api-film-id-get-json';
import { ApiFilmIdGet$Json$Params } from '../fn/film/api-film-id-get-json';
import { apiFilmIdGet$Plain } from '../fn/film/api-film-id-get-plain';
import { ApiFilmIdGet$Plain$Params } from '../fn/film/api-film-id-get-plain';
import { apiFilmIdPut } from '../fn/film/api-film-id-put';
import { ApiFilmIdPut$Params } from '../fn/film/api-film-id-put';
import { apiFilmPost } from '../fn/film/api-film-post';
import { ApiFilmPost$Params } from '../fn/film/api-film-post';
import { Film } from '../models/film';

@Injectable({ providedIn: 'root' })
export class FilmService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiFilmGet()` */
  static readonly ApiFilmGetPath = '/api/Film';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFilmGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFilmGet$Plain$Response(params?: ApiFilmGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Film>>> {
    return apiFilmGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFilmGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFilmGet$Plain(params?: ApiFilmGet$Plain$Params, context?: HttpContext): Observable<Array<Film>> {
    return this.apiFilmGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Film>>): Array<Film> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFilmGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFilmGet$Json$Response(params?: ApiFilmGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Film>>> {
    return apiFilmGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFilmGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFilmGet$Json(params?: ApiFilmGet$Json$Params, context?: HttpContext): Observable<Array<Film>> {
    return this.apiFilmGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Film>>): Array<Film> => r.body)
    );
  }

  /** Path part for operation `apiFilmPost()` */
  static readonly ApiFilmPostPath = '/api/Film';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFilmPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFilmPost$Response(params: ApiFilmPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiFilmPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFilmPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFilmPost(params: ApiFilmPost$Params, context?: HttpContext): Observable<void> {
    return this.apiFilmPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiFilmIdGet()` */
  static readonly ApiFilmIdGetPath = '/api/Film/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFilmIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFilmIdGet$Plain$Response(params: ApiFilmIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Film>> {
    return apiFilmIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFilmIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFilmIdGet$Plain(params: ApiFilmIdGet$Plain$Params, context?: HttpContext): Observable<Film> {
    return this.apiFilmIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Film>): Film => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFilmIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFilmIdGet$Json$Response(params: ApiFilmIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Film>> {
    return apiFilmIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFilmIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFilmIdGet$Json(params: ApiFilmIdGet$Json$Params, context?: HttpContext): Observable<Film> {
    return this.apiFilmIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Film>): Film => r.body)
    );
  }

  /** Path part for operation `apiFilmIdPut()` */
  static readonly ApiFilmIdPutPath = '/api/Film/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFilmIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFilmIdPut$Response(params: ApiFilmIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiFilmIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFilmIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiFilmIdPut(params: ApiFilmIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiFilmIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiFilmIdDelete()` */
  static readonly ApiFilmIdDeletePath = '/api/Film/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFilmIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFilmIdDelete$Response(params: ApiFilmIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiFilmIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFilmIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFilmIdDelete(params: ApiFilmIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiFilmIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
