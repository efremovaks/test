import {iosVhFix} from './utils/ios-vh-fix';
import {initCustomSelect} from './modules/form/init-custom-select';
import {initFormValidate} from './modules/form/init-form-validate';
import {initAccordions} from './modules/accordion/init-accordion';
import {initMainNav} from './modules/init-main-nav';


window.addEventListener('DOMContentLoaded', () => {


  iosVhFix();

  window.addEventListener('load', () => {
    initCustomSelect();
    initFormValidate();
    initAccordions();
    initMainNav();
  });
});


