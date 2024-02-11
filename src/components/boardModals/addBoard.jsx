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

    function OpenModal() {
        setOpenModal(true)
    }

    function SubmitForm(info) {
        console.log(info)
        dispatch(addBoard(info))
        setOpenModal(false)
    }

    return (
        <>
            <AddBoardButton onClick={OpenModal} />
            <BoardModalBase isModalOpen={isModalOpen} info={{ title: '', iconURL: 'icon-Project', backgroundURL: '0' }} onCloseModal={CloseModal} action={'add'} SubmitForm={SubmitForm}/>
        </>
    )
}