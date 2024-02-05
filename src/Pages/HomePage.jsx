import { EditProfileModal } from 'components/EditProfileModal/EditProfileModal'
import React from 'react'
import Modal from 'react-modal'

export const HomePage = () => {
  return (
    <div>HomePage
      <button>Open modal</button>
      <EditProfileModal/>
    </div>
  )
}
