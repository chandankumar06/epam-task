import { Pipe, PipeTransform } from '@angular/core';
import { IssueDetails } from './interfaces/IssueDetails.interface'

@Pipe({
  name: 'issuetitlefilter'
})
export class IssuetitlefilterPipe implements PipeTransform {
  transform(issues: IssueDetails[], nameSearch?: any, ): any {

    
    for (let prod of issues) {
  
      if (prod.i_id == nameSearch) {
        return prod.i_title
      }
    }
  }



}
