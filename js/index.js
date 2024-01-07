var productNameInput = document.getElementById('productNameInput');
var productPriceInput = document.getElementById('productPriceInput');
var productCategoryInput = document.getElementById('productCategoryInput');
var productDescriptionInput = document.getElementById('productDescriptionInput');

let productContainer = [];

if (localStorage.getItem("Products") != null) {

    productContainer = JSON.parse(localStorage.getItem("Products"));
    disPlay();

}
else {

    console.log(" No data");

}

function addProduct() {


    if (validtion() == true) {
        let prodcts = {
            name: productNameInput.value,
            price: productPriceInput.value,
            catg: productCategoryInput.value,
            desc: productDescriptionInput.value
        };

        productContainer.push(prodcts);

        localStorage.setItem("Products", JSON.stringify(productContainer));

        // clear();

        disPlay();
    }
    else {
        alert("Erro Valid");
    }

}


function disPlay() {

    let containerELement = ``;

    for (let i = 0; i < productContainer.length; i++) {
        containerELement += `
        <tr>
            <td>${i + 1}</td>
            <td>${productContainer[i].name}</td>
            <td>${productContainer[i].price}</td>
            <td>${productContainer[i].catg}</td>
            <td>${productContainer[i].desc}</td> 
            <td class="" id="btnUpdate"><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button></td>
            <td class="" id="btnDelete"><button class="btn btn-outline-dark">Update</button></td>
        </tr>
        `;

    }

    document.getElementById('tableBody').innerHTML = containerELement;

}


function deleteProduct(deleteIndex) {
    productContainer.splice(deleteIndex, 1);
    localStorage.setItem("Products", JSON.stringify(productContainer));
    disPlay();
}


function searchPro(trim) {

    let containerELement = ``;

    for (let i = 0; i < productContainer.length; i++) {
        if (productContainer[i].name.toLowerCase().includes(trim.toLowerCase()) == true) {

            containerELement += `
            <tr>
                <td>${i + 1}</td>
                <td>${productContainer[i].name}</td>
                <td>${productContainer[i].price}</td>
                <td>${productContainer[i].catg}</td>
                <td>${productContainer[i].desc}</td> 
                <td class="" id="btnUpdate"><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button></td>
                <td class="" id="btnDelete"><button class="btn btn-outline-dark">Update</button></td>
            </tr>
            `;

        }
    }
    document.getElementById('tableBody').innerHTML = containerELement;
}










function clear() {
    productNameInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productDescriptionInput.value = "";
}


function validtion() {

    let regex = /^[A-Z][a-z]{0,8}$/;

    if (regex.test(productNameInput.value) === true) {
        return true;
    }
    else {
        return false;
    }

}