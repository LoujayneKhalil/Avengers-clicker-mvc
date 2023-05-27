Model = {avengersList : [],}

View = {

    init:function(){

        app = document.getElementById('root');
        title = document.createElement('h1');
        title.textContent = 'Avengers';
        mainContainer = document.createElement('div');
        sideBar = document.createElement('div');
        selectedImg = document.createElement('div'); 
        avengerCounterWrapper = document.createElement('div');
        avengerName = document.createElement('span');
        avengerClicksCounter = document.createElement('span');
        largeImg = document.createElement('img');
        
        for(var i = 0; i< Model.avengersList.length;i++){
            var sideImg = document.createElement('div');
            sideImg.className = 'side-img'

            var image = document.createElement('img')
            sideBar.append(sideImg);                   
            sideImg.append(image)

            image.src = Model.avengersList[i].imgSrc;

            sideImg.setAttribute('data-index',i)
        }

        
        mainContainer.className = 'main-container'
        selectedImg.className = 'selected-img'
        sideBar.className = 'side-bar'
        avengerCounterWrapper.className = 'counter-wrapper'
        avengerName.className = 'avenger-name'
        avengerClicksCounter.className = 'avenger-clicks-counter'
        largeImg.className = 'large-image'


        app.append(title, mainContainer);
        mainContainer.append(sideBar, selectedImg, avengerCounterWrapper);
        selectedImg.append(largeImg)

        avengerCounterWrapper.append(avengerName, avengerClicksCounter);

        largeImg.src = Model.avengersList[0].imgSrc;
        
        avengerName.innerHTML = Model.avengersList[0].name;
        avengerClicksCounter.innerHTML = 'Clicks Count: <span id="avenger-counter"></span>'
        avengerCounter = document.getElementById('avenger-counter');
        avengerCounter.innerHTML = '0';


      
    
    },
   
    render: function(){
        var counter =0;
        $('.side-img').on('click',function(){
            let index = parseInt($(this).data('index'));
            $('.large-image').attr('src',Model.avengersList[index].imgSrc)
            $('.avenger-name').text(Model.avengersList[index].name)
            $("#avenger-counter").html(0)
            counter = 0;
        })    

        $('.large-image').on('click',function(){
            counter += 1  ;
            $("#avenger-counter").text(counter)  
            Model.avengersList[index].counter = counter;
        })
     
    },


    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)
        return element
    },
    
    getElement(selector) {
        const element = document.querySelector(selector)
        return element
    },

}

Controller = {
    init: function(){
        View.init();
        View.render();
    },

    addCharacters:function(id,name,imgSrc){
        avengersItems = {id: id,name: name, imgSrc:imgSrc, counter:0};
        Model.avengersList.push(avengersItems);

    },

 

}

Controller.addCharacters('1','Black Widow','./assets/images/black-widow.jpeg')
Controller.addCharacters('2','Captain America','./assets/images/captain-america.jpg')
Controller.addCharacters('3','Iron Man','./assets/images/iron-man.jpg')
Controller.addCharacters('4','Thor','./assets/images/Thor.jpg')


Controller.init()

