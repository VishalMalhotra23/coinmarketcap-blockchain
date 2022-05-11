import { createContext, useState, useEffect } from 'react'
import { useMoralis } from 'react-moralis'
import { useMoralisQuery } from 'react-moralis'
import {
  dogeAbi,
  daiAbi,
  linkAbi,
  usdcAbi,
  dogeAddress,
  linkAddress,
  daiAddress,
  usdcAddress,
} from '../lib/constants'

export const CoinMarketContext = createContext()

export const CoinMarketProvider = ({ children }) => {
  const getTopTenCoins = async () => {
    try {
      const res = await fetch('/api/getTopTen')
      const data = await res.json()
      return data.data.data
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <CoinMarketContext.Provider
      value={{
        getTopTenCoins,
      }}
    >
      {children}
    </CoinMarketContext.Provider>
  )
}
