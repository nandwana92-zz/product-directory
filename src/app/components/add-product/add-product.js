import template from './add-product.html';

export const addProduct = {
  bindings: {},
  template,
  controller: class addProduct {
    /** @ngInject */
    constructor(myData, productService, utilityService, $state, $stateParams) {
      this.$state = $state;
      this.$stateParams = $stateParams;
      this.myData = myData;
      this.productService = productService;
      this.utilityService = utilityService;
      this.stateName = this.$state.current.name;
    }
    $onInit() {
      if (this.stateName === 'addProduct') {
        this.product = {
          id: this.utilityService.getRandomId(),
          image: '',
          name: '',
          description: '',
          up: 0,
          down: 0,
          userScore: 0
        };
      } else {
        this.product = this.productService.getProductById(this.$stateParams.productId)
      }
    }
    submitForm() {
      if (this.stateName === 'addProduct') {
        this.myData.products.push(this.product);
      }

      this.$state.go('productList');
    }
  }
};
