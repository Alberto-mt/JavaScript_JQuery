window.addEventListener("load", () => {
  //   push(0)
  console.log("push(0)");
  let iguales1 = [1, 1, 1, 1];
  console.log(iguales1);
  console.log(iguales1.push(0));

  //   unshift(0)
  console.log("unshift(0)");
  let iguales2 = [1, 1, 1, 1];
  console.log(iguales2);
  console.log(iguales2.unshift(0));

  //   pop()
  console.log("pop()");
  let distintos1 = [1, 2, 3, 4];
  console.log(distintos1);
  console.log(distintos1.pop());

  //   shift()
  console.log("shift()");
  let distintos2 = [1, 2, 3, 4];
  console.log(distintos2);
  console.log(distintos2.shift());

  //   includes(1)
  console.log("includes(1)");
  let distintos3 = [1, 2, 1, 4];
  console.log(distintos3);
  console.log(distintos3.includes(1));

  //   reverse()
  console.log("reverse()");
  let distintos4 = [1, 2, 3, 4];
  console.log(distintos4);
  console.log(distintos4.reverse());

  //   at(2)
  console.log("at(2)");
  let distintos5 = [1, 2, 3, 4];
  console.log(distintos5);
  console.log(distintos5.at(2));

  //   slice(2)
  console.log("slice(2)");
  let distintos6 = [1, 2, 3, 4];
  console.log(distintos6);
  console.log(distintos6.slice(2));

  //   filter((num) => num > 2)
  console.log("filter((num) => num > 2)");
  let distintos7 = [1, 2, 3, 4];
  console.log(distintos7);
  let rfilter = distintos7.filter((num) => num > 2);
  console.log(rfilter);

  //   find((num) => num === 2)
  console.log("find((num) => num === 2)");
  let distintos8 = [1, 2, 3, 4];
  console.log(distintos8);
  let rfind = distintos8.find((num) => num === 2);
  console.log(rfind);

  //   every((num) => num === 2)
  console.log("every((num) => num === 2)");
  let distintos9 = [1, 2, 3, 4];
  console.log(distintos9);
  let revery = distintos9.every((num) => num === 2);
  console.log(revery);

  //   some((num) => num === 2)
  console.log("some((num) => num === 2)");
  let distintos10 = [1, 2, 3, 4];
  console.log(distintos10);
  let rsome = distintos10.some((num) => num === 2);
  console.log(rsome);
});
