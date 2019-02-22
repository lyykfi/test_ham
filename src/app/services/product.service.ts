import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Config } from '../models/config.model';
import camelcaseKeys from 'camelcase-keys';
import { Product } from '../models/product.model';

/**
 * ProductService service.
 */
@Injectable()
export class ProductService {
  /**
   * An array with products.
   */
  productList: Product[] = null;

  /**
   * constructor.
   * @param http - An object instance of HttpClient.
   * @param configService - An object instance of ConfigService.
   */
  constructor(private http: HttpClient,
              private configService: ConfigService) {}

  /**
   * Gets product by id.
   * @param id - product id.
   */
  getProductById(id: number): Promise<Product> {
    return new Promise(async (resolve, reject) => {
      await this.getAll();
      resolve(this.productList.find((item) => item.id === id));
    });
  }

  /**
   * Gets all products.
   */
  getAll(): Promise<Product[]> {
    return new Promise((resolve, reject) => {
      if (this.productList) {
        resolve(this.productList);
      } else {
        this.configService.getConfig().subscribe((data: Config) => {
          return this.http.get(data.apiUrl + data.jobsUrl).subscribe((resultData: any) => {
            if (resultData.body && !resultData.error) {
              const formatedData = resultData.body.map((item) => {
                return camelcaseKeys(item) as Product[];
              });

              this.productList = formatedData;

              resolve(formatedData);
            } else {
              reject(resultData.error);
            }
          });
        });
      }
    });
  }
}
