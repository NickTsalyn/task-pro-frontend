import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { AddBoardButton } from './addBoardButton/addBoardButton'
import { BoardModalBase } from './ModalsBase/BoardModalBase'
import { addBoard } from 'redux/boards/operations'

export const AddBoard = () => {
    const dispatch = useDispatch()
    const [isModalOpen, setOpenModal] = useState(false)

    function CloseModal() {
        setOpenModal(false)
    }

    function OpenModal(event) {
        event.stopPropagation()
        setOpenModal(true)
    }

    function SubmitForm(info) {
        dispatch(addBoard(info))
        setOpenModal(false)
    }

    return (
        <>
            <AddBoardButton onClick={(event) => OpenModal(event)} />
            <BoardModalBase isModalOpen={isModalOpen} info={{ title: '', iconURL: 'icon-Project', backgroundURL: 'p0' }} onCloseModal={CloseModal} action={'add'} SubmitForm={SubmitForm}/>
        </>
    )
}