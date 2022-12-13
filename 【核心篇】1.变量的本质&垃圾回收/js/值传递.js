//js: 值-->读stack内存里的值
function change1(arg) {
  arg = 200;
}

function change2(arg) {
  arg.a = 200;
}

var foo = { a: 2, b: { x: 1 } };
console.log(foo);
foo = {};//手动释放



// change1(bar);
