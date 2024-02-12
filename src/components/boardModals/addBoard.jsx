import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { AddBoardButton } from './addBoardButton/addBoardButton'
import { BoardModalBase } from './ModalsBase/BoardModalBase'
import { addBoard } from 'redux/boards/operations'

export const AddBoard = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isModalOpen, setOpenModal] = useState(false)

    function CloseModal() {
        setOpenModal(false)
    }

    function OpenModal(event) {
        event.stopPropagation()
        setOpenModal(true)
    }

    function SubmitForm(info) {
        console.log(info)
        dispatch(addBoard(info))
        setOpenModal(false)
        navigate(`/home/${info.title.replaceAll(' ', '')}`)
    }

    return (
        <>
            <AddBoardButton onClick={(event) => OpenModal(event)} />
            <BoardModalBase isModalOpen={isModalOpen} info={{ title: '', iconURL: 'icon-Project', backgroundURL: '0' }} onCloseModal={CloseModal} action={'add'} SubmitForm={SubmitForm}/>
        </>
    )
}