import React from 'react'
import { FiBarChart, FiBookmark, FiCalendar, FiExternalLink, FiFilter, FiHome, FiMapPin, FiPlus, FiPrinter, FiSearch, FiSettings, FiTag, FiToggleRight } from 'react-icons/fi'
import styled from 'styled-components'
import Badge from '../../components/Badge/Badge'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import Button from '../../components/Button/Button'
import Dropdown from '../../components/Dropdown/Dropdown'
import Header from '../../components/Header/Header'
import Input from '../../components/Input/Input'
import List from '../../components/List/List'
import Tab from '../../components/Tab/Tab'
import Table from '../../components/Table/Table'
import TabPanel from '../../components/TabPanel/TabPanel'
import Tabs from '../../components/Tabs/Tabs'

const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 12px 24px 12px 12px;
  position: static;
  height: 80px;
  border-radius: 24px;
  background: #F9F9F9;

  @media (max-width: 768px) {
    display: none;
  }
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;

  h3 {
    flex: 1;
    margin-top: 17px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  button {
    margin-left: 10px;
  }
`

const FilterActions = styled(ButtonGroup)`
  flex: 1;
  justify-content: flex-end;
`

const ResponsiveBreadCrumbs = styled(Breadcrumbs)`
  @media (max-width: 768px) {
    display: none;
  }
`

const ResponsiveTable = styled(Table)`
  @media (max-width: 768px) {
    display: none;
  }
`

const ResponsiveList = styled(List)`
  display: none;

  @media (max-width: 768px) {
    display: none;
  }
`

const FilterContainerMobile = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  justify-content: flex-start;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 10px;
  }
`
const data = [
  { id: '998-5878', color: 'red', product: 'Brand New Bike, Local buyer only', customer: 'Rafael Chua', status: 'Rejected', deliveryStatus: 'Received', createdDate: 'Mar 13, 2021 08:05AM', deadline: 'Jan 1, 2021', price: '$17.84' },
  { id: '623-4534', color: 'blue', product: 'Macbook Pro 16 inch (2021) For Sale', customer: 'Rafael Chua', status: 'In Route', deliveryStatus: 'In Route', createdDate: 'Mar 13, 2021 08:05AM', deadline: 'Jan 1, 2021', price: '$17.84' },
  { id: '395-9823', color: 'green', product: 'Lego Star Wars edition', customer: 'Rafael Chua', status: 'Completed', deliveryStatus: 'Completed', createdDate: 'Mar 13, 2021 08:05AM', deadline: 'Jan 1, 2021', price: '$17.84' },
  { id: '395-9821', color: 'orange', product: 'DJI Mavic Pro 2', customer: 'Rafael Chua', status: 'Pending', deliveryStatus: 'Pending', createdDate: 'Mar 13, 2021 08:05AM', deadline: 'Jan 1, 2021', price: '$17.84' },
  { id: '998-5877', color: 'red', product: 'Brand New Bike, Local buyer only', customer: 'Rafael Chua', status: 'Rejected', deliveryStatus: 'Received', createdDate: 'Mar 13, 2021 08:05AM', deadline: 'Jan 1, 2021', price: '$17.84' },
  { id: '623-4533', color: 'blue', product: 'Macbook Pro 16 inch (2021) For Sale', customer: 'Rafael Chua', status: 'In Route', deliveryStatus: 'In Route', createdDate: 'Mar 13, 2021 08:05AM', deadline: 'Jan 1, 2021', price: '$17.84' },
  { id: '395-9812', color: 'green', product: 'Lego Star Wars edition', customer: 'Rafael Chua', status: 'Completed', deliveryStatus: 'Completed', createdDate: 'Mar 13, 2021 08:05AM', deadline: 'Jan 1, 2021', price: '$17.84' },
  { id: '395-9844', color: 'orange', product: 'DJI Mavic Pro 2', customer: 'Rafael Chua', status: 'Pending', deliveryStatus: 'Pending', createdDate: 'Mar 13, 2021 08:05AM', deadline: 'Jan 1, 2021', price: '$17.84' },
  { id: '998-5828', color: 'red', product: 'Brand New Bike, Local buyer only', customer: 'Rafael Chua', status: 'Rejected', deliveryStatus: 'Received', createdDate: 'Mar 13, 2021 08:05AM', deadline: 'Jan 1, 2021', price: '$17.84' },
  { id: '623-4514', color: 'blue', product: 'Macbook Pro 16 inch (2021) For Sale', customer: 'Rafael Chua', status: 'In Route', deliveryStatus: 'In Route', createdDate: 'Mar 13, 2021 08:05AM', deadline: 'Jan 1, 2021', price: '$17.84' },
  { id: '395-9123', color: 'green', product: 'Lego Star Wars edition', customer: 'Rafael Chua', status: 'Completed', deliveryStatus: 'Completed', createdDate: 'Mar 13, 2021 08:05AM', deadline: 'Jan 1, 2021', price: '$17.84' },
  { id: '395-4421', color: 'orange', product: 'DJI Mavic Pro 2', customer: 'Rafael Chua', status: 'Pending', deliveryStatus: 'Pending', createdDate: 'Mar 13, 2021 08:05AM', deadline: 'Jan 1, 2021', price: '$17.84' },
];

const Orders = () => {
  return (
    <>
      <Header />
      <FilterContainerMobile>
        <Dropdown leftIcon={<FiFilter />} />
        <Dropdown leftIcon={<FiBarChart />} />
      </FilterContainerMobile>
      <ResponsiveBreadCrumbs items={[
        {
          icon: <FiHome />,
          text: 'Home page'
        },
        {
          text: 'Dashboard'
        },
        {
          text: 'Orders'
        }
      ]} active='Orders' />
      <TitleContainer>
        <h3>Orders</h3>
        <ButtonGroup>
          <Button text="Export" size="large" view="outline" color="blue" rightIcon={<FiExternalLink />} />
          <Button text="Print" size="large" view="outline" color="blue" leftIcon={<FiPrinter />} />
          <Button text="Create Order" size="large" view="" color="blue" leftIcon={<FiPlus />} />
        </ButtonGroup>
      </TitleContainer>
      <FilterContainer >
        <Input label="Search Orders" leftIcon={<FiSearch />} rightIcon={<FiToggleRight />} />
        <FilterActions>
          <Button text="Date Range" size="large" view="outline" color="blue" leftIcon={<FiCalendar />} />
          <Button text="Status" size="large" view="outline" color="blue" leftIcon={<FiTag />} />
          <Button text="Address" size="large" view="outline" color="blue" leftIcon={<FiMapPin />} />
          <Button text="Saved Filters" size="large" view="outline" color="blue" leftIcon={<FiBookmark />} />
          <Button disabled="disabled" text="More Filters" size="large" view="outline" color="blue" leftIcon={<FiSettings />} />
        </FilterActions>
      </FilterContainer>
      <Tabs>
        <TabPanel rightIcon={<Badge backgroundColor="#FF6E01" type="number" >88</Badge>} label="All orders">
          <ResponsiveTable />
          {/* <ResponsiveList items={data} />  */}
        </TabPanel>
        <TabPanel rightIcon={<Badge backgroundColor="var(--kuma-colors-gray-300)" type="number">61</Badge>} label="Pickups">asd</TabPanel>
        <TabPanel rightIcon={<Badge backgroundColor="var(--kuma-colors-gray-300)" type="number">27</Badge>} label="Returns">asd</TabPanel>
      </Tabs>
    </>
  )
}

export default Orders
