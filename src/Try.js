import React from 'react'

export const Try = () => {
    const DUMMY_DATA = [
        {
          item: "shawarma",
          recipe: "lettuce,tomato,meat",
          price: "124",
          pic: { shawarma },
        },
        { item: "shake", recipe: "meat", price: "14", pic: { burger } },
      ];
    return (
        <div>
            {DUMMY_DATA.map((data)=>{
                    <ui>
                    <p>{data.item}</p>
                    <p>{data.recipe}</p>
                    <p>{data.price}</p>
                    
                    </ui>
            })}
        </div>
    )
}
