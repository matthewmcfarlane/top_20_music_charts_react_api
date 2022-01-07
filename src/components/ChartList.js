import React from "react";
import ListItem from "./ListItem";

const ChartList = ({charts}) => {

    const chartsItems = charts.map((chart, index) => {
        return <ListItem chart={chart} key={index} />
    })
    return(
        <div>
                <ol>
                {chartsItems}
                </ol>
        </div>
    )

}

export default ChartList;