import React, { useState } from 'react'
import { AddBoardButton } from './addBoardButton/addBoardButton'
import { BoardModalBase } from './ModalsBase/BoardModalBase'

export const AddBoard = () => {
    const [isModalOpen, setOpenModal] = useState(false)

    function CloseModal() {
        setOpenModal(false)
    }

    function OpenModal() {
        setOpenModal(true)
    }

    function SubmitForm(info) {
        console.log(info)
        setOpenModal(false)
    }

    return (
        <>
            <AddBoardButton onClick={OpenModal} />
            <BoardModalBase isModalOpen={isModalOpen} info={''} onCloseModal={CloseModal} action={'add'} SubmitForm={SubmitForm}/>
        </>
    )
}