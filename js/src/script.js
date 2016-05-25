'use strict';
let title = 'Тест по программированию';
let qBase = [

            {
                qText: 'Вопрос 1',
                answers: ['Ответ1', 'Ответ2', 'Ответ3']
            },

            {
                qText: 'Вопрос 2',
                answers: ['Ответ1', 'Ответ2', 'Ответ3']
            },

            {
                qText: 'Вопрос 3',
                answers: ['Ответ1', 'Ответ2', 'Ответ3']
            },


            {
                qText: 'Вопрос 4',
                answers: ['Ответ1', 'Ответ2', 'Ответ3']
            },


            {
                qText: 'Вопрос 5',
                answers: ['Ответ1', 'Ответ2', 'Ответ3']
            }
        ];
 let checkValue = 'Проверить мои результаты';

 let testBase = {
        title,
        qBase,
        checkValue 
    };


   
let sObj = JSON.stringify(testBase)
	
// Запишем в localStorage с ключём object
localStorage.setItem("object", sObj)

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
    let data = tmpl(html, test);
    $('body').append(data);
});


//проверка правильных ответов
$(document).ready(function(){
    $("#checkanswers").click(function(event){
        let $rightAnswer = ('001001001001001');//задаем правильные ответы- везде вариант 3
        let $answer =  $('input[type=checkbox]');
        let testStr="";
        console.log($answer.length);
            for(let i=0; i<$answer.length; i++) {
                if ($answer[i].checked == true){
                    testStr += "1";
                    }else{testStr += "0";
                }
                }
        if($rightAnswer==testStr){
            $("#resulttest").html('<p>Тест пройден успешно</p>');
            for(let i=0; i<$answer.length; i++) {
                $answer[i].checked =false;
            }
        }else{
            $("#resulttest").html('<p>Тест не пройден</p>');
            for(let i=0; i<$answer.length; i++) {
                $answer[i].checked =false;
            }
        }

    });
});
