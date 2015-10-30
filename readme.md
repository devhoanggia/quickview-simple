#Module: Quickview Simple
Article: Gia Hoang
Opensource: Magento 1.9.x

#Description
Quick view product in catalog list

#Install:
- Copy all file to your project

- $ bower install
    Extension required jquery and bootstrap

- Add line code to your template
    Here, I put to file : app/design/frontend/rwd/default/template/catalog/product/list.phtml
    In tag <ul class="add-to-links">(List Mode) and <ul class="add-to-links">(Grid Mode)
      <li>
        <a href="#quickViewModal"  data-toggle="modal"  class="quick-view-link" data-url="<?php echo Mage::getBaseUrl(), 'quickview/quickview/view/id/', $_product->getId() ?>/"><?php echo $this->__('Quick View') ?></a>
      </li>