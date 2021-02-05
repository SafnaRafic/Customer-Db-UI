import { Row, Col, Card, Avatar } from "antd";
import { useQuery } from "react-query";
import constants from "../constants";

const { Meta } = Card; // same as Card.Meta;

const Customers = () => {
  const { isLoading, isError, data, error } = useQuery("customers", () =>
    fetch(constants.api.customers.list).then((res) => res.json())
  );

  if (isLoading) return <span>Loading...</span>;
  if (isError) return <span>Error : {error.message}</span>;

  return (
    <Row className="justify-content-md-center">
      
      {data &&
        data.map((customer) => (
          <Col md={{ span: 8, offset: 3  }}  key={customer._id}>
            <Card title= "Customer : " extra ={customer.cust_number} hoverable style={{ margin: 15, width: 500 }}>
              <Meta
                avatar={
                  <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNsEoshEUDBv7jeAWLKR87KsUQt3JcY5Z5qg&usqp=CAU" />
                }
                title={customer.name}                
              />
              <br></br>
              <p>Email : {customer.email_address}</p>
              <p>Phone : {customer.phone}</p>
              <p>Address: {customer.address}</p>
            </Card>
          </Col>
        ))}
    </Row>
  );
};

export default Customers;
