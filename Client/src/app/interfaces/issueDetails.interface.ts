export class IssueDetails {
    constructor(

        public p_id?: string,
        public i_id?: string,
        public p_title?:string,
        public i_title?: string,
        public i_category?: string,
        
    ) {
        this.p_id = p_id;
        this.i_id = i_id;
        this.i_title = i_title;
        this.i_category = i_category;
        this.p_title=p_title;

    }
}







