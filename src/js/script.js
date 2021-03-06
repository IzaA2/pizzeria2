/* global Handlebars, utils, dataSource */ // eslint-disable-line no-unused-vars

{
  'use strict';

  const select = {
    templateOf: {
      menuProduct: '#template-menu-product',
    },
    containerOf: {
      menu: '#product-list',
      cart: '#cart',
    },
    all: {
      menuProducts: '#product-list > .product',
      menuProductsActive: '#product-list > .product.active',
      formInputs: 'input, select',
    },
    menuProduct: {
      clickable: '.product__header',
      form: '.product__order',
      priceElem: '.product__total-price .price',
      imageWrapper: '.product__images',
      amountWidget: '.widget-amount',
      cartButton: '[href="#add-to-cart"]',
    },
    widgets: {
      amount: {
        input: 'input[name="amount"]',
        linkDecrease: 'a[href="#less"]',
        linkIncrease: 'a[href="#more"]',
      },
    },
  };

  const classNames = {
    menuProduct: {
      wrapperActive: 'active',
      imageVisible: 'active',
    },
  };

  const settings = {
    amountWidget: {
      defaultValue: 1,
      defaultMin: 1,
      defaultMax: 9,
    }
  };

  const templates = {
    menuProduct: Handlebars.compile(document.querySelector(select.templateOf.menuProduct).innerHTML),
  }; class Product{
    constructor(id, data){
      const thisProduct = this;

    
      thisProduct.id = id;
      thisProduct.data = data; 

      thisProduct.renderInMenu();
      thisProduct.getElements();
      thisProduct.initAccordion();
      thisProduct.initOrderForm();
      thisProduct.initAmountWidget();
      thisProduct.processOrder();
      thisWidget.getElements(element);
     

      console.log('new Product:',thisProduct);
    }
    processOrder() {
      const thisProduct = this;
      console.log('processOrder',processOrder);

      const formData = utilis.serializeFromToObject(thisProduct.form);
      console.log('formData',formData);
  };
  initOrderForm(){
      const thisProduct = this; 
      console.log('initOrderForm',initOrderForm);

      thisProduct.form.addEventListener('submit', function(event){
        event.preventDefault();
        thisProduct.processOrder();
      });
      
      for(let input of thisProduct.formInputs){
        input.addEventListener('change', function(){
          thisProduct.processOrder();
        });
      }
      
      thisProduct.cartButton.addEventListener('click', function(event){
        event.preventDefault();
        thisProduct.processOrder();
      });

  };

    setValue(value){
      const thisWidget = this;

      const newValue = parseInt(value);
      /*TODO: Add validation */ 

      thisWidget.value = newValue;
      thisWidget.input.value = thisWidget.value;



    };



    renderInMenu(){
      const thisProduct = this;

      /*generate HTML based on template */
      const generatedHTML = templates.menuProduct(thisProduct.data);

      /*create element using utils.createElementFromHTML */
      thisProduct.element = utils.createDOMFromHTML(generatedHTML);
      
      /*find menu container */
      const menuContainer = document.querySelector(select.containerOf.menu);

      /* add element to menu */
      menuContainer.appendChild(thisProduct.element);
    };
 //   initAccordion(){
 //     const thisProduct = this;
      /* find the clickable trigge (the element that schould react to clicking )*/
 //     const trigger =select.menuProduct.clickable;

      /* START: click event listener to trigger */
      //const buttonTest = document.getElementById('button-test');
      //buttonTest.addEventListener('click', function()
        
 //     trigger.addEventListener('click',function){
 //         console.log('clicked',trigger);
 //       },
      
      /* prevent defoult action for event */

      /* toggle active class on elemnet of thisProduct */
 //       thisProduct.element= select.menuProduct.clickable;
      /*find all active products */


      /* START LOOP: for each active product */
 //       for (let activeProduct of activeProducts){


 //       }

        /* START: if the active product isn't the element of thisProduct */ 
  //      if (  activeProduct !== thisProduct.element){ 
          /* remove class active for the active product */
  //          activeProduct.classProduct.remove('active'); 
  //      }
  //        const notActiveProduct = document.getElementById('product').classList.remove('active');
        /* END: if the active product isnt't the element of thisProduct */
   //      if (activeProduct !== thisProduct.element);       
      /* END LOOP : for each active product */
  //    } */
      /* END: click event listener to trigger */ 






  
      getElements(){
        const thisProduct = this;

        thisProduct.accordionTrigger = thisProduct.element.querySelector(select.menuProduct.clickable);
        thisProduct.form = thisProduct.element.querySelector(select.menuProduct.form);
        thisProduct.formInputs = thisProduct.form.querySelectorAll(select.all.formInputs);
        thisProduct.cartButton = thisProduct.element.querySelector(select.menuProduct.cartButton);
        thisProduct.priceElem = thisProduct.element.querySelector(select.menuProduct.priceElem);

        thisProduct.amountWidgetElem = thisProduct.querySelector(element.select.menuProduct.amountWidget); 
      };


      getElements(element){
        const thisWidget = this;
      
        thisWidget.element = element;
        thisWidget.input = thisWidget.element.querySelector(select.widgets.amount.input);
        thisWidget.linkDecrease = thisWidget.element.querySelector(select.widgets.amount.linkDecrease);
        thisWidget.linkIncrease = thisWidget.element.querySelector(select.widgets.amount.linkIncrease);
        thisWidget.setValue(thisWidget.input.value);
      }


      initActions(){

        const thisWidget = this;
  
        thisWidget.input.addEventListener('change', function(){
  
          thisWidget.setvalue(thisWidget.input.value);
  
        });
        thisWidget.linkDecrease.addEventListener('click', function(event){

          event.preventDefault();
  
          thisWidget.setvalue(thisWidget.value - 1);
          
  
        });

        thisWidget.linkIncrease.addEventListener('click', function(event){

          event.preventDefault();
  
          thisWidget.setvalue(thisWidget.value + 1);
  
  
        });
  
      initAccordion(){
        const thisProduct = this;
    
        /* find the clickable trigger (the element that should react to clicking) */
    
        // const clicableTrigger = thisProduct.element.querySelector(select.menuProduct.clickable);
        // // console.log(clicableTrigger);
    
        /* START: click event listener to trigger */
    
        thisProduct.accordionTrigger.addEventListener('click', function(event){
           console.log(thisProduct.accordionTrigger);
    
          /* prevent default action for event */
    
          event.preventDefault();
    
          /* toggle active class on element of thisProduct */
    
          thisProduct.element.classList.toggle('active');
          // console.log(thisProduct);
    
          /* find all active products */
          const allActiveProducts = document.querySelectorAll('product.active');
          //  console.log(allActiveProducts);
  
          /* START LOOP: for each active product */
    
          for(let activeProduct of allActiveProducts ){
            
            /* START: if the active product isn't the element of thisProduct */
    
            if( activeProduct !== thisProduct.element){
              
              /* remove class active for the active product */
    
              activeProduct.classList.remove('active');
              // console.log(activeProduct);
            };
    
            /* END: if the active product isn't the element of thisProduct */
    
          };
    
          /* END LOOP: for each active product */  
          
        });
    
        /* END: click event listener to trigger */
        
      };

      initAmountWidget(){
        const thisProduct = this;

        thisProduct.amountWidget = new AmountWidget(thisProduct.amountWidgetElem);

      };
      

     

    
  }
  class AmountWidget{
    constructor (element){
      const thisWidget = this;

      console.log('AmountWidget:',thisWidget);
      console.log('constructor arguments:',element);
    
    }
  }

  const app = {
    initMenu: function(){
      const thisApp = this;

      console.log('thisApp.data:',thisApp.data);
      for(let productData in thisApp.data.products){

      new Product(productData, thisApp.data.products[productData]);
      }
    },

    initData:function(){
      const thisApp = this;

      thisApp.data = dataSource;
      console.log('thisApp.data:',thisApp.data);
    },
    init:function(){


      const thisApp = this;
      console.log('* App starting *');
      console.log('thisApp:', thisApp);
      console.log('classNames:', classNames);
      console.log('settings:', settings);
      console.log('templates:', templates);

      thisApp.initData();
      thisApp.initMenu();
    },
  };

  app.init();
}