import React, { useState, useEffect } from 'react';
import {
  SearchOutlined,
  MoneyCollectOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  AndroidOutlined,
  DashboardOutlined,
  HeatMapOutlined,
  ContactsOutlined,
  UserOutlined,
  DollarOutlined,
  QuestionCircleOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Input, Card, Row, Col, Avatar, Table } from 'antd';
import { BarChart, Bar, XAxis, Tooltip, PieChart, Pie } from 'recharts';
import './App.css';
const { Sider, Content } = Layout;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  // Add more columns as needed
];

const dataS = [
  
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const setLayoutHeight = () => {
    const sider = document.querySelector('.ant-layout-sider');
    const content = document.querySelector('.ant-layout-content');
    if (sider && content) {
      const windowHeight = window.innerHeight;
      sider.style.height = `${windowHeight}px`;
      content.style.height = `${windowHeight}px`;
    }
  };

  const calculateAvatarSize = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 576) {
      return 32;
    } else if (screenWidth < 768) {
      return 48;
    } else if (screenWidth < 992) {
      return 64;
    } else {
      return 80.5;
    }
  };

  useEffect(() => {
    setLayoutHeight();
    window.addEventListener('resize', setLayoutHeight);

    // Add CSS to make the page non-scrollable
    document.querySelector('html').style.overflow = 'hidden';
    document.querySelector('body').style.overflow = 'hidden';

    return () => {
      window.removeEventListener('resize', setLayoutHeight);

      // Clean up and re-enable scrolling
      document.querySelector('html').style.overflow = 'auto';
      document.querySelector('body').style.overflow = 'auto';
    };
  }, []);

  const RoundedBar = ({ x, y, width, height, fill }) => (
    <g>
      <rect x={x} y={y} width={width} height={height} rx={5} ry={5} fill={fill} />
    </g>
  );

  const data = [
    {
      month: 'Jan',
      value: 20000, // Example data for January, replace with your actual data
    },
    {
      month: 'Feb',
      value: 30000, // Example data for February, replace with your actual data
    },
    {
      month: 'Mar',
      value: 40000,
    },
    {
      month: 'Apr',
      value: 36000,
    },
    {
      month: 'May',
      value: 43000,
    },
    {
      month: 'Jun',
      value: 41000,
    },
    {
      month: 'Jul',
      value: 39000,
    },
    {
      month: 'Aug',
      value: 44000,
    },
    {
      month: 'Sep',
      value: 42000,
    },
    {
      month: 'Oct',
      value: 46000,
    },
    {
      month: 'Nov',
      value: 48000,
    },
    {
      month: 'Dec',
      value: 50000,
    },
  ];

  const pieData = [
    { name: 'Category A', value: 30, outerRadius: 80, innerRadius: 60, fill: '#8884d8' }, // Blue
    { name: 'Category B', value: 40, outerRadius: 100, innerRadius: 80, fill: '#82ca9d' }, // Green
    { name: 'Category C', value: 30, outerRadius: 120, innerRadius: 100, fill: '#ffc658' }, // Yellow
  ];

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <div className="sider-header" style={{ margin: '20px' }}>
          <div className="company-info" style={{ display: 'flex', alignItems: 'center' }}>
            <span className="company-icon" style={{ marginRight: '10px' }}>
              <AndroidOutlined style={{ fontSize: '24px', color: 'white' }} />
            </span>
            <span className="company-name" style={{ color: 'white', fontFamily: 'sans-serif', fontSize: '16px' }}>
              Dashboard
            </span>
          </div>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<DashboardOutlined style={{ fontSize: '24px' }}/>}>Dashboard</Menu.Item>
          <Menu.Item key="2" icon={<HeatMapOutlined />}>
            <span>Product<RightOutlined style={{ marginLeft: '65px' }} /></span>
          </Menu.Item>
          <Menu.Item key="3" icon={<ContactsOutlined />}>
            <span>Customers<RightOutlined style={{ marginLeft: '45px' }} /></span>
          </Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>
            <span>Income<RightOutlined style={{ marginLeft: '65px' }} /></span>
          </Menu.Item>
          <Menu.Item key="5" icon={<DollarOutlined />}>
            <span>Promote<RightOutlined style={{ marginLeft: '55px' }} /></span>
          </Menu.Item>
          <Menu.Item key="6" icon={<QuestionCircleOutlined />}>
            <span>Help<RightOutlined style={{ marginLeft: '80px' }} /></span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Content
        style={{
          backgroundColor: 'rgb(240, 240, 240)',
          padding: '20px',
          paddingRight: '30px',
          paddingLeft: '30px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex' }}>
            <p style={{ fontFamily: 'sans-serif', fontWeight: 'bold' }}>
              Hello Shahrukh👋
            </p>
          </div>
          <Input
            placeholder="Search..."
            prefix={<SearchOutlined />}
            style={{
              width: '150px',
              height: '25px',
              marginTop: '10px',
            }}
          />
        </div>
        <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
          <Col span={6}>
            <Card style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex' }}>
                <Avatar
                  size={calculateAvatarSize()}
                  style={{ backgroundColor: '#89d79e' }}
                  icon={<MoneyCollectOutlined style={{ color: 'green' }} />}
                />
                <div
                  style={{
                    display: 'flow',
                    lineHeight: '3px',
                    marginLeft: '8px',
                  }}
                >
                  <p
                    style={{
                      color: 'gray',
                      fontFamily: 'sans-serif',
                      fontSize: '12px',
                    }}
                  >
                    Earning
                  </p>
                  <p style={{ fontSize: '22px', fontWeight: 'bold' }}>$198k</p>
                  <p
                    style={{
                      fontSize: '12px',
                      fontFamily: 'sans-serif',
                    }}
                  >
                    <ArrowUpOutlined
                      style={{ fontSize: '12px', color: 'green' }}
                    />
                    <span style={{ color: 'green', fontSize: '12px' }}>
                      11%{' '}
                    </span>
                    this month
                  </p>
                </div>
              </div>
            </Card>
          </Col>
          <Col span={6}>
            <Card style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex' }}>
                <Avatar
                  size={calculateAvatarSize()}
                  style={{ backgroundColor: '#e7a5e1' }}
                  icon={<MoneyCollectOutlined style={{ color: 'purple' }} />}
                />
                <div
                  style={{
                    display: 'flow',
                    lineHeight: '3px',
                    marginLeft: '8px',
                  }}
                >
                  <p
                    style={{
                      color: 'gray',
                      fontFamily: 'sans-serif',
                      fontSize: '12px',
                    }}
                  >
                    Orders
                  </p>
                  <p style={{ fontSize: '22px', fontWeight: 'bold' }}>1,045</p>
                  <p
                    style={{
                      fontSize: '12px',
                      fontFamily: 'sans-serif',
                    }}
                  >
                    <ArrowDownOutlined
                      style={{ fontSize: '12px', color: 'red' }}
                    />
                    <span style={{ color: 'red', fontSize: '12px' }}>
                      8%{' '}
                    </span>
                    this month
                  </p>
                </div>
              </div>
            </Card>
          </Col>
          <Col span={6}>
            <Card style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex' }}>
                <Avatar
                  size={calculateAvatarSize()}
                  style={{ backgroundColor: '#ffc658' }}
                  icon={<MoneyCollectOutlined style={{ color: 'orange' }} />}
                />
                <div
                  style={{
                    display: 'flow',
                    lineHeight: '3px',
                    marginLeft: '8px',
                  }}
                >
                  <p
                    style={{
                      color: 'gray',
                      fontFamily: 'sans-serif',
                      fontSize: '12px',
                    }}
                  >
                    Visitors
                  </p>
                  <p style={{ fontSize: '22px', fontWeight: 'bold' }}>11k</p>
                  <p
                    style={{
                      fontSize: '12px',
                      fontFamily: 'sans-serif',
                    }}
                  >
                    <ArrowUpOutlined
                      style={{ fontSize: '12px', color: 'green' }}
                    />
                    <span style={{ color: 'green', fontSize: '12px' }}>
                      15%{' '}
                    </span>
                    this month
                  </p>
                </div>
              </div>
            </Card>
          </Col>
          <Col span={6}>
            <Card style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex' }}>
                <Avatar
                  size={calculateAvatarSize()}
                  style={{ backgroundColor: '#9b8bf1' }}
                  icon={<MoneyCollectOutlined style={{ color: 'indigo' }} />}
                />
                <div
                  style={{
                    display: 'flow',
                    lineHeight: '3px',
                    marginLeft: '8px',
                  }}
                >
                  <p
                    style={{
                      color: 'gray',
                      fontFamily: 'sans-serif',
                      fontSize: '12px',
                    }}
                  >
                    Cost
                  </p>
                  <p style={{ fontSize: '22px', fontWeight: 'bold' }}>$2.1k</p>
                  <p
                    style={{
                      fontSize: '12px',
                      fontFamily: 'sans-serif',
                    }}
                  >
                    <ArrowUpOutlined
                      style={{ fontSize: '12px', color: 'green' }}
                    />
                    <span style={{ color: 'green', fontSize: '12px' }}>
                      5%{' '}
                    </span>
                    this month
                  </p>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
          <Col span={16}>
            <Card>
              <BarChart width={550} height={200} data={data}>
                <XAxis dataKey="month" axisLine={false} />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" shape={<RoundedBar />} />
              </BarChart>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <PieChart width={300} height={200}>
                <Pie
                  dataKey="value"
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  fill="#8884d8"
                  label={null}
                />
              </PieChart>
            </Card>
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
          <Col span={24}>
            <Card height={50}>
              <Table columns={columns} dataSource={dataS} />
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default App;