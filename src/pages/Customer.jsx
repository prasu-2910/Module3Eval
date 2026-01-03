function customer(){
    return(<div className="=cards">
        <p>name:{restaurantName}</p>
        <p>Adress:{adress}</p>
        <p>type:{type}</p>
        <p>parkingAvailability:{<select>
            <option>available</option>
            <option>unavailable</option>
            </select>}</p>

            </div>
        
    )
}