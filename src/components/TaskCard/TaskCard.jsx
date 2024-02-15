import * as React from 'react';
import { useDispatch } from 'react-redux';
import sprite from '../../images/icons.svg';
import {
  deleteTask,
  // editTask
} from 'redux/tasks/operations';
import toast, { Toaster } from 'react-hot-toast';
import Modal from 'react-modal';
import { useState } from 'react';
import { toastStyles } from '../../ToasterOptions';

import {
  PrioritySeeContainer,
  CardPriorityDeadline,
  TaskContainer,
  Title,
  Text,
  Line,
  ToDoContainer,
  DeadlineContainer,
  Bell,
  Buttons,
  TextContainer,
  Svg,
  Btn,
  MenuCard,
  SubTitle,
  CirclePriority,
  TextPriority,
  PriorityContainer,
  MainContainer,
  TextDate,
  ButtonsContainer,
  SvgBell,
  DescriptionContainer,
} from './TaskCard.styled';
import { EditCard } from 'components/EditCard/EditCard';
import { ChangeColumnButton } from 'components/ChangeColumn/ChangeColumnButton';
import { useTranslation } from 'react-i18next';

Modal.setAppElement('#root');

export const TaskCard = ({
  task: { _id, title, description, priority, deadline },
  columns,
}) => {
  const { t } = useTranslation('global');

  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(null);
  const isDeadLinePassed = selectedDate && setSelectedDate > new Date();
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const formatDeadlineDate = deadline => {
    const formattedDeadlineDate = new Date(deadline);

    const day = formattedDeadlineDate.getDate();
    const month = String(formattedDeadlineDate.getMonth() + 1).padStart(2, '0');
    const year = formattedDeadlineDate.getFullYear();

    return `${day}/${month}/${year}`;
  };

  // const openEditModal = () => {
  //   setIsEditModalOpen(true);
  // };

  // const closeEditModal = () => {
  //   setIsEditModalOpen(false);
  // };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const successToaster = () => {
    toast.success('You successfully deleted card!', {
      icon: '👍',
      duration: 4000,
      style: toastStyles.success,
    });
  };

  const errorToaster = error => {
    toast.error(`Something went wrong! It's ${error} error`, {
      icon: '🤔',
      duration: 4000,
      style: toastStyles.error,
      // {
      //   background: 'red',
      //   color: '#fff',
      // },
    });
  };

  // const toEditTask = (taskId, updatedData) => {
  //   dispatch(editTask({ id: taskId, updatedData }));
  //   successToaster();
  // };

  // const toDeleteTask = taskId => {
  //   dispatch(deleteTask(taskId));
  //   successToaster();
  // };

  const toDeleteTask = taskId => {
    try {
      dispatch(deleteTask(taskId));
      successToaster();
    } catch (error) {
      errorToaster(error.message);
    }
  };

  return (
    <TaskContainer>
      <PrioritySeeContainer value={priority}></PrioritySeeContainer>
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
              <SubTitle>{priority}</SubTitle>
              <PriorityContainer>
                <CirclePriority value={priority} />
                <TextPriority></TextPriority>
              </PriorityContainer>
            </ToDoContainer>
            <DeadlineContainer>
              <SubTitle>{t('screenPage.render.modal.card.deadline')}</SubTitle>
              {/* <TextDate> {selectedDate ? selectedDate.toLocaleDateString() : "No deadline"}
</TextDate> */}

              <TextDate>{formatDeadlineDate(deadline)}</TextDate>
            </DeadlineContainer>
          </CardPriorityDeadline>
          <ButtonsContainer>
            {isDeadLinePassed ? null : (
              <Bell>
                <SvgBell>
                  <use xlinkHref={`${sprite}#icon-bell-01`}></use>
                </SvgBell>
              </Bell>
            )}
            <Buttons>
              <ChangeColumnButton taskId={_id} />
              <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                overlayClassName={'modal-overlay'}
                className={'modal-content'}
                closeTimeoutMS={300}
              >
                <EditCard
                  onCloseModal={closeModal}
                  task={{ _id, title, description, priority, deadline }}
                />
              </Modal>
              <Btn type="button" onClick={openModal}>
                <Svg>
                  <use xlinkHref={`${sprite}#icon-pencil-01`}></use>
                </Svg>
              </Btn>
              <Btn type="button" onClick={() => toDeleteTask(_id)}>
                <Svg>
                  <use xlinkHref={`${sprite}#icon-trash-04`}></use>
                </Svg>
              </Btn>
            </Buttons>
          </ButtonsContainer>
        </MenuCard>
      </MainContainer>

      <Toaster />
    </TaskContainer>
  );
};
