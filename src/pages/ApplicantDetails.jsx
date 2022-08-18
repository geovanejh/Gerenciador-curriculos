import { useParams } from "react-router-dom";

import ApplicantDetailsComponent from "../components/ApplicantDetails/ApplicantDetailsComponent";

const ApplicantDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <ApplicantDetailsComponent applicantId={id} />
    </div>
  );
};

export default ApplicantDetails;
