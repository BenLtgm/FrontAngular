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

import { apiArtistArtistIdAddFilmFilmIdPost } from '../fn/artist/api-artist-artist-id-add-film-film-id-post';
import { ApiArtistArtistIdAddFilmFilmIdPost$Params } from '../fn/artist/api-artist-artist-id-add-film-film-id-post';
import { apiArtistArtistIdDelete } from '../fn/artist/api-artist-artist-id-delete';
import { ApiArtistArtistIdDelete$Params } from '../fn/artist/api-artist-artist-id-delete';
import { apiArtistArtistIdDeleteFilmFilmIdDelete } from '../fn/artist/api-artist-artist-id-delete-film-film-id-delete';
import { ApiArtistArtistIdDeleteFilmFilmIdDelete$Params } from '../fn/artist/api-artist-artist-id-delete-film-film-id-delete';
import { apiArtistGet$Json } from '../fn/artist/api-artist-get-json';
import { ApiArtistGet$Json$Params } from '../fn/artist/api-artist-get-json';
import { apiArtistGet$Plain } from '../fn/artist/api-artist-get-plain';
import { ApiArtistGet$Plain$Params } from '../fn/artist/api-artist-get-plain';
import { apiArtistIdGet$Json } from '../fn/artist/api-artist-id-get-json';
import { ApiArtistIdGet$Json$Params } from '../fn/artist/api-artist-id-get-json';
import { apiArtistIdGet$Plain } from '../fn/artist/api-artist-id-get-plain';
import { ApiArtistIdGet$Plain$Params } from '../fn/artist/api-artist-id-get-plain';
import { apiArtistIdPut } from '../fn/artist/api-artist-id-put';
import { ApiArtistIdPut$Params } from '../fn/artist/api-artist-id-put';
import { apiArtistPost$Json } from '../fn/artist/api-artist-post-json';
import { ApiArtistPost$Json$Params } from '../fn/artist/api-artist-post-json';
import { apiArtistPost$Plain } from '../fn/artist/api-artist-post-plain';
import { ApiArtistPost$Plain$Params } from '../fn/artist/api-artist-post-plain';
import { Artist } from '../models/artist';

@Injectable({ providedIn: 'root' })
export class ArtistService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiArtistGet()` */
  static readonly ApiArtistGetPath = '/api/Artist';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiArtistGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiArtistGet$Plain$Response(params?: ApiArtistGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Artist>>> {
    return apiArtistGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiArtistGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiArtistGet$Plain(params?: ApiArtistGet$Plain$Params, context?: HttpContext): Observable<Array<Artist>> {
    return this.apiArtistGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Artist>>): Array<Artist> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiArtistGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiArtistGet$Json$Response(params?: ApiArtistGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Artist>>> {
    return apiArtistGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiArtistGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiArtistGet$Json(params?: ApiArtistGet$Json$Params, context?: HttpContext): Observable<Array<Artist>> {
    return this.apiArtistGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Artist>>): Array<Artist> => r.body)
    );
  }

  /** Path part for operation `apiArtistPost()` */
  static readonly ApiArtistPostPath = '/api/Artist';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiArtistPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiArtistPost$Plain$Response(params: ApiArtistPost$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Artist>> {
    return apiArtistPost$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiArtistPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiArtistPost$Plain(params: ApiArtistPost$Plain$Params, context?: HttpContext): Observable<Artist> {
    return this.apiArtistPost$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Artist>): Artist => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiArtistPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiArtistPost$Json$Response(params: ApiArtistPost$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Artist>> {
    return apiArtistPost$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiArtistPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiArtistPost$Json(params: ApiArtistPost$Json$Params, context?: HttpContext): Observable<Artist> {
    return this.apiArtistPost$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Artist>): Artist => r.body)
    );
  }

  /** Path part for operation `apiArtistIdGet()` */
  static readonly ApiArtistIdGetPath = '/api/Artist/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiArtistIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiArtistIdGet$Plain$Response(params: ApiArtistIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Artist>> {
    return apiArtistIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiArtistIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiArtistIdGet$Plain(params: ApiArtistIdGet$Plain$Params, context?: HttpContext): Observable<Artist> {
    return this.apiArtistIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Artist>): Artist => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiArtistIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiArtistIdGet$Json$Response(params: ApiArtistIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Artist>> {
    return apiArtistIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiArtistIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiArtistIdGet$Json(params: ApiArtistIdGet$Json$Params, context?: HttpContext): Observable<Artist> {
    return this.apiArtistIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Artist>): Artist => r.body)
    );
  }

  /** Path part for operation `apiArtistIdPut()` */
  static readonly ApiArtistIdPutPath = '/api/Artist/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiArtistIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiArtistIdPut$Response(params: ApiArtistIdPut$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiArtistIdPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiArtistIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiArtistIdPut(params: ApiArtistIdPut$Params, context?: HttpContext): Observable<void> {
    return this.apiArtistIdPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiArtistArtistIdAddFilmFilmIdPost()` */
  static readonly ApiArtistArtistIdAddFilmFilmIdPostPath = '/api/Artist/{artistId}/addFilm/{filmId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiArtistArtistIdAddFilmFilmIdPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiArtistArtistIdAddFilmFilmIdPost$Response(params: ApiArtistArtistIdAddFilmFilmIdPost$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiArtistArtistIdAddFilmFilmIdPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiArtistArtistIdAddFilmFilmIdPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiArtistArtistIdAddFilmFilmIdPost(params: ApiArtistArtistIdAddFilmFilmIdPost$Params, context?: HttpContext): Observable<void> {
    return this.apiArtistArtistIdAddFilmFilmIdPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiArtistArtistIdDeleteFilmFilmIdDelete()` */
  static readonly ApiArtistArtistIdDeleteFilmFilmIdDeletePath = '/api/Artist/{artistId}/deleteFilm/{filmId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiArtistArtistIdDeleteFilmFilmIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiArtistArtistIdDeleteFilmFilmIdDelete$Response(params: ApiArtistArtistIdDeleteFilmFilmIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiArtistArtistIdDeleteFilmFilmIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiArtistArtistIdDeleteFilmFilmIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiArtistArtistIdDeleteFilmFilmIdDelete(params: ApiArtistArtistIdDeleteFilmFilmIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiArtistArtistIdDeleteFilmFilmIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiArtistArtistIdDelete()` */
  static readonly ApiArtistArtistIdDeletePath = '/api/Artist/{artistId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiArtistArtistIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiArtistArtistIdDelete$Response(params: ApiArtistArtistIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return apiArtistArtistIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiArtistArtistIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiArtistArtistIdDelete(params: ApiArtistArtistIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.apiArtistArtistIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
