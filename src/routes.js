export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('productList', {
    url: '/',
    component: 'productList'
  }).state('addProduct', {
    url: '/add-product',
    component: 'addProduct'
  }).state('editProduct', {
    url: '/edit-product/:productId',
    component: 'addProduct'
  }).state('product', {
    url: '/product/:productId',
    component: 'product'
  });
}
