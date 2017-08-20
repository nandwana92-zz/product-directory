import template from './product-list.html';

export const productList = {
  bindings: {},
  template,
  controller: class productList {
    /** @ngInject */
    constructor(myData) {
      this.myData = myData;
      this.products = myData.products;
      this.searchText = '';
    }
    $onInit() {}
  }
};
