'use strict';

var title = 'Тест по программированию';
var qBase = [{
    qText: 'Вопрос 1',
    answers: ['Ответ1', 'Ответ2', 'Ответ3']
}, {
    qText: 'Вопрос 2',
    answers: ['Ответ1', 'Ответ2', 'Ответ3']
}, {
    qText: 'Вопрос 3',
    answers: ['Ответ1', 'Ответ2', 'Ответ3']
}, {
    qText: 'Вопрос 4',
    answers: ['Ответ1', 'Ответ2', 'Ответ3']
}, {
    qText: 'Вопрос 5',
    answers: ['Ответ1', 'Ответ2', 'Ответ3']
}];
var checkValue = 'Проверить мои результаты';

var testBase = {
    title: title,
    qBase: qBase,
    checkValue: checkValue
};

var sObj = JSON.stringify(testBase);

// Запишем в localStorage с ключём object
localStorage.setItem("object", sObj);

// Обратимся к localStorage следующим образом
// Хранилище вернёт нашу сериализованную строку
console.log(localStorage.object);
$(function () {
    var html = $('#test').html();
    localStorage.object;
    var retObj = JSON.parse(localStorage.getItem("object"));
    var test = retObj;
    console.log(test);

    //шаблонизатор
    var data = tmpl(html, test);
    $('body').append(data);
});

//проверка правильных ответов
$(document).ready(function () {
    $("#checkanswers").click(function (event) {
        var $rightAnswer = '001001001001001'; //задаем правильные ответы- везде вариант 3
        var $answer = $('input[type=checkbox]');
        var testStr = "";
        console.log($answer.length);
        for (var i = 0; i < $answer.length; i++) {
            if ($answer[i].checked == true) {
                testStr += "1";
            } else {
                testStr += "0";
            }
        }
        if ($rightAnswer == testStr) {
            $("#resulttest").html('<p>Тест пройден успешно</p>');
            for (var _i = 0; _i < $answer.length; _i++) {
                $answer[_i].checked = false;
            }
        } else {
            $("#resulttest").html('<p>Тест не пройден</p>');
            for (var _i2 = 0; _i2 < $answer.length; _i2++) {
                $answer[_i2].checked = false;
            }
        }
    });
});
