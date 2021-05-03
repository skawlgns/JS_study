var 숫자1 = Math.ceil(Math.random()*9);
var 숫자2 = Math.ceil(Math.random()*9);
var 합 = 숫자1 * 숫자2;

var 바디 = document.body;
var 단어 = document.createElement('div');
단어.textContent = String(숫자1) + ' X ' + String(숫자2) + '는?';
바디.append(단어);

var 폼 = document.createElement('form');
바디.append(폼);

var 입력 = document.createElement('input');
입력.type = 'number';
폼.append(입력);

var 결과 = document.createElement('div');
바디.append(결과);



폼.addEventListener('submit', function(e) {
    e.preventDefault();
        if(합 === Number(입력.value)){
        결과.textContent = '정답!';
        숫자1 = Math.ceil(Math.random()*9);
        숫자2 = Math.ceil(Math.random()*9);
        합 = 숫자1 * 숫자2;
        단어.textContent = String(숫자1) + ' X ' + String(숫자2) + '는?';
        입력.value = '';
        입력.focus();
    } else{
        결과.textContent = '땡!';
        입력.value = '';
        입력.focus();
    }
   

});




