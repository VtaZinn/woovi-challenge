import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import data from "../data";
import { useState } from "react";
import ModalConfirmation from "./ModalConfirmation";

function Form(props){
  const [valueSelect, setValueSelect] = useState('1x');

  const [open, setOpen] = useState(false);

  const handleChange = (evt) => {
    setValueSelect(evt.target.value);
  }

  function handleClick() {
    setOpen(true);
  }


  return(
    <>
    <TextField
      required
      id="outlined-required"
      label="Nome completo"
      sx={{width:'100%',height: '65px', marginTop: 3}}
    />

    <TextField
      required
      id="outlined-required"
      label="CPF"
      sx={{width:'100%',height: '65px', marginTop: 1}}
    />

    <TextField
      required
      id="outlined-required"
      label="Número do cartão"
      sx={{width:'100%',height: '65px', marginTop: 1}}
    />

    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
      <TextField
        required
        id="outlined-required"
        label="Vencimento"
        sx={{width:'48%',height: '65px', marginTop: 1}}
      />
      <TextField
        required
        id="outlined-required"
        label="CVV"
        sx={{width:'48%',height: '65px', marginTop: 1}}
      />
    </Box>
    <Box sx={{width: '100%'}}>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Age"
        sx={{width: '100%'}}
        value={valueSelect}
        onChange={handleChange}
      >
          <MenuItem value={'1x'}> 1x de R$ 15.300,00 </MenuItem>
        {data.map(item => <MenuItem key={item.id} value={item.instalments}>{item.instalments} de {item.price}</MenuItem>)}
      </Select>
    </Box>
    <Button variant="contained" sx={{backgroundColor: '#133A6F', width: '100%', marginTop: 2}} onClick={handleClick}>Pagar</Button>
    <ModalConfirmation isOpen={open} onClick={handleClick}/>
    </>
  );
}

export default Form;