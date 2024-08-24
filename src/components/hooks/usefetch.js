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

    useEffect(()=>{
        fetch(url, {
            ...options,
        headers: {
            'Accept': 'application.json; charset=utf-8',
            ...options.headers
        }
        }).then(r => r.json()).then(data => {
            setLoading(false)
            setData(data.results)
        }).catch((e) => {
            setErrors(e)
        }).finally(() => {
            setLoading(false)
        })
    }, [url]);

    return {
        loading, data, errors
    }
}