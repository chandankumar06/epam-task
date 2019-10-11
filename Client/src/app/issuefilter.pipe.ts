import { Pipe, PipeTransform } from '@angular/core';
import { IssueDetails } from './interfaces/IssueDetails.interface'

@Pipe({
  name: 'issuefilter'
})
export class IssuefilterPipe implements PipeTransform {
  transform(issues: IssueDetails[], nameSearch?: string, ): IssueDetails[] {

    if (!issues) return [];
    if (!nameSearch) return issues;
    nameSearch = nameSearch.toLocaleLowerCase();
    issues=issues.filter((user) => user.i_title.toLowerCase().includes(nameSearch.toLowerCase())) 
    return issues;
  }


}
