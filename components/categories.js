import React from 'react'
import { useState, useRef,useEffect } from 'react'
import {fetch_categoriesApi} from '../redux/fetchapi'
import { useSelector,useDispatch } from 'react-redux'

export default function Categories() {

  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(fetch_categoriesApi())
    console.log('helloc categoreis')

  }, [])





  return (
    <div>
        <h1>categories page</h1>
        
        
 



    </div>
  )
}
