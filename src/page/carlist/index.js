import React, { useEffect, useState } from "react";
import { Services } from "../../config/api-middleware";
import { useNavigate } from "react-router-dom";

import Segment from "../../component/segment";
import Card from "../../component/Card";
import {
  Row,
  Col,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import "../../assets/css/global-cms-styles.css";
import "../../assets/css/car-list.css";
import axios from "axios";

const CarList = (props) => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [carID, setCarId] = useState();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const formatNumber = (number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);

  const carSize = {
    small: "2 - 4 Orang",
    medium: "4 - 6 Orang",
    large: "6 - 8 Orang",
  };

  useEffect(() => {
    Services()
      .get("https://bootcamp-rent-cars.herokuapp.com/admin/v2/car", {
        headers: {
          access_token: `${localStorage.getItem("ACCESS_TOKEN")}`,
        },
      })
      .then((result) => {
        console.log(result);
        setData(result);
      });
  }, []);

  const handleDeleteCarData = (idCar) => {
    axios
      .delete("https://bootcamp-rent-cars.herokuapp.com/admin/car/" + idCar, {
        headers: {
          access_token: `${localStorage.getItem("ACCESS_TOKEN")}`,
        },
        data: {
          id: idCar,
        },
      })
      .then((response) => {
        console.log(response);
        window.location.replace("/car-list");
      })
      .catch((err) => console.log(err.response.data));
  };

  const handleEditCarData = (idCar) => {
    navigate("/edit-car/" + idCar);
  };

  return (
    <>
      <Segment>
        <Breadcrumb className="mb-4">
          <BreadcrumbItem>Cars</BreadcrumbItem>
          <BreadcrumbItem active>List Car</BreadcrumbItem>
        </Breadcrumb>
        <Row className="mb-4">
          <Col className="d-flex align-items-center">
            <h1 className="title-page mb-0">List Car</h1>
          </Col>
          <Col className="text-end">
            <Button
              className="btn-add-car"
              onClick={() => navigate("/add-car")}
            >
              <i className="fa fa-plus pe-2" aria-hidden="true"></i> Add New Car
            </Button>
          </Col>
        </Row>
        <Segment className="container-filter-btn d-flex pt-2 pb-4">
          <Button className="btn-choose-filter active">All</Button>
          <Button className="btn-choose-filter">2 - 4 people</Button>
          <Button className="btn-choose-filter">4 - 6 people</Button>
          <Button className="btn-choose-filter">6 - 8 people</Button>
        </Segment>
      </Segment>
      <Segment className="mx-auto">
        <Row>
          {data?.data?.cars?.map((item, index) => {
            return (
              <Col key={index} md={4} className="pb-4">
                <Card className="card card-list-car">
                  <img className="img-car" alt={item.name} src={item.image} />
                  <CardBody className="px-0 pb-0">
                    <CardTitle className="txt-name-car" tag="h2">
                      {item.name}
                    </CardTitle>
                    <CardSubtitle className="txt-price-car mb-3">
                      {formatNumber(item.price)} / hari
                    </CardSubtitle>
                    <CardText className="txt-more-info mb-3">
                      <i className="fa fa-user-o pe-2" aria-hidden="true"></i>{" "}
                      {carSize[item.category]}
                    </CardText>
                    <CardText className="txt-more-info mb-4">
                      {/* <i className="fa-solid fa-calendar-days"></i> */}
                      <i
                        className="fa fa-user-o pe-2"
                        aria-hidden="true"
                      ></i>{" "}
                      {item.createdAt}
                    </CardText>
                    <Row className="px-1">
                      <Col className="px-2">
                        <Button
                          className="btn-delete-car"
                          onClick={() => {
                            toggle();
                            setCarId(item.id);
                          }}
                        >
                          <i
                            className="fa fa-trash pe-2"
                            aria-hidden="true"
                          ></i>{" "}
                          Delete
                        </Button>
                      </Col>
                      <Col className="px-2">
                        <Button
                          className="btn-edit-car"
                          onClick={() => {
                            // toggle();
                            navigate(`/edit-car/${item.id}`);
                            // setCarId(item.id);
                          }}
                        >
                          <i
                            className="fa fa-pencil-square-o pe-2"
                            aria-hidden="true"
                          ></i>{" "}
                          Edit
                        </Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Segment>

      <Modal isOpen={modal} toggle={toggle} {...props}>
        <ModalHeader toggle={toggle}>Hapus Data Mobil</ModalHeader>
        <ModalBody>Apakah anda yakin ?</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => handleDeleteCarData(carID)}>
            Ya
          </Button>
          <Button color="secondary" onClick={toggle}>
            Tidak
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default CarList;
