export class ProductDetails {
  constructor(
    public p_id?: string,
    public p_title?: string,
    public p_dec?: string,
  ) {
    this.p_id = p_id;
    this.p_title = p_title;
    this.p_dec = p_dec
  }
}
