import React from 'react';
import { Item, BlockItem, BtnDelete, SpanName } from './ContactListStyled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from 'redux/contactSlice';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contact = useSelector(state => state.root.contacts);
  const filter = useSelector(state => state.root.filters);
  console.log(contact);
  console.log(filter);
  return (
    <ul>
      {contact
        .filter(el => el.textName.toLowerCase().includes(filter))
        .map(el => (
          <Item key={el.id}>
            <BlockItem>
              <div>
                <SpanName>{el.textName}: </SpanName>
                <SpanName>{el.textNumber}</SpanName>
              </div>
              <BtnDelete
                type="click"
                name={el.id}
                onClick={() => dispatch(deleteTask(el.id))}
              >
                Delete
              </BtnDelete>
            </BlockItem>
          </Item>
        ))}
    </ul>
  );
};

export default ContactsList;
