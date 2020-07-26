import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Data from './Data';



function App() {

  const [cardView, setCardView] = useState(false)

  function handleChange(e) {
    let checked = e.target.checked
    console.log(checked)
    setCardView(checked)
  }
  return (
    <div className="App">
      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <FormControlLabel
          control={
            <Switch
              checked={cardView}
              onChange={handleChange}
              color="primary"
            />
          }
          label="Switch to card view"
        />
      </div>
      {cardView == false ?
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell >Open</TableCell>
                <TableCell>High</TableCell>
                <TableCell >Low</TableCell>
                <TableCell >close</TableCell>
                <TableCell >Volume</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Data.map((row, i) => (
                <TableRow key={i}>
                  <TableCell scope="row">
                    {row.Date}
                  </TableCell>
                  <TableCell scope="row">
                    {row.Open}
                  </TableCell>
                  <TableCell scope="row">
                    {row.High}
                  </TableCell>
                  <TableCell scope="row">
                    {row.Low}
                  </TableCell>
                  <TableCell scope="row">
                    {row.Close}
                  </TableCell>
                  <TableCell scope="row">
                    {row.Volume}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer> :
        <div >
          {Data.map((ele, i) => (
            <Card key={i}>
              <CardContent>
                <h4>{ele.Date}</h4>
                <p>
                  <b>Open : </b>{ele.Open}&emsp;
                  <b>High : </b>{ele.High}&emsp;
                  <b>Low : </b>{ele.Low}&emsp;
                  <b>Close : </b>{ele.Close}&emsp;
                  <b>Volume : </b>{ele.Volume}&emsp;
              </p>
              </CardContent>
            </Card>
          ))}
        </div>
      }
    </div>


  );
}

export default App;
