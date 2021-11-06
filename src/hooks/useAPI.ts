import { AxiosRequestConfig } from 'axios'
import useSWR, { SWRConfiguration, SWRResponse } from 'swr'

import { api } from '~/services/api'

function useAPI<T extends any = any>(url: string, axiosProps: AxiosRequestConfig, swrProps?: SWRConfiguration): SWRResponse<T, any> {
  const swr = useSWR<T, any>(
    url,
    async (path) => {
      const response = await api({ ...axiosProps, url: path })

      return response.data as T
    },
    {
      ...swrProps,
      revalidateOnReconnect: true,
      errorRetryCount: 5,
      errorRetryInterval: 300000
    }
  )

  return swr
}

export default useAPI
