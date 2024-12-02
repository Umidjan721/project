//inputs
let productType = document.getElementById("type-select")
let productName = document.getElementById("product-name");
let productCount = document.getElementById("product-count");
//кнопки
let addProductButton = document.getElementsByClassName("add-product")[0];
// массивы с продактами
let productArray = []
//добавление слушателей событий
addProductButton.addEventListener("click",addProduct)

//функция для добавления продукта
function addProduct(){
    const productTypeValue = productType.value;
    const productNameValue = productName.value;
    const productCountValue = productCount.value;
    if (
        productTypeValue != "" &&
        productNameValue != "" &&
        productCountValue != "" 
    ) {
        let obj = {
            productType: productTypeValue,
            productName: productNameValue,
            productCount: productCountValue,
        };
        productArray.push(obj);
        
        // вывод на экран то что выбираешь 

        htmlContent = "";
        productArray.forEach((e)=>{
            htmlContent += `
            <div class="product-item">Тип: ${e.productType}.</div>
            <div class="product-item">Название: ${e.productName}.</div>
            <div class="product-item">Количество: ${e.productCount}.</div>`
        })
        
        productList.innerHTML = htmlContent;
        
    }

    //Добавление слушателей событий
    clearListButton.addEventListener("click", clearList)

    function clearList(){
        productList.innerHTML = ""
        productArray = []
        console.log(productArray);
    }
    

    console.log(productList);
    
    console.log(productArray);
    productType.value = ""
    productName.value = ""
    productCount.value = ""
    
    
}