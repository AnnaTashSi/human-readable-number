module.exports = function toReadable (number) {

    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    
    function convert(number) {
        if (number== 0) return "zero";
        else return convert_hundreds(number);
    } // Фуннкция_0. если параметр == 0, то вернуть текст, иначе вызов Функции_сотни
      
        return convert(number); // вызываем функцию_0


    function convert_hundreds(number){
         if  (number > 99 && number < 1000) {
            return (ones[Math.floor(number / 100)] + " hundred "  + convert_tens(number % 100)).trim();
         } else {
            return convert_tens(number); 
         }
    } // Функция_сотни. если параметр 100-999..........


    function convert_tens(number) {// Функция_десятки (20-99). 
        if (number < 10) return ones[number];
        // Если параметр меньше 10, вернуть текстом 1-9
        else if (number >=10 && number < 20) return teens[number - 10]; 
        //Если параметр =10-19, вернуть текстом 10-19. 
        // [number - 10] вычисляет позицию в массиве 
        else {
            return (tens[Math.floor(number / 10)] + " " + ones[number % 10]).trim();
        // Если параметр >=20, вернуть текстом 20-99
        // вычислить позицию в массиве (20/10=2) + пробел + взятие от остатка -позиция/10-- 20/10=2, т.е. 0)
        }

    } // не работает на 20,30,40,50,60,70,80,90,100 без метода trim() - удаление пробела в конце строки
    

}
        //node index.js
        //достаем Ф.из module.exports
console.log(module.exports(121));


// // Для запуска части тестов в файле test.js
// describe.only("mistake", () => {
    //... здесь тесты
// }) 
