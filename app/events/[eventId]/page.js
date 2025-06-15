'use client'

import Tag from "@/components/Tag"
import { useEffect, useState } from "react"

const Event=({params})=>{
    let {eventId}=params
let [event,setEvent]=useState(null)
    useEffect(()=>{
        fetch(`https://qevent-backend.labs.crio.do/events/${eventId}`).then(res=>{
            return res.json()
        }).then((data)=>{
            setEvent(data)
        })
    },[params])
    return(
        <div>
            <div>
                <img src={event?.image} alt={event?.name} />
            </div>
            <h1>{event?.name}</h1>
            <h2>{event?.location}</h2>
            <h2>{event?.artist}</h2>
            <div>
                {event?.tags?.map(tag=><Tag key={tag} text={tag}></Tag>)}
            </div>
            <p>{event?.description}</p>
            <div>{event?.price}</div>
            <button>Buy tickets</button>
        </div>
    )
}


export default Event;