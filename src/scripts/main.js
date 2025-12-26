'use strict';

// write code here
const listElement = [...document.querySelectorAll('li')];

function parseSalary(salary) {
  return +salary.slice(1).split(',').join('');
}

function sortList(list) {
  return list.sort((person1, person2) => person2.salary - person1.salary);
}

function getEmployees(list) {
  return list.map((person) => {
    return {
      name: person.textContent.trim(),
      age: person.getAttribute('data-age'),
      position: person.getAttribute('data-position'),
      salary: parseSalary(person.getAttribute('data-salary')),
    };
  });
}

listElement.map((el, index) => {
  el.textContent = sortList(getEmployees(listElement))[index].name;
  el.setAttribute('data-age', sortList(getEmployees(listElement))[index].age);

  el.setAttribute(
    'data-position',
    sortList(getEmployees(listElement))[index].position,
  );

  el.setAttribute(
    'data-salary',
    sortList(getEmployees(listElement))[index].salary,
  );
});
