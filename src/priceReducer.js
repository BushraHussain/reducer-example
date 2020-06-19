let PriceReducer = (priceValue, action) => // state = price Value 
{
    switch (action)
    {
        case "reduce":
            return priceValue - 1;
            

        case "increase":
            return priceValue + 1;
        
        default:
                return 0;

        

    }

}

export default PriceReducer;