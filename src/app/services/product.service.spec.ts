import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, getTestBed } from '@angular/core/testing';
import { ProductService } from './product.service';
import { ConfigService } from './config.service';
import { MockConfigService } from './config.service.spec';

describe('Service: ProductService', () => {
  let injector: TestBed;
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService, {
        provide: ConfigService,
        useValue: new MockConfigService()
      }]
    });
    injector = getTestBed();
    service = injector.get(ProductService);
    httpMock = injector.get(HttpTestingController);
  });

  describe('#getAll', () => {
    it('should be return Promise<Product[]>', () => {
      const bodyData = [
        {
          id: '98969442',
          title: '90 m� Dach neu eindecken, Material ben�tigt',
        }
      ];
      const mockData = {
        errno: 0,
        error: '',
        body: bodyData
      };

      const data = service.getAll();
      data.then((result) => {
        expect(bodyData).toEqual(result as any);
      });

      const req = httpMock.expectOne('/assets/data/jobs.json');
      expect(req.request.method).toBe('GET');
      req.flush(mockData);
    });
  });

  describe('#getProductById', () => {
    it('should be return Promise<Product[]>', () => {
      const bodyData = [
        {
          id: '1',
          title: '111',
        }, {
          id: '2',
          title: '222',
        }
      ];
      const mockData = {
        errno: 0,
        error: '',
        body: bodyData
      };

      const data = service.getProductById('1');
      data.then((result) => {
        expect(result).toEqual({
          id: '1',
          title: '111',
        } as any);
      });

      const req = httpMock.expectOne('/assets/data/jobs.json');
      expect(req.request.method).toBe('GET');
      req.flush(mockData);
    });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
