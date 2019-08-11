import React from 'react';
import { List, Avatar, Icon } from 'antd';



const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

const Branches = (props) => {
    return (

        <List
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 3,
            }}
            dataSource={props.data}
        
            renderItem={item => (
                <List.Item
                    key={item.title}
                    actions={[
                        <IconText type="star-o" text="156" />,
                        <IconText type="like-o" text="156" />,
                        <IconText type="message" text="2" />,
                    ]}
                   
                >
                    <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={<a href={item.id}>{item.branch_name}</a>}
                        description={item.branch_location}
                    />
                    {item.content}
                </List.Item>
            )}
        />

    )
}

export default Branches;
