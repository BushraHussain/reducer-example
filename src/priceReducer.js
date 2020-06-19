let PriceReducer = (priceValue, action) => // state = price Value 
{
    switch (action)
    {
        case "reduce":
            return priceValue - 1;
            

        case "increase":
            return priceValue + 1;

        

    }

}

export default PriceReducer;