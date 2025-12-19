import { useEffect, useState } from 'react'

export function usePost() {
  const [ post,setPost ] = useState([]);

  async function getPost() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/2")
    const json = await response.json();
    setPost(json)
  }

  useEffect(() => {
    getPost()
  },[])

  return post;
}