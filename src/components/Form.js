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


  const [formValues, setFormValues] = useState({
    name: '',
    cpf: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    cpf: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formValues.name) {
      errors.name = 'Digite seu nome';
    }
    if (!formValues.cpf) {
      errors.cpf = 'Digite seu cpf';
    }
    if (!formValues.cardNumber) {
      errors.cardNumber = 'Digite seu numero do cartão';
    }
    if (!formValues.dueDate) {
      errors.dueDate = 'Preencha esse campo';
    }
    if (!formValues.cvv) {
      errors.cvv = 'Preencha esse campo';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setOpen(true);
    }
  };

  return(
    <Box  
    onSubmit={handleSubmit} noValidate
    component="form"
    autoComplete="off">

    <TextField
      label="Nome completo"
      name="name"
      value={formValues.name}
      onChange={handleInputChange}
      error={!!formErrors.name}
      helperText={formErrors.name}
      fullWidth
      margin="normal"
      sx={{width:'100%',height: '65px', marginTop: 3}}
    />

    <TextField
      label="CPF"
      name="cpf"
      value={formValues.cpf}
      onChange={handleInputChange}
      error={!!formErrors.cpf}
      helperText={formErrors.cpf}
      fullWidth
      margin="normal"
      sx={{width:'100%',height: '65px', marginTop: 1}}
    />

    <TextField
      label="Numero do cartão"
      name="cardNumber"
      value={formValues.cardNumber}
      onChange={handleInputChange}
      error={!!formErrors.cardNumber}
      helperText={formErrors.cardNumber}
      fullWidth
      margin="normal"
      sx={{width:'100%',height: '65px', marginTop: 1}}
    />

    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
      <TextField
        label="Vencimento"
        name="dueDate"
        value={formValues.dueDate}
        onChange={handleInputChange}
        error={!!formErrors.dueDate}
        helperText={formErrors.dueDate}
        fullWidth
        margin="normal"
        sx={{width:'48%',height: '65px', marginTop: 1}}
      />
      <TextField
        label="CVV"
        name="cvv"
        value={formValues.cvv}
        onChange={handleInputChange}
        error={!!formErrors.cvv}
        helperText={formErrors.cvv}
        fullWidth
        margin="normal"
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
    <Button type="submit" variant="contained" sx={{backgroundColor: '#133A6F', width: '100%', marginTop: 2}}>Pagar</Button>
    <ModalConfirmation isOpen={open} onClick={handleClick}/>
    </Box>
  );
}

export default Form;