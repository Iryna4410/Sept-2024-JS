
function exchange(sumUAH,currencyValues,exchangeCurrency){
let chosenCurrency;
    for (const item of currencyValues) {
        if (item.currency===exchangeCurrency){
            chosenCurrency=item;
        }
        let result =sumUAH/chosenCurrency.value
        return result;
    }
}
console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));