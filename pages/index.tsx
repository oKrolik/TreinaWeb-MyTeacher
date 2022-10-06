import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Teacher } from '../src/@types/teacher'
import List from '../src/components/List/List'

const Home: NextPage = () => {
  const teachers: Teacher[] = [
    {
      id: 1,
      name: "Teacher 1",
      photo: "https://github.com/oKrolik.png",
      description: "Teacher 1 description",
      value_hour: 100
    },
    {
      id: 2,
      name: "Teacher 2",
      photo: "https://github.com/elton-fonseca.png",
      description: "Teacher 2 description",
      value_hour: 120
    },
    {
      id: 1,
      name: "Teacher 2",
      photo: "https://github.com/oKrolik.png",
      description: "Teacher 2 description",
      value_hour: 110
    },
    {
      id: 1,
      name: "Teacher 2",
      photo: "https://github.com/oKrolik.png",
      description: "Teacher 2 description",
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
