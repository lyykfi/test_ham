import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * ConfigService service.
 */
@Injectable()
export class ConfigService {
  /**
   * The link for config file.
   */
  configUrl = 'assets/config.json';

  /**
   * constructor
   * @param http - An instance of HttpClient.
   */
  constructor(private http: HttpClient) { }

  /**
   * Gets config.
   */
  getConfig(): Observable<any> {
    return this.http.get(this.configUrl);
  }
}
