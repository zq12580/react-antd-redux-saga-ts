// 布局
import React from 'react'
import CrmHeader from "../crmHeader";
import CrmTab from "../crmTab";
import { Layout } from 'antd';

const CrmLayout = () => {
  return (
    <Layout>
      <Layout.Header>
        <CrmHeader />
      </Layout.Header>
      <Layout.Content>
        <CrmTab />
      </Layout.Content>
    </Layout>
  )
}
export default CrmLayout