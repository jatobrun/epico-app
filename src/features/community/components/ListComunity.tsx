import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import EpicoApi from '../../../api/epicoApi';
import { CardEntrepreneur } from './CardEntrepreneur'

export const ListComunity = () => {
  const [ rows, setRows ] = useState([]);

  useEffect(() => {
    getList()
  }, []);

  
  const getList = async() => {
    const formData = new FormData();
    formData.append('inicial' , 'A' )
    try {
      const response = await EpicoApi.post('/emprendedor/emprendedoresCE' , formData );
      const { codigo , data } = response.data
      if ( codigo === '1' ) {
        data.length = 10
        setRows( data )
      }
    } catch (error) {
      console.log( error )
    }
  }
  return (
    <View style={{ paddingBottom: 100 }}>
      {
        rows.map( (item : any) => {
          console.log( item )
          return (
            <CardEntrepreneur key={ item.id } person={ item } />
          )
        })
      }
    </View>
  )
}
