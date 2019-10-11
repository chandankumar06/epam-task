import { Pipe, PipeTransform } from '@angular/core';
import { ProductDetails } from './interfaces/productDetails.interface'

@Pipe({
  name: 'productfilter'
})
export class ProductfilterPipe implements PipeTransform {

  transform(products: ProductDetails[], nameSearch?: string, ): ProductDetails[] {

    if (!products) return [];
    if (!nameSearch) return products;
    nameSearch = nameSearch.toLocaleLowerCase();
    products=products.filter((user) => user.p_title.toLowerCase().includes(nameSearch.toLowerCase())) 
    return products;
  }


}

