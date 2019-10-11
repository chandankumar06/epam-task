import { Pipe, PipeTransform } from '@angular/core';
import { ProductDetails } from './interfaces/productDetails.interface'
import { AppService } from '././app.service';
@Pipe({
  name: 'producttitlefilter'
})
export class ProducttitlefilterPipe implements PipeTransform {

  transform(products: ProductDetails[], nameSearch?: any, ): any {

    
    for (let prod of products) {
  
      if (prod.p_id == nameSearch) {
        return prod.p_title
      }
    }
  }


}
