// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const headerVar = document.createElement('div');
    headerVar.classList.add('header')

    const spanVar = document.createElement('span');
    spanVar.classList.add('date');
    spanVar.textContent = "SMARCH 28, 2019";
    headerVar.appendChild(spanVar)

    const h1Var = document.createElement('h1');
    h1Var.textContent = "Lambda Times";

    const spanVar2 = document.createElement('span');
    spanVar2.classList.add('temp');
    spanVar2.textContent = '98°';

    const divHeader = document.querySelector('.header-container');
    
    headerVar.append(spanVar, h1Var, spanVar2);
    divHeader.appendChild(headerVar);

    return headerVar;
}

console.log(Header());