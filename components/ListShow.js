import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css'; 
import { List, Typography, Button, Search , Input,InputNumber, Space, Modal, Row, Col,Form } from 'antd';
import { Pagination } from 'antd';
import axios from "axios";

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 8,
    },
  };

const ListShow = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [activeElement, setActiveElement] = useState(0);
    const [data, setData] = useState([]);
    const [demodata, setDemoData] = useState([{a : '1'}]);
    // const [form] = Form.useForm();

    useEffect(async() => {

        const res = await axios.get(`http://localhost:8000/user/`);

        setData(res.data.data);

    },[]);


    const { Search } = Input;
    const onSearch = value => console.log(value);

    const showModal = (key) => {
        setActiveElement(key)
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const showDelModal = (key) => {
        setActiveElement(key)
        setIsDeleteModalVisible(true)
      };
    
    const verifyDelModal = async() => {

        const dataSet = data && data.filter((el)=> 
            el.id !== activeElement
        )
        const res = await axios.delete(`http://localhost:8000/user/${activeElement}`);

        if(res){

            setData(dataSet);

            setIsDeleteModalVisible(false);

        }

        
    };

    const hideDelModal = () => {
        setIsDeleteModalVisible(false)
    };

    const onFinish = async(values) => {

       
     console.log('Success:', values);
     const res = await axios.post(`http://localhost:8000/user/`,{
         name: values.name,
         age: values.age
     });

     if(res){
        const newAddedData = [{
            name: values.name,
            age: values.age
        }]
    
         const newData =  data.concat(newAddedData);
    
        //  form.resetFields();
    
         setData(newData);
         
     }

    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

   

    return (
        <>

            <Row>
                <Col span={12}>
                    <List
                        header={<div><b>ALL USERS </b>  <Search placeholder="search..." onSearch={onSearch} style={{ width: 200 }} /> </div>}
                        footer={<div><Pagination defaultCurrent={1} total={45} />,</div>}
                        bordered
                        dataSource={data}
                        renderItem={(item, key) => (

                            <List.Item key>
                                <Typography.Text mark>{key+1})</Typography.Text> Name: {item.name} <br/>Age:{ item.age}
                                <div>
                                    <Button type="primary">EDIT</Button>
                                    <Button type="danger" iconn="delete"  onClick={() => showDelModal(item.id)} >DELETE</Button>
                                    <Button type="default" onClick={(e) => showModal(key)}>MORE</Button>
                                </div>
                            </List.Item>
                                        
                        )}
                    />
                </Col>
                <Col span={12}>
                <List
                        header={<div><b>CREATE USER </b> </div>}
                        bordered
                        dataSource={demodata}
                        renderItem={(item, key) => (

                            <Form
                            {...layout}
                            name="basic"
                            initialValues={{
                              remember: true,
                            }}


                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                          >
                            <Form.Item
                              label="Name"
                              name="name"
                              rules={[
                                {
                                  required: true,
                                  message: 'Please user name!',
                                },
                              ]}
                            >
                              <Input />
                            </Form.Item>
                      
                            <Form.Item
                              label="Age"
                              name="age"
                              rules={[
                                {
                                  required: true,
                                  message: 'Please input age!',
                                },
                              ]}
                            >
                              <InputNumber />
                            </Form.Item>
                      
                      
                            <Form.Item {...tailLayout}>
                              <Button type="primary" htmlType="submit">
                                CREATE
                              </Button>
                            </Form.Item>
                          </Form>
                                        
                        )}
                    />
                </Col>
            </Row>

        
            <Modal title="MORE DETAILS" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p><b>NAME</b>: {data && data[activeElement]?.name}</p>
                <p><b>AGE</b>: {data && data[activeElement]?.age}</p>
                <p><b>CREATED AT</b>: {data && data[activeElement]?.created_at}</p>
            </Modal>

            <Modal
                title="Are you sure you want to delete this user?"
                visible={isDeleteModalVisible}
                onOk={verifyDelModal}
                onCancel={hideDelModal}
                okText="YES"
                cancelText="CANCEL"
                >
            </Modal>

    
      </>
    

    )

}

export default ListShow;

