obj = [["","1","2","3","4","5","6","7","8"],["Пн","-","-","9-Б","11","9-Б","11","8-A","10*"],["Вт","-","-","9-A","8-Б","8-А","8-Б","8-A","10*"],["Ср","8-A","10","10","5-Б","5-Б","5-А","5-A","9-A"],["Чт","-","-","9-Б","8-Б","-","-","-","-"],["Пт","-","8-Б","9-А","9-А","-","-","9-Б","11"],["Сб","-","-","-","-","-","-","-","-"],["Вс","-","-","-","-","-","-","-","-"]];
obj1 = [["Лин. Алгебра","Мат. Анализ","-","Кураторский час","-","-"],["-","Алгоритмы и структуры данных","Алгоритмы и структуры данных","Мат. Анализ","-","-"],["Лин. Алгебра","Лин. Алгебра","Анг.","-","-","-"],["-","Мат. Анализ","Мат. Анализ","Англ.","-","-"],["Топология","Топология","Межфак","-","-","-"],["-","-","-","-","-","-"],["-","-","-","-","-","-"]];



timetable.innerHTML = "";



console.log(obj);
output.innerHTML = "Hello";
let n = 0;
obj.forEach(element => {
    console.log(element);
    let str = "s"+n;
    let create_element = document.createElement("div");
    create_element.classList.add("s"+n);
    let k = 1;
    element.forEach(el =>{
        console.log(el);
        create_sub_element = document.createElement("div");
        create_sub_element.classList.add("l"+k);
        text_node = document.createTextNode(el);
        create_sub_element.appendChild(text_node);
        create_element.appendChild(create_sub_element);
        
        k+=1;
    });
    timetable.appendChild(create_element)
    
    console.log(str);
    n +=1;
});