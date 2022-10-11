import { Box, Dialog, DialogActions, Grid, TextField, Button, Snackbar } from '@mui/material'
import type { NextPage } from 'next'
import Lista from '../src/components/Lista/Lista';
import { useIndex } from '../src/hooks/pages/useIndex'

const Home: NextPage = () => {
  const { 
    listaProfessores, 
    nome, 
    setNome, 
    email, 
    setEmail,
    professorSelecionado,
    setProfessorSelecionado,
    marcarAula,
    mensagem,
    setMensagem
  } = useIndex();

  return (
   <div>
      <Box sx={{ backgroundColor: 'secondary.main' }}>
        <Lista 
          professores={listaProfessores}
          onSelect={(professor) => setProfessorSelecionado(professor)}
        ></Lista>
      </Box>

      <Dialog onClose={() => setProfessorSelecionado(null)} open={professorSelecionado !== null} fullWidth PaperProps={{sx: {p: 5}}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
             <TextField 
                label="Type the name:"
                type="text"
                fullWidth
                value={nome}
                onChange={(e) => setNome(e.target.value)}
             />
          </Grid>
          <Grid item xs={12}>
             <TextField 
                label="Type the email:"
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
             />
          </Grid>
        </Grid>

        <DialogActions sx={{mt: 5}}>
          <Button onClick={() => setProfessorSelecionado(null)}>Cancel</Button>
          <Button onClick={() => marcarAula()}>Book</Button>
        </DialogActions>
      </Dialog>

      <Snackbar 
        message={mensagem} 
        open={mensagem.length > 0}
        autoHideDuration={2500}
        onClose={() => setMensagem('')}
      />
   </div>
  )
}

export default Home