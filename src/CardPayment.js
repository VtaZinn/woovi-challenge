import { Box } from "@mui/material";
import Form from "./components/Form";
import Header from "./components/Header";
import Payment from "./components/Payment";
import Footer from "./components/Footer";

function CardPayment() {
  return(
    <>
      <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
          <Header title="João, pague o restante em 1x no cartão"/>
          <Form/>
          <Payment/>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'center', marginTop: 5, paddingBottom: 3}}>
          <Footer/>
      </Box>
    </>
  );
}

export default CardPayment;