import * as React from "react";
import { PrioritySeeContainer, CardPriorityDeadline, 
  TaskContainer, Title, Text, Line, ToDoContainer, 
  DeadlineContainer, Bell, Buttons, TextContainer, Svg, 
  Btn, MenuCard, SubTitle, CirclePriority, TextPriority, 
  PriorityContainer, MainContainer, TextDate, ButtonsContainer, SvgBell, DescriptionContainer } from "./TaskCard.styled";
import sprite from "../../images/icons.svg";


export const TaskCard = () => {
   
    

return (
    
        <TaskContainer >
          <PrioritySeeContainer></PrioritySeeContainer>
          <MainContainer >
            
            <TextContainer >
             <Title>
                The Watch Spot Design
             </Title>   
             <DescriptionContainer>
                <Text>
                Create visually appealing and functional design prototypes based on
                the approved concepts, ensuring seamless user experience and
                incorporating feedback for iterative improvements.
                </Text>
             </DescriptionContainer>

            </TextContainer>

            <Line></Line>
           
            <MenuCard >
              <CardPriorityDeadline >
                <ToDoContainer >
                    <SubTitle>Priority</SubTitle>
                    <PriorityContainer>
                    <CirclePriority  />
                    <TextPriority>Low</TextPriority>
                    </PriorityContainer>
                                   
                </ToDoContainer>
                <DeadlineContainer >
                    <SubTitle>
                    Deadline
                    </SubTitle>
                  <TextDate >
                    12/05/2023
                  </TextDate>
                </DeadlineContainer>
              </CardPriorityDeadline>
              <ButtonsContainer>
                <Bell >
                 <SvgBell>
                    <use xlinkHref= {`${sprite}#icon-bell-01`}></use>
                 </SvgBell>
                </Bell> 
                <Buttons >
                <Btn>
                  <Svg>
                    <use xlinkHref={`${sprite}#icon-active`}></use>
                  </Svg>
               </Btn>
                <Btn>
                  <Svg>
                   <use xlinkHref={`${sprite}#icon-pencil-01`}></use>
                  </Svg>
                </Btn>
                <Btn>
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


