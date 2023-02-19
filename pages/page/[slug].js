import BreadCrumb from "@/component/common/BreadCrumb";
import Container from "@/component/styled/Container";
import { useRouter } from "next/router";

const TermAndContions = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <BreadCrumb title="Term And Conditions" />
      <Container className="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <h2 className="title">
                Terms and Conditions <b>{slug}</b>
              </h2>
              <p>
                lorem15 ipsum dolor sit amet, consectetur adipiscing elit. Sed
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TermAndContions;
