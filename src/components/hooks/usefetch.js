/**
 * 
 * @param {string} url 
 * @param {FetchEventInit} options 
 */

import { useEffect, useState } from "react"


export function useFetch (url, options= {}) {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [errors, setErrors] = useState(null)

    console.log("-B")

    useEffect(()=>{
        console.log("-A")
        fetch(url, {
            ...options,
        headers: {
            'Accept': 'application.json; charset=utf-8',
            ...options.headers
        }
        }).then(r=>r.json()).then(data=>{
            console.log("A")
            console.log("DATA", data.results)
            setLoading(false)
            setData(data.results)
        }).catch((e)=>{
            console.log("B")
            setErrors(e)
        }).finally(()=>{
            console.log("C")
            setLoading(false)
        })
    }, [url]);



    return {
        loading, data, errors
    }
}