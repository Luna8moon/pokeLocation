import { useState } from "react"


export const LocationCardComponent = (props) => {

    console.log(props)
    const [locationInformation, setLocationInformation] = useState(null)
    const [isInformationLoaded, setIsInformationLoaded] = useState(false)

    if (!isInformationLoaded) { 
        fetch(props.url).then((response) => {

            response.json().then((data) => {
                console.log(data)
                setLocationInformation(data)
                setIsInformationLoaded(true)
            })
        })
    }

    console.log(locationInformation)
    return <article>
        {isInformationLoaded === true ? <>

            <h4>{props.name}</h4>
            <a href={props.url}>Más información</a></> : <p>Loading</p>}
            
    </article>

}