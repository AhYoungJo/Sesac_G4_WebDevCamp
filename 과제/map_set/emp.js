const assert = require('assert');

//deptMap과 empDept를 만들고, 개발팀 직원 이름 목록을 출력하시오. (key: id)

const hrTeam = {id: 1, dname: '인사팀'};
const devTeam = {id: 2, dname: '개발팀'};
const depts = [hrTeam, devTeam];

const hong = {id: 1, name: 'Hong', dept: 1}; // hong.dept.name ⇒ deptMap.get(hong.dept)?.name
const kim = {id: 2, name: 'Kim', dept: 2};
const emps = [
    hong,
    kim,
    {id: 3, name: 'Park', dept: 2},
    {id: 4, name: 'Choi', dept: 2},
];

const depMap = new Map();
for (const dept of depts) {
    depMap.set(dept.id, dept);
}
const empMap = new Map();
for (const emp of emps) {
    empMap.set(emp.id, emp);
}

const empDept = new Map();
emps.map(({id, name, dept}) =>
    dept === 1
        ? empDept.set({id, name}, hrTeam)
        : empDept.set({id, name}, devTeam),
);

// console.log(empDept);

//참조를 유지하면서 동시에 dept를 분리하는 방법을 모르곘음
// console.log(empDept.get(kim).dname);

assert.deepStrictEqual(
    [...empDept.keys()],
    emps.map(({id, name}) => ({id, name})),
);

function getEmp(empId) {
    const emp = [...empDept.keys()].find(({id}) => id === empId);
    const dept = empDept.get(emp);
    return {...emp, dept: dept};
}

assert.deepStrictEqual(getEmp(1), {
    id: 1,
    name: 'Hong',
    dept: {id: 1, dname: '인사팀'},
});

Array.prototype.uniqBy = function (prop) {};
