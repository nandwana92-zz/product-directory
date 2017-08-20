import angular from 'angular';

import 'angular-ui-router';
import routesConfig from './routes';

import substringFilter from './app/filters/substring-filter';
import utilityService from './app/services/utility-service';
import productService from './app/services/product-service';
import fakeData from './app/data/fakeData.json';

import {addProduct} from './app/components/add-product/add-product';
import {product} from './app/components/product/product';
import {productCard} from './app/components/product-card/product-card';
import {productList} from './app/components/product-list/product-list';

import './index.scss';

angular
  .module('app', ['ui.router'])
  .config(routesConfig)
  .filter('substringFilter', substringFilter)
  .service('utilityService', utilityService)
  .service('productService', productService)
  .component('productCard', productCard)
  .component('addProduct', addProduct)
  .component('product', product)
  .component('productList', productList)
  .value('myData', fakeData);
