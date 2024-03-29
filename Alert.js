describe('practicing alert function in protractor', function() {

       beforeEach(function(){
        browser.waitForAngularEnabled(false);
        browser.get('https://chercher.tech/practice/practice-pop-ups-selenium-webdriver');
		
           });

           fit('work on alert4 :send text to alert ', function() {
            element(by.xpath("//input[@name='prompt']")).click();
            browser.sleep(3000);
         
            browser.switchTo().alert().sendKeys("hello");
            
                });
            
    
        
        it('work on alert1 : Accept alert', function() {
        element(by.xpath("//input[@name='alert']")).click();
            browser.sleep(3000);
            browser.switchTo().alert().accept();
            browser.sleep(3000);
        });

        it('work on alert2 : dismiss alert', function() {
            element(by.xpath("//input[@name='alert']")).click();
                browser.sleep(3000);
                browser.switchTo().alert().dismiss();
                browser.sleep(3000);
            });

        it('work on alert3: get alert text ', function() {
         element(by.xpath("//input[@name='confirmation']")).click();
         browser.sleep(3000);
         var popupAlert =  browser.switchTo().alert();
         popupAlert.getText().then(function(alertText) {
         console.log(alertText);
         });
         browser.switchTo().alert().accept();

     }); 
 
    });




