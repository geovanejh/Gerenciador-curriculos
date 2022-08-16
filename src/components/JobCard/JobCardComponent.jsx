import ModalApplicantComponent from "../ModalApplicant/ModalApplicantComponent";

import { Card, List, Item, SeniorityTag } from "./JobCardComponent.style";

const JobCardComponent = ({ job }) => {
  return (
    <Card>
      <List>
        <Item color="black">Título: {job.title}</Item>
        <Item>Região: {job.region}</Item>

        <Item>
          Senioridade:
          {/* <SeniorityTag seniority={job.seniority}>{job.seniority}</SeniorityTag> */}
        </Item>
        <Item>Categoria: {job.category ? job.category : "Sem categoria"}</Item>
      </List>
      <ModalApplicantComponent jobId={job.id} />
    </Card>
  );
};

export default JobCardComponent;
