import styled from "styled-components";

const getColor = (props) => {
    switch (props.value) {
      case 'Low':
        return props.theme.priorityColors.low;
      case 'Medium':
        return props.theme.priorityColors.medium;
      case 'High':
        return props.theme.priorityColors.high;
      default:
        return props.theme.priorityColors.without;
    }
  };

export const TaskContainer = styled.div`
    display: grid; 
    grid-template-columns: 4px 1fr;
    gap: 14px;
    width: 335px;
    height: 154px;
    margin: 0 ;
    background-color: ${p => p.theme.colors.white};
    border-radius: ${p => p.theme.radius.m};    
`;

export const PrioritySeeContainer = styled.div`
    height: 154px;
    width: 4px;
    padding: 0;
    border-radius: 8px 0px 0px 8px;
    background-color:  ${getColor};
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${p => p.theme.spacing(3.5)};
    padding: ${p => p.theme.spacing(3.5)} 0;
    padding-right: ${p => p.theme.spacing(5)};
`;

export const Title = styled.h2`
    
  margin: 0;
  margin-bottom: ${p => p.theme.spacing(2)};
  font-weight: 600;
  font-size: 14px;
`;

export const TextContainer = styled.div`
  width: 290px;
  height: 67px;
  margin: 0;
`;

export const DescriptionContainer = styled.div`
  max-height: 38px; 
  overflow: hidden;
  line-height: 1.3; 
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical; 
`;

export const Text = styled.p`
  width: 290px;
  height: 34px;
  margin: 0;
  
  font-weight: 300;
  font-size: 12px;
  line-height: 1.3;
`;

export const Line = styled.div`
    width: 291px;
    height: 1px;
    border-top: 1px solid ${p => p.theme.colors.darkTextColor};
    opacity: 10%;
`;

export const MenuCard = styled.div`
    display: flex;
    gap: ${p => p.theme.spacing(1)};
    justify-content: space-between;
`;

export const CardPriorityDeadline = styled.div`
    display: flex;
    gap: ${p => p.theme.spacing(3.5)};
`;

export const ToDoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${p => p.theme.spacing(1)};
`;

export const SubTitle = styled.h3`
    font-size: 8px;
    line-height: 1.3;
    margin: 0;
    color: ${p => p.theme.colors.darkTextColor};
    opacity: 50%;
`;

export const PriorityContainer = styled.div`
    display:flex;
    gap: ${p => p.theme.spacing(1)};
    height: 15px;
    width: auto;
`;

export const CirclePriority = styled.div`
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background-color: ${getColor};
`;

export const TextPriority = styled.p`
    font-size: 10px;
    line-height: 1.3;
    color: ${p => p.theme.colors.darkTextColor};
    margin: 0;
`;

export const DeadlineContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${p => p.theme.spacing(1)};
`;

export const TextDate = styled.p`
    font-size: 10px;
    line-height: 1.3;
    color: ${p => p.theme.colors.darkTextColor};
    margin: 0;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: flex-end;
    gap: ${p => p.theme.spacing(3)};
`;

export const Bell = styled.div`
    display: none;
`;

export const SvgBell = styled.svg`
    height: 16px;
    width: 16px;
    fill:${p => p.theme.colors.white};
    stroke: ${p => p.theme.violetColors.accentColor};
    opacity: 50%;
`;

export const Buttons = styled.div`
    display: flex;
    gap: ${p => p.theme.spacing(1)};
`;

export const Btn = styled.button`
    background: transparent;
    border: transparent;
    border-radius: 50%;
    height: 16px;
    width: 16px;
`;

export const Svg = styled.svg`
    height: 16px;
    width: 16px;
    fill:${p => p.theme.colors.white};
    stroke: ${p => p.theme.colors.darkTextColor};
    opacity: 50%;
    transition: 200ms ease-out;

    :hover, :focus {
        stroke: ${p => p.theme.violetColors.accentColor};
    }
`;

// priorityColors: { // task's priority colors
//     low: '#8FA1D0', //low priority
//     medium:'E09CB5', //medium priority
//     high:'BEDBB0', // high priority
//     without: '161616', //without priority
//     },