import React from "react";

const ListItem = ({chart}) => {
    return(
        <>
            
            

            <li><a href={chart["im:collection"].link.attributes.href}>
            {chart["im:name"]["label"]} </a>
            <ul>
            <li>
                {chart["im:artist"]["label"]}
            </li>
            </ul>
            </li>
            
          

        </>
    
    )
}

export default ListItem