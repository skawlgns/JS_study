var Body = document.body;
var Word = document.createElement('div');
Word.textContent = '자바스크립트';
document.body.append(Word);
var Form = document.createElement('form');
document.body.append(Form);
var InputBar = document.createElement('input');
Form.append(InputBar);
var Button = document.createElement('button');
Button.textContent = '입력';
Form.append(Button);
var Result = document.createElement('div');
document.body.append(Result);



Form.addEventListener('submit', function CallBack(Event) {
    Event.preventDefault(); //새로고침 방지
    if (Word.textContent[Word.textContent.length - 1] === InputBar.value[0]) {
        Result.textContent = '정답!';
        Word.textContent = InputBar.value;
        InputBar.value = ''; // 빈값
        InputBar.focus(); //커서 고정
    } else {
        Result.textContent = '땡!';
        InputBar.value = '';
        InputBar.focus();
    }
});
