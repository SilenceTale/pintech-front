'use client'
import React from 'react'
import MypageContainer from './containers/MypageContainer'
import WithUserContainer from '../global/container/WithUserContainer'

const Mypage = () => {
  return WithUserContainer(MypageContainer)
}

export default React.memo(Mypage)
