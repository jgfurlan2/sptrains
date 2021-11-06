import { useState, useEffect, SetStateAction, Dispatch } from 'react'

import { Storage } from '~/types'
import { withCookies } from '~/utils/withCookies'

type ReturnType<T> = [T, Dispatch<SetStateAction<T>>]

export default function usePersistedState<T extends keyof Storage>(key: T, initialState: Storage[T], expiresIn?: number): ReturnType<Storage[T]> {
  const [value, setValue] = useState<Storage[T]>()

  useEffect(() => setValue(withCookies.getItem(key) || initialState), [])
  useEffect(() => withCookies.setItem(key, value, expiresIn), [key, value])

  return [value, setValue]
}
