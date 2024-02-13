import { useSelector } from 'react-redux';
import { ProjectName } from '../HeaderDashboard.styled';

const ProjectTitle = ({ boardId }) => {
  const boards = useSelector(state => state.boards.boards);
  const project = boards.find(el => el._id === boardId);

  return <ProjectName>{project ? project.title : ''}</ProjectName>;
};

export default ProjectTitle;
