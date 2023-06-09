// 자바스크립트 다이얼로그 : 사용자 입력 및 메시지 출력


/* 프폼프트 다이얼로그, prompt("메시지", "디폴트 입력값")
    - prompt() 함수는 다이얼로그를 출력하고 사용자로부터 문자열을 입력받아 리턴한다
    - '메시지'와 '디폴트 입력값'을 출력하고 디퐆트 입력값은 생략 가능하다
*/

//예제
let ret = prompt("이름을 입력하세요", "");
if(ret == null)
{
    //취소 버튼이나 다이얼로그를 닫은 경우
}
else if(ret == "")
{
    //문자열 입력 없이 확인 버튼 누른 경우
}
else
{
    //ret에는 사용자가 입력한 문자열
}


/* 확인 다이얼로그, confirm("메시지")
    - confirm()함수는 '메시지'와 확인/취소 버튼을 가진 다이얼로그를 출력한다.
    - 확인은 true, 취소는 false 를 리턴한다
*/

//예제
let ret = confirm("전송할까요?")
if(ret == true)
{
    //사용자가 "확인" 버튼을 누른 경우
}
else
{
    //취소 버튼이나 다이얼로그를 닫은 경우
}


/* 경고 다이얼로그, alert("메시지")
    - alert()함수는 단순한 메시지를 전달하는 다이얼로그를 출력한다.
*/

//예제
alert("클릭하였습니다.");