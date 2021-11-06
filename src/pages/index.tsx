import React, { useState } from 'react'
import ReactLoading from 'react-loading'

import { NextPage } from 'next'
import Head from 'next/head'
import { useTheme } from 'styled-components'

import { LineStatusCard } from '~/components/LineStatusCard'
import { Modal } from '~/components/Modal'
import { useAPI } from '~/hooks'
import { HomeContainer, LoadingContainer } from '~/styles/pages/home'
import { IAPIStatusRequest, IStatusLine } from '~/types'
import { lineColors } from '~/utils/lineColors'

const Home: NextPage = () => {
  const [selectedLine, setSelectedLine] = useState<IStatusLine>()
  const theme = useTheme()
  const { data } = useAPI<IAPIStatusRequest>('/status', { method: 'GET' }, { refreshInterval: 300000 })

  return (
    <>
      <Head>
        <title>SPTrains</title>
      </Head>

      <HomeContainer>
        {!data || !data.lines || data.lines.length < 1 ? (
          <LoadingContainer>
            <ReactLoading type="cylon" color={theme.colors.text} />
          </LoadingContainer>
        ) : (
          data.lines.map((line) => <LineStatusCard key={line.id} line={line} onDetailsClick={setSelectedLine} />)
        )}
      </HomeContainer>
      <Modal
        isOpen={!!selectedLine}
        header={selectedLine?.name}
        onClose={() => setSelectedLine(undefined)}
        style={{ border: `2px solid ${lineColors(selectedLine?.id || 1).background}` }}
      >
        {selectedLine?.details}
      </Modal>
    </>
  )
}

export default Home
