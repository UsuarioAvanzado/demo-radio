import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { StoreDispatch, StoreState } from '@store'


export const useStoreDispatch = () => useDispatch<StoreDispatch>()
export const useStoreState: TypedUseSelectorHook<StoreState> = useSelector
