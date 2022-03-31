import task1 from "assets/icons/tasks/task1.svg";
import task2 from "assets/icons/tasks/task2.svg";
import task3 from "assets/icons/tasks/task3.svg";
import task4 from "assets/icons/tasks/task4.svg";
import task5 from "assets/icons/tasks/task5.svg";
import task6 from "assets/icons/tasks/task6.svg";
import task7 from "assets/icons/tasks/task7.svg";
import task8 from "assets/icons/tasks/task8.svg";
import task9 from "assets/icons/tasks/task9.svg";
import task10 from "assets/icons/tasks/task10.svg";

export const getTaskIcon = iconName => {
  switch (iconName) {
    case "task1.svg": {
      return task1;
    }
    case "task2.svg": {
      return task2;
    }
    case "task3.svg": {
      return task3;
    }
    case "task4.svg": {
      return task4;
    }
    case "task5.svg": {
      return task5;
    }
    case "task6.svg": {
      return task6;
    }
    case "task7.svg": {
      return task7;
    }
    case "task8.svg": {
      return task8;
    }
    case "task9.svg": {
      return task9;
    }
    case "task10.svg": {
      return task10;
    }
    default: {
      break;
    }
  }
};
