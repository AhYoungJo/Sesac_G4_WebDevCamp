
//객체 리터럴 방식으로 생성한 객체
const circle = {
    radius: 5,
    getDiameter(){
        //메서드는 자신이 속한 객체를 가리키는 식별자를 참조할 수 있다.
        return 2 * this.radius;
    }
}