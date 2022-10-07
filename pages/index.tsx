import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Teacher } from '../src/@types/teacher'
import List from '../src/components/List/List'

const Home: NextPage = () => {
  const teachers: Teacher[] = [
    {
      id: 1,
      name: "Guilherme Coelho",
      photo: "https://github.com/oKrolik.png",
      description: "Python programming classes",
      value_hour: 100
    },
    {
      id: 2,
      name: "Eduardo Correia",
      photo: "https://github.com/eduardo-mdc.png",
      description: "C and C++ programming classes",
      value_hour: 120
    },
    {
      id: 1,
      name: "Elton Fonseca",
      photo: "https://github.com/elton-fonseca.png",
      description: "React and TypeScript programming classes",
      value_hour: 110
    },
    {
      id: 1,
      name: "João Guedes",
      photo: "https://github.com/FindingBits.png",
      description: "General frontend programming classes",
      value_hour: 100
    }
  ]

  return (
    <Box sx={{ backgroundColor: 'secondary.main'}}>
      <List teachers={teachers}></List>
    </Box>
  )
}

export default Home
