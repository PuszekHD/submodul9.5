var exerciseClass = document.getElementsByClassName('button');
console.log(exerciseClass);

console.log(exerciseClass.length);

for ( i = 0; i < exerciseClass.length; i++) {
    var txt = exerciseClass.textContent;

    alert(exerciseClass[i].textContent);
}
