import ModalApplicantComponent from "../ModalApplicant/ModalApplicantComponent";

import { Card, List, Item } from "./JobCardComponent.style";

const JobCardComponent = ({ job }) => {
  return job ? (
    <Card>
      <List>
        <Item color="black">Título: {job.title}</Item>
        <Item>Região: {job.region}</Item>
        <Item>Categoria: {job.category ? job.category : "Sem categoria"}</Item>
        <Item>Tag: {job.tags ? job.tags : "Sem tag"}</Item>
      </List>
      <ModalApplicantComponent jobId={job.id} />
    </Card>
  ) : (
    <h1>"Nao há vagas cadastradas"</h1>
  );
};

export default JobCardComponent;
