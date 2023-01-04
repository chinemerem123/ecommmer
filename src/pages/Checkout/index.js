import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Button,
  Line,
  Input,
  SelectBox,
} from "components";
import Header1 from "components/Header1";
import Footer1 from "components/Footer1";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const navigate = useNavigate();

  function handleNavigate6() {
    navigate("/completed");
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-poppins items-center justify-start mx-[auto] w-[100%]">
        <Column className="flex flex-col items-center justify-start w-[100%]">
          <Header1 className="w-[100%]" />
          <Column className="flex flex-col justify-start sm:mt-[13px] md:mt-[18px] mt-[35px] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[360px] md:ml-[74px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Text
                className="font-medium mt-[1px] text-gray_500 w-[auto]"
                variant="body1"
              >
                Home
              </Text>
              <Text
                className="font-medium ml-[16px] sm:ml-[6px] md:ml-[8px] mt-[1px] text-bluegray_100 w-[auto]"
                variant="body1"
              >
                {">"}
              </Text>
              <Text
                className="font-medium ml-[16px] sm:ml-[6px] md:ml-[8px] mt-[1px] text-gray_500 w-[auto]"
                variant="body1"
              >
                Shopping Cart
              </Text>
              <Text
                className="font-medium ml-[16px] sm:ml-[6px] md:ml-[8px] mt-[1px] text-bluegray_100 w-[auto]"
                variant="body1"
              >
                {">"}
              </Text>
              <Text
                className="font-medium ml-[16px] sm:ml-[6px] md:ml-[8px] text-gray_800 w-[auto]"
                variant="body1"
              >
                Checkout
              </Text>
            </Row>
            <Text
              className="font-bold sm:ml-[347px] md:ml-[449px] ml-[870px] sm:mt-[19px] md:mt-[25px] mt-[49px] text-gray_800 w-[auto]"
              as="h5"
              variant="h5"
            >
              Checkout
            </Text>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1604px] md:ml-[74px] ml-[auto] mr-[auto] mt-[109px] sm:mt-[43px] md:mt-[56px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[16%]">
                <Text
                  className="border-2 border-gray_800 border-solid flex font-medium items-center md:px-[11px] sm:px-[15px] px-[23px] rounded-radius50 text-gray_800 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  1
                </Text>
                <Text
                  className="font-medium md:ml-[12px] ml-[24px] sm:ml-[9px] text-gray_800 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Shopping Cart
                </Text>
              </Row>
              <Line className="bg-gray_800 h-[2px] md:ml-[10px] ml-[21px] sm:ml-[8px] sm:my-[10px] md:my-[13px] my-[27px] w-[24%]" />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:ml-[29px] ml-[57px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[13%]">
                <Text
                  className="border-2 border-gray_800 border-solid flex font-medium items-center md:px-[10px] sm:px-[15px] px-[21px] rounded-radius50 text-gray_800 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  2
                </Text>
                <Text
                  className="font-medium md:ml-[12px] ml-[24px] sm:ml-[9px] text-gray_800 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Checkout
                </Text>
              </Row>
              <Line className="bg-bluegray_100 h-[2px] sm:ml-[22px] md:ml-[28px] ml-[56px] sm:my-[10px] md:my-[13px] my-[27px] w-[24%]" />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[16px] ml-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[14%]">
                <Text
                  className="border-2 border-bluegray_100 border-solid flex font-medium items-center md:px-[10px] sm:px-[15px] px-[20px] rounded-radius50 text-bluegray_100 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  3
                </Text>
                <Text
                  className="font-medium md:ml-[12px] ml-[24px] sm:ml-[9px] text-bluegray_100 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Completed
                </Text>
              </Row>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between max-w-[1632px] md:ml-[74px] ml-[auto] mr-[auto] sm:mt-[31px] md:mt-[41px] mt-[80px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Column className="flex flex-col items-center sm:mx-[0] sm:pt-[2px] md:pt-[3px] pt-[6px] sm:px-[0] sm:w-[100%] w-[41%]">
                <Column className="flex flex-col justify-start w-[100%]">
                  <Column className="flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[14%]">
                    <Text
                      className="font-medium text-gray_800 w-[auto]"
                      variant="body1"
                    >
                      Buyer Info
                    </Text>
                  </Column>
                  <Line className="bg-bluegray_100 h-[1px] sm:mt-[12px] md:mt-[16px] mt-[32px] w-[100%]" />
                  <Column className="flex flex-col justify-start sm:mt-[13px] md:mt-[18px] mt-[35px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_500 w-[auto]"
                      variant="body1"
                    >
                      Full Name
                    </Text>
                    <Input
                      className="w-[100%]"
                      wrapClassName="flex h-[60px] md:mt-[10px] mt-[20px] sm:mt-[7px] w-[100%]"
                      name="form"
                      placeholder=""
                      variant="OutlineBluegray100"
                    ></Input>
                  </Column>
                  <Column className="flex flex-col justify-start sm:mt-[14px] md:mt-[18px] mt-[36px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_500 w-[auto]"
                      variant="body1"
                    >
                      Address
                    </Text>
                    <Input
                      className="w-[100%]"
                      wrapClassName="flex h-[60px] md:mt-[10px] mt-[20px] sm:mt-[7px] w-[100%]"
                      name="form One"
                      placeholder=""
                      variant="OutlineBluegray100"
                    ></Input>
                  </Column>
                  <Column className="flex flex-col justify-start sm:mt-[14px] md:mt-[18px] mt-[36px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_500 w-[auto]"
                      variant="body1"
                    >
                      Contact
                    </Text>
                    <Input
                      className="w-[100%]"
                      wrapClassName="flex h-[60px] md:mt-[10px] mt-[20px] sm:mt-[7px] w-[100%]"
                      name="form Two"
                      placeholder=""
                      variant="OutlineBluegray100"
                    ></Input>
                  </Column>
                  <Column className="flex flex-col justify-start sm:mt-[15px] md:mt-[19px] mt-[38px] sm:px-[0] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_500 w-[auto]"
                      variant="body1"
                    >
                      City
                    </Text>
                    <Input
                      className="w-[100%]"
                      wrapClassName="flex h-[60px] md:mt-[8px] mt-[16px] sm:mt-[6px] w-[100%]"
                      name="form Three"
                      placeholder=""
                      variant="OutlineBluegray100"
                    ></Input>
                  </Column>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[14px] md:mt-[18px] mt-[36px] sm:px-[0] w-[100%]">
                    <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[59%]">
                      <Text
                        className="font-normal not-italic text-gray_500 w-[auto]"
                        variant="body1"
                      >
                        State
                      </Text>
                      <SelectBox
                        className="font-normal md:mt-[10px] mt-[20px] sm:mt-[7px] not-italic text-[18px] text-gray_500 w-[100%]"
                        placeholderClassName="text-gray_500"
                        name="form Four"
                        placeholder="Select State"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown_gray_500.svg"
                            className="w-[24px] h-[24px] mr-[32px] sm:mr-[12px] sm:h-[10px] sm:w-[9px] md:mr-[16px] md:h-[13px] md:w-[12px] max-w-[100%]"
                            alt="arrow_down"
                          />
                        }
                        variant="OutlineBluegray100"
                      ></SelectBox>
                    </Column>
                    <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[38%]">
                      <Text
                        className="font-normal not-italic text-gray_500 w-[auto]"
                        variant="body1"
                      >
                        Zip Code
                      </Text>
                      <Input
                        className="w-[100%]"
                        wrapClassName="flex h-[60px] md:mt-[8px] mt-[16px] sm:mt-[6px] w-[100%]"
                        name="form Five"
                        placeholder=""
                        variant="OutlineBluegray100"
                      ></Input>
                    </Column>
                  </Row>
                </Column>
              </Column>
              <Column className="flex flex-col items-center sm:mx-[0] sm:pt-[2px] md:pt-[3px] pt-[6px] sm:px-[0] sm:w-[100%] w-[50%]">
                <Column className="flex flex-col justify-start w-[100%]">
                  <Column className="flex flex-col justify-start w-[100%]">
                    <Text
                      className="font-medium text-gray_800 w-[auto]"
                      variant="body1"
                    >
                      Payment Method
                    </Text>
                    <Line className="bg-bluegray_100 h-[1px] sm:mt-[12px] md:mt-[16px] mt-[32px] w-[100%]" />
                  </Column>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[12px] md:mt-[16px] mt-[31px] w-[100%]">
                    <Button
                      className="flex items-center justify-center min-w-[31%] text-center w-[max-content]"
                      leftIcon={
                        <Img
                          src="images/img_computer.svg"
                          className="mr-[16px] sm:mr-[6px] md:mr-[8px] text-center"
                          alt="computer"
                        />
                      }
                      size="2xl"
                      variant="OutlineBluegray100"
                    >
                      <div className="bg-transparent cursor-pointer font-normal not-italic text-[18px] text-gray_800">
                        Credit Card
                      </div>
                    </Button>
                    <Button
                      className="flex items-center justify-center min-w-[31%] text-center w-[max-content]"
                      leftIcon={
                        <div className="w-[40px] h-[40px] mr-[3px] sm:h-[16px] sm:w-[15px] md:h-[21px] md:w-[20px] bg-gray_800 text-center flex justify-center items-center">
                          <Img
                            src="images/img_ticket.svg"
                            className="text-center"
                            alt="ticket"
                          />
                        </div>
                      }
                      size="2xl"
                      variant="OutlineBluegray100_1"
                    >
                      <div className="bg-transparent cursor-pointer font-normal not-italic text-[18px] text-white_A700">
                        Bank Transfer
                      </div>
                    </Button>
                    <Button
                      className="flex items-center justify-center min-w-[31%] text-center w-[max-content]"
                      leftIcon={
                        <Img
                          src="images/img_reply.svg"
                          className="mr-[16px] sm:mr-[6px] md:mr-[8px] text-center"
                          alt="reply"
                        />
                      }
                      size="2xl"
                      variant="OutlineBluegray100"
                    >
                      <div className="bg-transparent cursor-pointer font-normal not-italic text-[18px] text-gray_800">
                        Paypal
                      </div>
                    </Button>
                  </Row>
                  <Column className="flex flex-col justify-start sm:mt-[14px] md:mt-[18px] mt-[36px] w-[100%]">
                    <Text
                      className="font-normal not-italic text-gray_500 w-[auto]"
                      variant="body1"
                    >
                      Name on Card
                    </Text>
                    <Input
                      className="w-[100%]"
                      wrapClassName="flex h-[60px] md:mt-[10px] mt-[20px] sm:mt-[7px] w-[100%]"
                      name="form Six"
                      placeholder=""
                      variant="OutlineBluegray100"
                    ></Input>
                  </Column>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[14px] md:mt-[18px] mt-[36px] w-[100%]">
                    <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                      <Text
                        className="font-normal not-italic text-gray_500 w-[auto]"
                        variant="body1"
                      >
                        Card Number
                      </Text>
                      <Input
                        className="w-[100%]"
                        wrapClassName="flex h-[60px] md:mt-[10px] mt-[20px] sm:mt-[7px] w-[100%]"
                        name="form Seven"
                        placeholder=""
                        variant="OutlineBluegray100"
                      ></Input>
                    </Column>
                    <Column className="flex flex-col mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[31%]">
                      <Text
                        className="font-normal not-italic text-gray_500 w-[auto]"
                        variant="body1"
                      >
                        CVV
                      </Text>
                      <Input
                        className="w-[100%]"
                        wrapClassName="flex h-[60px] md:mt-[10px] mt-[20px] sm:mt-[7px] w-[100%]"
                        name="RectangleTwentyFive"
                        placeholder=""
                        variant="OutlineBluegray100"
                      ></Input>
                    </Column>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[14px] md:mt-[18px] mt-[36px] w-[100%]">
                    <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                      <Text
                        className="font-normal not-italic text-gray_500 w-[auto]"
                        variant="body1"
                      >
                        Month
                      </Text>
                      <SelectBox
                        className="font-normal md:mt-[10px] mt-[20px] sm:mt-[7px] not-italic text-[18px] text-gray_500 w-[100%]"
                        placeholderClassName="text-gray_500"
                        name="Group1701"
                        placeholder="Select Month"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown_gray_500.svg"
                            className="w-[24px] h-[24px] mr-[32px] sm:mr-[12px] sm:h-[10px] sm:w-[9px] md:mr-[16px] md:h-[13px] md:w-[12px] max-w-[100%]"
                            alt="arrow_down"
                          />
                        }
                        variant="OutlineBluegray100"
                      ></SelectBox>
                    </Column>
                    <Column className="flex flex-col mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
                      <Text
                        className="font-normal not-italic text-gray_500 w-[auto]"
                        variant="body1"
                      >
                        Year
                      </Text>
                      <SelectBox
                        className="font-normal md:mt-[10px] mt-[20px] sm:mt-[7px] not-italic text-[18px] text-gray_500 w-[100%]"
                        placeholderClassName="text-gray_500"
                        name="Group1702"
                        placeholder="Select Year"
                        isSearchable={false}
                        isMulti={false}
                        indicator={
                          <Img
                            src="images/img_arrowdown_gray_500.svg"
                            className="w-[24px] h-[24px] mr-[32px] sm:mr-[12px] sm:h-[10px] sm:w-[9px] md:mr-[16px] md:h-[13px] md:w-[12px] max-w-[100%]"
                            alt="arrow_down"
                          />
                        }
                        variant="OutlineBluegray100"
                      ></SelectBox>
                    </Column>
                  </Row>
                  <Button
                    className="common-pointer cursor-pointer font-medium min-w-[31%] sm:ml-[221px] md:ml-[286px] ml-[555px] sm:mt-[29px] md:mt-[38px] mt-[75px] text-[18px] text-center text-white_A700 w-[max-content]"
                    onClick={handleNavigate6}
                    size="lg"
                    variant="FillGray800"
                  >
                    Checkout
                  </Button>
                </Column>
              </Column>
            </Row>
            <Footer1 className="bg-gray_800 mt-[100px] sm:mt-[39px] md:mt-[51px] w-[100%]" />
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default CheckoutPage;
