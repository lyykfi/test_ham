import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Config } from '../models/config.model';
import camelcaseKeys from 'camelcase-keys';
import { Product } from '../models/product.model';

@Injectable()
export class ProductService {
  productList: Product[] = null;

  constructor(private http: HttpClient,
              private configService: ConfigService) {}

  getProductById(id: number): Promise<Product> {
    return new Promise(async (resolve, reject) => {
      await this.getAll();
      resolve(this.productList.find((item) => item.id === id));
    });
  }

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
