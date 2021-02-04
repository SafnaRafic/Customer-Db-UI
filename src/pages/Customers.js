import { Row, Col, Card } from "antd";
import {useQuery} from "react-query";
import constants from "../constants";

const {Meta} = Card;// same as Card.Meta;


const Customers = () => {
  const { isLoading, isError, data, error} = useQuery("customers", () =>
  fetch(constants.api.customers.list).then((res) => res.json())
  );

  if(isLoading) return <span>Loading...</span>
  if(isError) return <span>Error : {error.message}</span>

   return (
  <Row>{ data && 
    data.map((customer) => (
      <Col span={12} key={customer._id}>
        <Card hoverable style={{margin:15}}>
          <Meta title={customer.title}/>
        </Card>
      </Col>
    ))}
  </Row>);
// return <Row>Hello</Row>
};

export default Customers;
