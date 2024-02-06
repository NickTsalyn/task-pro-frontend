import * as React from "react";
import { useDispatch } from "react-redux";
import sprite from "../../images/icons.svg";
import { deleteTask, editTask } from "redux/tasks/operations";

import { PrioritySeeContainer, CardPriorityDeadline, 
  TaskContainer, Title, Text, Line, ToDoContainer, 
  DeadlineContainer, Bell, Buttons, TextContainer, Svg, 
  Btn, MenuCard, SubTitle, CirclePriority, TextPriority, 
  PriorityContainer, MainContainer, TextDate, ButtonsContainer, 
  SvgBell, DescriptionContainer } from "./TaskCard.styled";


export const TaskCard = ({ task: { id, title, description } }) => {
  const dispatch = useDispatch();
  const toEditTask = (taskId, updatedData) => {
    dispatch(editTask({ id: taskId, ...updatedData }));
  };
  const toDeleteTask = taskId => {
    dispatch(deleteTask(taskId));
  };



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
              <Btn type="button" onClick={() => toEditTask(id)}>
                <Svg>
                  <use xlinkHref={`${sprite}#icon-pencil-01`}></use>
                </Svg>
              </Btn>
              <Btn type="button" onClick={() => toDeleteTask(id)}>
                <Svg>
                  <use xlinkHref={`${sprite}#icon-trash-04`}></use>
                </Svg>
              </Btn>
            </Buttons>
          </ButtonsContainer>
        </MenuCard>

      </MainContainer>
    </TaskContainer>
  );
}


