import React, { useCallback,  useState } from 'react'
import styled from 'styled-components'
import { TYPE } from '../../theme'
import Modal from '../Modal'
import { AutoRow, RowBetween } from '../Row'
import { AutoColumn } from '../Column'
import { AlertTriangle } from 'react-feather'
import { ButtonError } from '../Button'







const WarningContainer = styled.div`
  max-width: 420px;
  width: 100%;
  padding: 1rem;
  background: rgba(242, 150, 2, 0.05);
  border: 1px solid #f3841e;
  border-radius: 20px;
  overflow: auto;
`

const StyledWarningIcon = styled(AlertTriangle)`
  stroke: ${({ theme }) => theme.yellow2};
`



export default function NewUserWarningModal({
  isOpen,
}: {
  isOpen: boolean
}) {



  const [isOpenModal, setisOpenModal] = useState<boolean>(true)


  const [understandChecked, setUnderstandChecked] = useState(false)
  const toggleUnderstand = useCallback(() => setUnderstandChecked(uc => !uc), [])

  const handleDismiss = useCallback(() => null, [])

  return (
    <Modal isOpen={isOpenModal && isOpen} onDismiss={handleDismiss} maxHeight={90}>
      <WarningContainer className="token-warning-container">
        <AutoColumn gap="lg">
          <AutoRow gap="6px">
            <StyledWarningIcon />
            <TYPE.main color={'yellow2'}>Notes to user</TYPE.main>
          </AutoRow>
          <TYPE.body color={'yellow2'}> 1, DogeShrek is a DEX on <a target="_BLANK" style={ {color:"orange" }} href="https://dogechain.dog/">Dogechain</a> a recently launched blockchain. </TYPE.body>
          <TYPE.body color={'yellow2'}>
          2, Many coins at the moment are volital and not audited. Loss of funds for various reasons are possible.
          </TYPE.body>
          <TYPE.body color={'yellow2'}>
          3, DogeShrek is still in beta and being actively developed. Please understand this when using any elements of this application. use at your own risk.
          </TYPE.body>
          <TYPE.body color={'yellow2'}>
          4, The user is responsible  for keeping track of their gains and losses.
          </TYPE.body>
          <TYPE.body color={'yellow2'}>
          5, Make sure to report scams to the comunnity and <a style={ {color:"orange" }} target="_BLANK" href="https://forms.gle/9RudaRJNgWrNqLrF8">here</a>
          </TYPE.body>

          <RowBetween>
            <div>
              <label style={{ cursor: 'pointer', userSelect: 'none' }}>
                <input
                  type="checkbox"
                  className="understand-checkbox"
                  checked={understandChecked}
                  onChange={toggleUnderstand}
                />{' '}
                I understand and agree
              </label>
            </div>
            <ButtonError
              disabled={!understandChecked}
              error={true}
              width={'140px'}
              padding="0.5rem 1rem"
              className="token-dismiss-button"
              style={{
                borderRadius: '10px'
              }}
              onClick={() => {

                localStorage.setItem("isNewUser", "false");
                setisOpenModal(false);  

           }}
            >
              <TYPE.body color="white">Continue</TYPE.body>
            </ButtonError>
          </RowBetween>
        </AutoColumn>
      </WarningContainer>
    </Modal>
  )
}
