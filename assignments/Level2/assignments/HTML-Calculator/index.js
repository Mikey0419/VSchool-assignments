const addForm = document["add-form"];
const subForm = document["sub-form"];
const mulForm = document["mul-form"];

addForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let val1 = new Number(addForm.add1.value);
    let val2 = new Number(addForm.add2.value);

    addForm.addResult.value = parseInt(val1 + val2);

    addForm.add1.value = "";
    addForm.add2.value = "";
})

subForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let val1 = new Number(subForm.sub1.value);
    let val2 = new Number(subForm.sub2.value);

    subForm.subResult.value = parseInt(val1 - val2);

    subForm.sub1.value = "";
    subForm.sub2.value = "";
})

mulForm.addEventListener("submit", function(e) {
    e.preventDefault();

    let val1 = new Number(mulForm.mul1.value);
    let val2 = new Number(mulForm.mul2.value);

    mulForm.mulResult.value = parseInt(val1 * val2);

    mulForm.mul1.value = "";
    mulForm.mul2.value = "";
})