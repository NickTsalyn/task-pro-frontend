import * as React from "react";
import { useDispatch } from "react-redux";
import sprite from "../../images/icons.svg";
import {  editTask } from "redux/tasks/operations";
import toast, { Toaster } from 'react-hot-toast';
import Modal from 'react-modal';
import { useState } from 'react';



import { PrioritySeeContainer, CardPriorityDeadline, 
  TaskContainer, Title, Text, Line, ToDoContainer, 
  DeadlineContainer, Bell, Buttons, TextContainer, Svg, 
  Btn, MenuCard, SubTitle, CirclePriority, TextPriority, 
  PriorityContainer, MainContainer, TextDate, ButtonsContainer, 
  SvgBell, DescriptionContainer } from "./TaskCard.styled";
import { t } from "i18next";
import { ConfirmModal } from "components/ConfirmModal/ConfirmModal";
import { PopUpSetColumn } from "components/PopUpSetColumn/PopUpSetColumns";


export const TaskCard = ({ task: { id, title, description } }) => {
  const dispatch = useDispatch();

  Modal.setAppElement('#root');

  const [isModalOpen, setIsModalOpen] = useState(false);

const openModal = () => {
  setIsModalOpen(true);
};

const closeModal = () => {
  setIsModalOpen(false);
};

  // const toEditTask = (taskId, updatedData) => {
  //   dispatch(editTask({ id: taskId, updatedData }));
  //   successToaster();
  // };

  // const toDeleteTask = taskId => {
  //   dispatch(deleteTask(taskId));
  //   successToaster();
  // };

  const toEditTask = async (taskId, updatedData) => {
    try {
      await dispatch(editTask({ id: taskId, updatedData }));
      successToaster();
    } catch (error) {
      errorToaster(error.message);
    }
  };

//  const toDeleteTask = async (taskId) => {
//     try {
//       await dispatch(deleteTask(taskId));
//       successToaster();
//     } catch (error) {
//       errorToaster(error.message);
//     }
//   };


  const successToaster = () => {
    toast.success("It's success! Congratulations!", {
      position: "top-right",
      duration: 4000,
      style: {
        background: "green",
        color: "#fff",
      },
    });
  };

  const errorToaster = (error) => {toast.error(`Ooops.... It's ${error} error`, {
    position: "top-right",
    duration: 4000,
    style: {
      background: "red",
      color: "#fff",
    },
  
  });}
  // const errorToaster = (error) => {
  //   toast.error(`Error: ${error}`, {
  //     position: "top-right",
  //     duration: 4000,
  
  //   });
  // };



  return (

    <TaskContainer>
      <PrioritySeeContainer></PrioritySeeContainer>
      <MainContainer>

        <TextContainer>
          <Title>{title}</Title>
          <DescriptionContainer>
            <Text>{description}</Text>
          </DescriptionContainer>

        </TextContainer>

        <Line></Line>

        <MenuCard>
          <CardPriorityDeadline>
            <ToDoContainer>
              <SubTitle>Priority</SubTitle>
              <PriorityContainer>
                <CirclePriority />
                <TextPriority></TextPriority>
              </PriorityContainer>

            </ToDoContainer>
            <DeadlineContainer>
              <SubTitle>
                Deadline
              </SubTitle>
              <TextDate>

              </TextDate>
            </DeadlineContainer>
          </CardPriorityDeadline>
          <ButtonsContainer>
            <Bell>
              <SvgBell>
                <use xlinkHref={`${sprite}#icon-bell-01`}></use>
              </SvgBell>
            </Bell>
            <Buttons>
              <Btn>
                <Svg>
                  <use xlinkHref={`${sprite}#icon-active`}></use>
                </Svg>
              </Btn>

              <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        overlayClassName={'modal-overlay'}
        className={'modal-content'}
        closeTimeoutMS={300}
      >
        <PopUpSetColumn onCloseModal={closeModal} />
      </Modal>

              <Btn type="button" onClick={() => toEditTask(id)}>
                <Svg>
                  <use xlinkHref={`${sprite}#icon-pencil-01`}></use>
                </Svg>
              </Btn>
              {/* type="button" onClick={() => toDeleteTask(id)} */}
              <Btn type="button" onClick={() => openModal()}>
                <Svg>
                  <use xlinkHref={`${sprite}#icon-trash-04`}></use>
                </Svg>
                {t('tasks.list.delete')}
              </Btn>
              {isModalOpen && <ConfirmModal id={id} isOpen={isModalOpen} closeModal={closeModal} />}

            </Buttons>
          </ButtonsContainer>
        </MenuCard>

      </MainContainer>

      <Toaster />

    </TaskContainer>
  );
}


