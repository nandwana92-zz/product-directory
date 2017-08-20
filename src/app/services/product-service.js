export default class productService {
  /** @ngInject */
  constructor(myData) {
    this.myData = myData;
  }
  getProductById(id) {
    return this.myData.products.find(item => item.id === id);
  }
}
