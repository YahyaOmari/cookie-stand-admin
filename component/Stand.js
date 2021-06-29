import Check from "./Check"

function Stand({stand}){

    return(
        <Check condition={stand.condition} >
            <p className='m-2 text-gray-600' >
                <span>Location : {stand.location} </span>,
                <span>Minimum Customer per Hour : {stand.min} </span>,
                <span>Maximum Customer per Hour : {stand.max} </span>,
                <span>Average Cookies per Sale : {stand.avg} </span>
            </p>
        </Check>
    )
}

export default Stand