import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css'; 
import { List, Typography, Button, Search , Input, Space, Modal } from 'antd';
import { Pagination } from 'antd';
import axios from "axios";

const ListShow = (props) => {

    

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [activeElement, setActiveElement] = useState(0);
    const [data, setData] = useState([]);

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

    return (
        <>

        <List
            header={<div><b>ALL USERS </b>  <Search placeholder="search..." onSearch={onSearch} style={{ width: 200 }} />  <Button type="primary">CREATE</Button></div>}
            footer={<div><Pagination defaultCurrent={1} total={45} />,</div>}
            bordered
            dataSource={data}
            renderItem={(item, key) => (
                <List.Item>
                    <Typography.Text mark>{key+1})</Typography.Text> Name: {item.name} <br/>Age:{ item.age}
                    <div>
                        <Button type="primary">EDIT</Button>
                        <Button type="danger" iconn="delete">DELETE</Button>
                        <Button type="default" onClick={(e) => showModal(key)}>MORE</Button>
                    </div>
                
                </List.Item>
            )}
        />
        <Modal title="MORE DETAILS" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p><b>NAME</b>: {data && data[activeElement]?.name}</p>
        <p><b>AGE</b>: {data && data[activeElement]?.age}</p>
        <p><b>CREATED AT</b>: {data && data[activeElement]?.created_at}</p>
      </Modal>
      </>
    

    )

}
    

export default ListShow;

