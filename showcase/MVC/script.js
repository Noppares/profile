//Model
const houses = [
    {
        code:"SM",
        name:"Smith"
    },
    {
        code:"JD",
        name:"Jordan"
    },
    {
        code:"BL",
        name:"Billy"
    }
]

const getfamily = houseCode =>{
    switch(houseCode){
        case "SM":
            return ["Mario", "Karen", "Tayler"];
        case "JD":
            return ["Deen", "Jasmin", "Atlanta", "Lilly"];
        case "BL":
            return ["Robert", "Lulu", "Sia"];
        default:
            return [];                
    }
}

const creatrOptionElement = (text, value) =>{
    const element = document.createElement("option");
    element.textContent = text;
    element.value = value;
    return element;
}

const createLiElement = text =>{
    const element = document.createElement("li");
    element.textContent = text;
    return element;
}

const houseElement = document.querySelector("select");
//fill the list
houses.forEach(house =>{
    houseElement.appendChild(creatrOptionElement(house.name, house.code))
})


//Controller - Brains
houseElement.addEventListener("change", e =>{
    const fams = getfamily(e.target.value);
    const famsElement = document.getElementById("family");

    famsElement.innerHTML ="";
    fams.forEach(fam => {
        famsElement.appendChild(createLiElement(fam));
    })
})