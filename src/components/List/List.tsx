import { Button } from "@mui/material";
import { MyDescription, MyInfos, MyListItem, MyListStyled, MyName, MyPhoto, MyValue } from "./List.style";

const List = () => {
    return (
        <MyListStyled>
            <MyListItem>
                <MyPhoto src="https://github.com/oKrolik.png"></MyPhoto>
                <MyInfos>
                    <MyName>Guilherme Coelho</MyName>
                    <MyValue>€ 100,00</MyValue>
                    <MyDescription>Programming classes</MyDescription>
                    <Button>Book</Button>
                </MyInfos>
            </MyListItem>
        </MyListStyled>
    )
}

export default List;