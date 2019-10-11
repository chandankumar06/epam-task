export class MetricDetails {
    constructor(
        public m_id?: string,
        public p_id?: string,
        public i_id?: string,
        public m_title?: string,
        public m_dec?: string,
        public p_title?:string,
        public i_title?:string
        
    ) {
        this.m_id = m_id;
        this.p_id = p_id;
        this.i_id = i_id;
        this.m_title = m_title;
        this.m_dec = m_dec;
        this.p_title=p_title;
        this.i_title=i_title;
    }
}

