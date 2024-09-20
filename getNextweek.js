//4. getNextWeek 함수는 widx변수에 부수 효과(side effect)가 있다.
//이를 부수 효과가 없도록 변경하시오.  (hint: closure, IIFE)
const weeks = ["일", "월", "화", "수", "목", "금", "토"];
const getNextWeek = () => {
  const getNextWeekEvent = (() => {
    let widx = -1;
    return () => {
      widx++;
      if (widx >= weeks.length) widx = 0;
      return `${weeks[widx]}요일`;
    };
  })();

  let cnt = 0;
  const intl = setInterval(() => {
    // widx += 2; // side-effect!
    console.log("call", cnt, getNextWeekEvent());
    if ((cnt += 1) === 8) clearInterval(intl);
  }, 1000);
};
// getNextWeek();

//----------------------------------------------------------------------
//4-2.getNextWeek 함수를 발전시켜 각 수업 별 요일을 선택하는 HTML을 작성하시오.
const getNextWeekExt = () => {
  let widx = -1;
  return (tagId) => {
    widx++;
    if (widx >= weeks.length) widx = 0;
    return (tagId.textContent = `${weeks[widx]}`);
  };
};
const nextWeekForKorean = getNextWeekExt();
const nextWeekForMath = getNextWeekExt();

const koreanButt = document.getElementById("korean");
const $dayOfKorean = document.getElementById("dayOfKorean");
const mathButt = document.getElementById("math");
const $dayOfMath = document.getElementById("dayOfMath");

const clickHandlerForKorean = () => nextWeekForKorean($dayOfKorean);
const clickHandlerForMath = () => nextWeekForMath($dayOfMath);
