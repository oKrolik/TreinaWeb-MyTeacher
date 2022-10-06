import { Button } from "@mui/material";
import { Teacher } from "../../@types/teacher";
import { MyDescription, MyEmptyList, MyInfos, MyListItem, MyListStyled, MyName, MyPhoto, MyValue } from "./List.style";

interface ListProps {
    teachers: Teacher[],
}

const List = (props: ListProps) => {
    return (
        <div>
            {props.teachers.length > 0 ? (
                <MyListStyled>
                {props.teachers.map(teacher => (
                    <MyListItem key={teacher.id}>
                        <MyPhoto src={teacher.photo}></MyPhoto>
                        <MyInfos>
                            <MyName>{teacher.name}</MyName>
                            <MyValue>{teacher.value_hour.toLocaleString('en-NA', { minimumFractionDigits: 2, style: 'currency', currency: 'EUR' })}/hour</MyValue>
                            <MyDescription>{teacher.description}</MyDescription>
                            <Button sx={{ width: '70%'}}>Book</Button>
                        </MyInfos>
                    </MyListItem>
                ))}           
                </MyListStyled>
            ) : (
                <MyEmptyList>Nenhum item encontrado</MyEmptyList>
            )}
        </div>
    )
}

export default List;