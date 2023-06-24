let ProductName = document.getElementById("ProductName")
let ProductPrice = document.getElementById("ProductPrice")
let ProductDescription = document.getElementById("ProductDescription")

function inputdata(){
    let data = {
        ProductName: ProductName.value,
        ProductPrice: ProductPrice.value,
        ProductDescription: ProductDescription.value
    }
       sendData("AddProduct","POST",data)
       displayProducts()
}


let productsn = []
function getDatafromApi() {
    fetch('http://localhost:3000/display')
        .then(response => response.json())
        .then(json => {
            productsn = json.Products
            displayProducts()
            console.log(productsn)
        }
        )
}
getDatafromApi() 
    /*displayProducts*/

function displayProducts() {
    var cartoona = ``;
    for (var i = 0; i < productsn.length; i++) {
        cartoona += `<tr>
        <td>${i}</td>
        <td>${productsn[i].ProductName}</td>
        <td>${productsn[i].ProductPrice}</td>
        <td>${productsn[i].ProductDescription}</td>
        <td> <button  onclick="Updatedata(${i},${productsn[i].id}); " class="btn btn-outline-warning">update</button> </td>
        <td> <button  onclick="deleteproducts(${productsn[i].id}); " class="btn btn-outline-danger">delete</button> </td>
    </tr>`
    }
    document.getElementById('tableBody').innerHTML = cartoona;
}


function sendData(endpoint, method, data) {
    fetch(`http://localhost:3000/${endpoint}`, {
        method: method,
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())

        .then(json => {

            if(json.message=="success"){
                getDatafromApi() 
            }
        });
}

function deleteproducts(id){
    sendData("delete","DELETE",{id})
}
let Productid
function Updatedata(index,id){
    Productid=id
    ProductName.value=productsn[index].ProductName
    ProductPrice.value=productsn[index].ProductPrice
    ProductDescription.value=productsn[index].ProductDescription
    document.getElementById("update").style.display ="block"
    document.getElementById("add").style.display='none'
}
function sendND()
{
    let data = {
        id:Productid,
        ProductName: ProductName.value,
        ProductPrice: ProductPrice.value,
        ProductDescription: ProductDescription.value
    }
    sendData("update","PUT",data)
}


