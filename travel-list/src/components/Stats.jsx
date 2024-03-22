
export default function Stats({items}){
    if(!items.length){ return <p className='stats'><em>Start adding some item to your packing list 🚀</em></p>}
  
    const numItems = items.length;
    const packedItems = (items.filter((item) => item.packed)).length;
    const calculatePercentage = Math.round((packedItems/numItems) *100);
  
    return(
        <footer className="stats">
            <em>
              {calculatePercentage === 100? "You got everything! Ready to go ✈️" :
                 `💼You have ${numItems} items in your list, and you alredy packed ${packedItems}
                  (${calculatePercentage.toFixed(2)}%).`
               }
            </em>
        </footer>
    )
  }