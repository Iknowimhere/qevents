'use client'
import Tag from "@/components/Tag"
import { useCallback, useEffect,useState } from "react"
import { useRouter } from "next/navigation"
const Tags = () => {
  const [tags,setTags]=useState([])
  const router = useRouter();

  const handleClick = useCallback((tag) => {
    router.push(`/events/?tag=${tag}`);
  },[]);

  useEffect(()=>{
    fetch(" https://qevent-backend.labs.crio.do/tags").then((res)=>{
      return res.json()
    }).then((data)=>{  
      setTags(data)
    })
  },[])
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 mt-10">
      {tags.map((tag) => (
        <Tag key={tag.id} text={tag.name} onClick={() => handleClick(tag.name)} />
      ))}
    </div>
  )
}
export default Tags