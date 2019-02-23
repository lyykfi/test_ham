import { ConfigService } from './config.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, getTestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

describe('Service: ConfigService', () => {
  let injector: TestBed;
  let service: ConfigService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConfigService]
    });
    injector = getTestBed();
    service = injector.get(ConfigService);
    httpMock = injector.get(HttpTestingController);
  });

  describe('#getUsers', () => {
    it('should return an Observable<any>', () => {
      const mockData = {
        apiUrl: '/assets/',
        jobsUrl: 'data/jobs.json',
      };

      service.getConfig().subscribe(config => {
        expect(config).toEqual(mockData);
      });

      const req = httpMock.expectOne('assets/config.json');
      expect(req.request.method).toBe('GET');
      req.flush(mockData);
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
});

@Injectable()
export class MockConfigService {
  getConfig() {
    const observable = Observable.create((observer) => {
      observer.next({
        apiUrl: '/assets/',
        jobsUrl: 'data/jobs.json',
      });
    });

    return observable;
  }
}
