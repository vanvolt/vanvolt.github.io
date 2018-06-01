let someList = [5, 15, 3, 8, 9, 1, 20, 7];

function setup() {
  someList = selectSort(someList);
  print(someList);
}

function bubbleSort(aList) {
  let swapRequired = true;

  while (swapRequired) {
    swapRequired = false;

    for (let i=0; i<aList.length - 1; i++) {
      if (aList[i] > aList[i+1]) {

        let temp = aList[i];
        aList[i] = aList[i+1];
        aList[i+1] = temp;
        swapRequired = true;
      }
    }
    print(aList);
  }
  return aList;
}

function selectSort(aList) {
  let swapLocation = 0;

  while (swapLocation < aList.length) {
    let smallestLocation = swapLocation;

    for (let i = swapLocation; i<aList.length; i++) {
      if (aList[i] < aList[smallestLocation]) {
        smallestLocation = i;
      }
    }
    let temp = aList[swapLocation];
    aList[swapLocation] = aList[smallestLocation];
    aList[smallestLocation] = temp;

    swapLocation++;
    print(aList);
  }

  return aList;
}
