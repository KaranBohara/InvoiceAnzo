import React,{useEffect,useState} from 'react';
import {Table} from "react-bootstrap";

const Invoice = () => {
    const[invoice,setInvoice]=useState([]);
    useEffect(() => {
        const url = "http://localhost:5000/invoice";
        const fetchData = async () => {
          try {
            const response = await fetch(url,{
              method: "GET",
              headers: {
              "content-type": "application/json",
                       },
                      });
            const item = await response.json();
            console.log(item);
            setInvoice(item);
          } catch (error) {
            console.log("error", error);
          }
        };
        fetchData();
    }, []);
  return <div className='invoice-table'>
  <Table striped bordered hover>
  <thead>
    <tr>
      <th>Invoice Id</th>
      <th>Truck Number</th>
      <th>Gantry Id</th>
      <th>Requested_5L</th>
      <th>Requested_3L</th>
      <th>Requested_2L</th>
      <th>Dispatched_5L</th>
      <th>Dispatched_3L</th>
      <th>Dispatched_2L</th>
      <th>Status</th>
      <th>Station Id</th>
      <th>Created Date</th>
    </tr>
  </thead>
  <tbody>
    {invoice.map((item)=>
        {
            return(
                <tr key={item.InvoiceId}>
                <td>{item.InvoiceId}</td>
                <td>{item.TruckNumber}</td>
                <td>{item.GantryId}</td>
                <td>{item.Requested_5L}</td>
                <td>{item.Requested_3L}</td>
                <td>{item.Requested_2L}</td>
                <td>{item.Dispatched_5L?item.Dispatched_5L:'-'}</td>
                <td>{item.Dispatched_3L?item.Dispatched_3L:'-'}</td>
                <td>{item.Dispatched_2L?item.Dispatched_2L:'-'}</td>
                <td>{item.Status}</td>
                <td>{item.StationId}</td>
                <td>{item.createdAt}</td>
                </tr>
            )
        })}
  </tbody>
</Table>
  </div>;
};

export default Invoice;
