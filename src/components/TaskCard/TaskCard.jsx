import * as React from 'react';
import { useDispatch } from 'react-redux';
import sprite from '../../images/icons.svg';
import { deleteTask } from 'redux/tasks/operations';
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
}) => {
  const { t } = useTranslation('global');

  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const formatDeadlineDate = deadline => {
    const formattedDeadlineDate = new Date(deadline);

    const day = formattedDeadlineDate.getDate();
    const month = String(formattedDeadlineDate.getMonth() + 1).padStart(2, '0');
    const year = formattedDeadlineDate.getFullYear();

    return `${day}/${month}/${year}`;
  };

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
    });
  };

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
              <SubTitle>Priority</SubTitle>
              <PriorityContainer>
                <CirclePriority value={priority} />
                <TextPriority>{priority}</TextPriority>
              </PriorityContainer>
            </ToDoContainer>
            <DeadlineContainer>
              <SubTitle>{t('screenPage.render.modal.card.deadline')}</SubTitle>
              <TextDate>{formatDeadlineDate(deadline)}</TextDate>
            </DeadlineContainer>
          </CardPriorityDeadline>
          <ButtonsContainer>
            <Bell>
              <SvgBell>
                <use xlinkHref={`${sprite}#icon-bell-01`}></use>
              </SvgBell>
            </Bell>
            <Buttons>
              <ChangeColumnButton />

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
