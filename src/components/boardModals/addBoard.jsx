import React, { useState } from 'react'
//import { useDispatch } from "react-redux"
import { AddBoardButton } from './addBoardButton/addBoardButton'
import { BoardModalBase } from './ModalsBase/BoardModalBase'

export const AddBoard = () => {
    //const dispatch = useDispatch()
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
            <BoardModalBase isModalOpen={isModalOpen} info={{ title: '', icon: 'icon-Project', background: '0' }} onCloseModal={CloseModal} action={'add'} SubmitForm={SubmitForm}/>
        </>
    )
}