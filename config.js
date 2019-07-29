exports.config = {
     seleniumAddress: 'http://localhost:4444/wd/hub',
       directConnect: true,
        specs: ['Alert.js'],
    
    
        onPrepare: function () {
         browser.manage().window().maximize();
          },
       };