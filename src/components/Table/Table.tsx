import React from 'react'
import DataTable from 'react-data-table-component';
import { FiChevronDown, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styled from 'styled-components';
import { theme } from '../../theme';
import Badge from '../Badge/Badge';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import Dropdown from '../Dropdown/Dropdown';
import Status from '../Status/Status';

const customStyles = {
  table: {
    style: {
      padding: '6px 10px'
    },
  },
  header: {
    style: {
      minHeight: '56px',
      border: 0,
    },
  },
  head: {
    style: {
      height: 40,
      display: 'flex',
      alignItems: 'center',
      border: 0,
    }
  },
  headRow: {
    style: {
      padding: '0px 8px',
      height: 40,
      backgroundColor: 'var(--kuma-colors-gray-50)',
      borderRadius: 16,
      fontFamily: 'Nunito Sans',
      fontWeight: 800,
      fontSize: 14,
      paddingTop: 2,
      paddingBottom: 2,
      border: 0,
    },
  },
  headCells: {
    style: {
      fontFamily: 'Nunito Sans',
      fontWeight: 400,
      fontSize: 14,
      color: 'var(--kuma-colors-gray-600)',
      border: 0,
    },
    activeSortStyle: {
      paddingRight: 10
    },
  },
  rows: {
    style: {
      fontFamily: 'Nunito Sans',
      fontWeight: 600,
      fontSize: 12,
      letterSpacing: '0.03em',
      color: 'var(--kuma-colors-gray-600)',
      border: 0,
      borderBottomColor: 'red',
      padding: '8px',
      borderRadius: 16,
      '&:nth-of-type(n)': {
        border: 0,
      },
    },
    selectedHighlightStyle: {
      // use nth-of-type(n) to override other nth selectors
      '&:nth-of-type(n)': {
        border: 0,
        backgroundColor: 'white',
        position: 'relative',
        padding: '8px',
        boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.08), 0px 4px 48px rgba(0, 0, 0, 0.08)'
      },
    },
  },
  pagination: {
    style: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: 'white',
      fontFamily: 'Nunito Sans',
      fontWeight: 600,
      color: 'var(--kuma-colors-gray-400)',
      letterSpacing: '0.03em',
      fontSize: 12
    },
    pageButtonsStyle: {
      borderRadius: '50%',
      height: '40px',
      width: '40px',
      padding: '8px',
      cursor: 'pointer',
      transition: '0.4s',
      color: 'black',
      fill: 'black',
      backgroundColor: 'transparent',

      'svg': {
        fill: 'var(--kuma-colors-gray-900)'
      }
    },
  },
};

const BoldCell = styled.span`
  color: #1D1929;
  font-weight: 700;
  font-size: 14px;
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
const columns = [
  {
    name: 'ID No.',
    selector: 'id',
    sortable: true,
  },
  {
    name: 'Product',
    selector: 'product',
    sortable: true,
    right: false,
    minWidth: '300px',
    cell: ({ product }: any) => <BoldCell>{product}</BoldCell>
  },
  {
    name: 'Customer',
    selector: 'customer',
    sortable: true,
    right: false,
  },
  {
    name: 'Status',
    selector: 'status',
    sortable: true,
    right: false,
    cell: ({ status, color }: any) => <Badge backgroundColor={color}>{status}</Badge>
  },
  {
    name: 'Delivery Status',
    selector: 'deliveryStatus',
    sortable: true,
    right: false,
    cell: ({ status, color }: any) => <Status color={color}>{status}</Status>
  },
  {
    name: 'Created Date',
    selector: 'createdDate',
    sortable: true,
    right: false,
  },
  {
    name: 'Deadline',
    selector: 'deadline',
    sortable: true,
    right: false,
  },
  {
    name: 'Price',
    selector: 'price',
    sortable: true,
    right: true,
    cell: ({ price }: any) => <BoldCell>{price}</BoldCell>
  },
  {
    name: '',
    selector: 'actions',
    sortable: true,
    right: true,
    cell: ({ price }: any) => <Button textColor="var(--kuma-colors-blue-800)" view="outline" size="medium" text="Manage" />
  },
  {
    name: '',
    selector: 'In Route',
    sortable: true,
    right: true,
    width: '150px',
    cell: ({ price }: any) => <Dropdown />
  },
]

const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 25px;

  a {
    margin: 0 15px;
    font-weight: 700;
    color: var(--kuma-colors-gray-800)
  }

  svg {
    margin: 0 15px;
  }
`

// const PageNumber = styled.a<{}>``

const Pagination = (props: any) => {
  console.log(props)
  return (
    <PaginationContainer style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <FiChevronLeft />
      <a>1</a>
      <a>2</a>
      <a style={{ color: 'var(--kuma-colors-blue-1100)' }}>3</a>
      <a>4</a>
      <a>5</a>
      <FiChevronRight />
    </PaginationContainer>
  )
}

type TableProps = {
  className?: string;
}

const Table = ({ className }: TableProps) => {
  return (
    <DataTable
      className={className}
      keyField='id'
      key="id"
      noHeader={true}
      columns={columns}
      selectableRows
      selectableRowsComponent={Checkbox}
      customStyles={customStyles}
      sortIcon={<FiChevronDown style={{ marginLeft: 5, color: 'var(--kuma-colors-gray-600)' }} />}
      data={data}
      pagination
      selectableRowsHighlight={true}
      paginationComponent={Pagination}
    />
  )
}

export default Table
