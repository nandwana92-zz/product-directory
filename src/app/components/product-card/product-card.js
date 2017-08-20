import template from './product-card.html';

export const productCard = {
  bindings: {
    size: '@',
    product: '='
  },
  template,
  controller: class productCard {
    /** @ngInject */
    constructor($state) {
      this.$state = $state;
    }
    $onInit() {
      this.totalVotes = this.product.up + this.product.down;
    }
    loadProductDetails() {
      this.$state.go('product', {
        productId: this.product.id
      });
    }
    updateScore(e, vote) {
      e.stopPropagation();

      const voteToScoreMapping = {
        up: 1,
        down: -1
      };

      if (voteToScoreMapping[vote] === this.product.userScore) {
        this.product.userScore = 0;
        this.product[vote] -= 1;
      } else if (this.product.userScore === 0) {
        this.product.userScore = voteToScoreMapping[vote];
        this.product[vote] += 1;
      } else {
        this.product.userScore = voteToScoreMapping[vote];

        for (const key in voteToScoreMapping) {
          if (vote === key) {
            this.product[key] += 1;
          } else {
            this.product[key] -= 1;
          }
        }
      }
    }
  }
};
