var exerciseClass = document.getElementsByClassName('button');
console.log(exerciseClass);
var len = exerciseClass.length;
console.log(len);

for ( var i = 0; i < len; i++) {
    alert(exerciseClass[i].textContent);
}
