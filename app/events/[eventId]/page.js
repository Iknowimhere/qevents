'use client'

import { useEffect, useState } from "react"
import EventDetails from "@/components/EventDetails"

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
        <EventDetails event={event} />
    )
}


export default Event;