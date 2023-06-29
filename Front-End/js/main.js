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
var headers = {}


let productsn = []
function getDatafromApi() {
    fetch('http://localhost:3000/display', {method:"GET",mode: 'cors', headers: headers}
    )
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
let pr=[]
var s ,i2,id2,j
function displayProducts() {
    var cartoona = ``;

    for (var i = 0; i < productsn.length; i++) {
        cartoona += `<tr>
        <td>${i}</td>
        <td>${productsn[i].ProductName}</td>
        <td>${productsn[i].ProductPrice}</td>
        <td>${productsn[i].ProductDescription}</td>
        <td> 
        
        <button 
        onclick= "Updatedata(${i}); " class="btn btn-outline-warning">update</button> 
        </td>
        <td> 
        <button 
        onclick="deleteproducts(${i}); " class="btn btn-outline-danger">delete</button> 
        </td>
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

let Productid
function Updatedata(d){
    
   var index=d

  var _id=productsn[index]._id
    Productid=_id+""
    ProductName.value=productsn[index].ProductName
    ProductPrice.value=productsn[index].ProductPrice
    ProductDescription.value=productsn[index].ProductDescription
    document.getElementById("update").style.display ="block"
    document.getElementById("add").style.display='none'
}
function deleteproducts(id){

    
   var index=id

  var id5=productsn[index]._id
  _id=id5+""  
      sendData("delete","DELETE",{_id})
}
function sendND()
{
    let data = {
        _id:Productid,
        ProductName: ProductName.value,
        ProductPrice: ProductPrice.value,
        ProductDescription: ProductDescription.value
    }
    sendData("update","PUT",data)
    ProductName.value=""
    ProductDescription.value=""
    ProductPrice.value=""
    document.getElementById("add").style.display='block'
    document.getElementById("update").style.display ="none"

}

