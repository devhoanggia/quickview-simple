#Module: Quickview Simple
- Article: Gia Hoang
- Opensource: Magento 1.9.x

#Description
Quick view product in catalog list

#Install
- Copy all file to your project

- Install library
  ```sh
  $ bower install
  ```
  Extension required jquery and bootstrap

- Add line code to your template.
  Here, I put to file :
  ```sh
  app/design/frontend/rwd/default/template/catalog/product/list.phtml
  ```
  In tag ```sh <ul class="add-to-links">(List Mode) ``` and ```sh <ul class="add-to-links">(Grid Mode) ```
  ```sh
    <li>
      <a href="#quickViewModal"  data-toggle="modal"  class="quick-view-link" data-url="<?php echo Mage::getBaseUrl(), 'quickview/quickview/view/id/', $_product->getId() ?>/"><?php echo $this->__('Quick View') ?></a>
    </li>
  ```