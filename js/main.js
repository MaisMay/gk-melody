//функция проверяет готов ли наш сайт к манипуляциям 
$(document).ready(function () {
    // напишем для проверки в консоли; console.log ('сайт готов к манипуляциям')
    var currentFloor = 2; //переменная, где хранится текущий этаж
    var floorPath = $(".home-image path"); //каждый отдельный этаж в SVG
    var counterUp = $(".counter-up"); /* кнопка увеличения этажа */
    var counterDown = $(".counter-down"); /* кнопка уменьшения этажа */
    var modal = $(".modal");
    var modalCloseButton = $(".modal-close-button");
    var viewFlatsButton = $(".view-flats");


    //функция при наведении мышью на этаж 
    floorPath.on('mouseover', function (){ //'mouseover' - изменяется по наведении, 'click' - при клике на этаж
        //console.log($(this).attr('data-floor')); //получили номер текущего этажа

        floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
        currentFloor = $(this).attr("data-floor"); // получаем значения текущего этажа
        $('.counter').text(currentFloor); //запиываем значение этажа в счетчике справа
    });


    floorPath.on('click', toggleModal); /* при клике на этаж вызывать окно */
    modalCloseButton.on('click', toggleModal); /* при клике на кнопку закрыть зубирает окно */
    viewFlatsButton.on('click', toggleModal);
    


    //счетчик увеличения
    counterUp.on ("click", function(){ // отслеживаем клик по кнопке вверх
       if (currentFloor < 18) { //проверяем значения этажа, не должно быть больше 18
        currentFloor++; //прибавляем один этаж
        usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, 
            useGrouping: false}); //отформатировали в нужном формате 03, а не 3
        $(".counter").text(usCurrentFloor); //расписываем значение этажав счетчик справа
        //подсветка этажа
        floorPath.removeClass("current-floor"); //удаляем активный класс у этажей 
        $(`[data-floor=${usCurrentFloor}`).toggleClass("current-floor"); //подсвечиваем текущий этаж 
       }
    });

    counterDown.on('click', function (){
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, 
                useGrouping: false});
            $(".counter").text(usCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${usCurrentFloor}`).toggleClass("current-floor");
        }
    });

    function toggleModal(){ // функция открыть-закрыть окно
        modal.toggleClass("is-open");
    };
});