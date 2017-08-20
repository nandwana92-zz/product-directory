import template from './product.html';

export const product = {
  bindings: {},
  template,
  controller: class product {
    /** @ngInject */
    constructor(myData, productService, $stateParams) {
      this.$stateParams = $stateParams;
      this.productService = productService;
      this.product = this.productService.getProductById(this.$stateParams.productId)
    }
    $onInit() {}
  }
};
