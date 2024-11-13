let exchange=(sumUAH,currencyValues,exchangeCurrency)=>{
    let chosenCurrency;
    for (const item of currencyValues) {
        if (item.currency===exchangeCurrency){
            chosenCurrency=item;
        }
        let result =sumUAH/chosenCurrency.value
        return result;
    }
}
console.log(exchange(30000,[{currency:'USD',value:10},{currency:'EUR',value:12}],'USD'));