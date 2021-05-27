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
    const [total, settotal] = useState(0);
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [activeElement, setActiveElement] = useState(0);
    const [id, setActiveId] = useState(0);
    
    const [data, setData] = useState([]);
    const [demodata, setDemoData] = useState([{a : '1'}]);
  
    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);

    const { Search } = Input;
    
    const [form] = Form.useForm();

    useEffect(async() => {

        const res = await axios.get(`http://localhost:8000/user/?page=1`);

        setData(res.data.data.rows);
        settotal(res.data.data.total_rows);

    },[]);

    const onSearch = async(value) => {
      console.log(value);

      const res = await axios.get(`http://localhost:8000/user/?keyword=${value}`);

        console.log(res.data.data,"dfdf")

        setData(res.data.data.rows);
        settotal(res.data.data.total_rows);
    }

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
            age: values.age,
            id: res.data.id
        }]
        
         const newData =  newAddedData.concat(data);

         const size= 10;

         const limitedData = newData.slice(0, size)
    
         form.resetFields();
    
         setData(limitedData);
         settotal(total+1);
         
     }

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const showEditModal = (key, id) => {
      setActiveElement(key)
      setActiveId(id)
      setVisible(true);
    };
  
    const handleEditOk = async(values) => {
      

      console.log(values,"here is values")

       const res = await axios.put(`http://localhost:8000/user/${id}`,{
          name: values.name,
          age: values.age
      });

      if(res){
        data[activeElement].name =values.name;
        data[activeElement].age =values.age;

        setData(data)

        setVisible(false);
      }

    };
  
    const handleEditCancel = () => {
      console.log('Clicked cancel button');
      setVisible(false);
    };

    const onChange = async(pageNumber) => {
      console.log('Page: ', pageNumber);

      const res = await axios.get(`http://localhost:8000/user/?page=${pageNumber}`);

      setData(res.data.data.rows);
      settotal(res.data.data.total_rows);

    }
    

    return (
        <>

            <Row>
                <Col span={12}>
                    <List
                        header={<div><b>ALL USERS ({total}) </b>  <Search placeholder="search..." onSearch={onSearch} style={{ width: 200 }} /> </div>}
                        footer={<div><Pagination defaultCurrent={1} total={total} onChange={onChange}/></div>}
                        bordered
                        dataSource={data}
                        renderItem={(item, key) => (

                            <List.Item key>
                                <Typography.Text mark>{key+1})</Typography.Text> Name: {item.name} <br/>Age:{ item.age}
                                <div>
                                    <Button type="primary" onClick={() =>showEditModal(key, item.id)}>EDIT</Button>
                                    <Button type="danger" iconn="delete"  onClick={() => showDelModal(item.id)} >DELETE</Button>
                                    <Button type="default" onClick={(e) => showModal(key)}>MORE</Button>
                                </div>
                            </List.Item>
                                        
                        )}
                    />
                </Col>
                <Col span={12}>
                <List
                        header={<div><b>CREATE USER</b> </div>}
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

            <Modal
              title="Edit User Information"
              visible={visible}
              onOk={handleEditOk}
              cancelButtonProps={{ style: { display: 'none' } }}
              okButtonProps={{ style: { display: 'none' } }}
              confirmLoading={confirmLoading}
              onCancel={handleEditCancel}
            >
              <Form
                {...layout}
                name="basic"
                form={form}
                initialValues={{
                  name:`${data[activeElement]?.name || ""}`,
                  age:data[activeElement]?.age || 0
              
                }}
                onFinish={handleEditOk}
                onFinishFailed={onFinishFailed}
              >
                {data[activeElement]?.name}
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
                    UPDATE
                  </Button>
                </Form.Item>
          
              </Form>
            </Modal>
    
      </>
    

    )

}

export default ListShow;

