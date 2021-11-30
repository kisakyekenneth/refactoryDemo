import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import ListHeader from '../../components/ListHeader';
import ContactFilter from '../contacts/ContactFilter';
import { IContactsFilter } from '../contacts/types';
import { useSelector } from 'react-redux';
import { ICrmState } from '../../data/contacts/reducer';
import SendEmail from './SendEmail';
import Chatlib from '../chatapp/Chatlib';

const MailChat = () => {
  const { data, loading }: ICrmState = useSelector((state: any) => state.crm);
  const [filter, setFilter] = useState<IContactsFilter>({
    limit: 200,
  });
  return (
    <Layout>
      {' '}
      <ListHeader
        title="Chat"
        onFilter={setFilter}
        filter={filter}
        filterComponent={<ContactFilter onFilter={setFilter} />}
        loading={loading}
        buttons={
          <>
            <SendEmail />
          </>
        }
      />
      <Chatlib/>
      {/* <p> MORE COMING SOON </p> */}
    </Layout>
  );
};

export default MailChat;
