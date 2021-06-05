import React from 'react'
import { FiBookmark, FiCalendar, FiExternalLink, FiHome, FiMapPin, FiPlus, FiPrinter, FiSearch, FiSettings, FiTag, FiToggleRight } from 'react-icons/fi'
import styled from 'styled-components'
import Badge from '../../components/Badge/Badge'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import Button from '../../components/Button/Button'
import Dropdown from '../../components/Dropdown/Dropdown'
import Header from '../../components/Header/Header'
import Input from '../../components/Input/Input'
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

const FilterContainerMobile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  justify-content: space-between;
`

const Orders = () => {
  return (
    <>
      <Header />
      <FilterContainerMobile>
        <Dropdown />
        <Dropdown />
        <Dropdown />
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
        </TabPanel>
        <TabPanel rightIcon={<Badge backgroundColor="var(--kuma-colors-gray-300)" type="number">61</Badge>} label="Pickups">asd</TabPanel>
        <TabPanel rightIcon={<Badge backgroundColor="var(--kuma-colors-gray-300)" type="number">27</Badge>} label="Returns">asd</TabPanel>
      </Tabs>
    </>
  )
}

export default Orders
