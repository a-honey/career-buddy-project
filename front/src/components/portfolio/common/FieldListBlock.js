import { styled } from "styled-components"
import FieldDocumentBlock from "./FieldDocumentBlock";
import EducationItem from "../education/EducationItem";

const FieldListBlock = ({children}) => {
    return (
        <ListBlock>
            {children}
        </ListBlock>
    )
}

export default FieldListBlock;

const ListBlock = styled.div`
    display: flex;
    flex-direction: column;
    padding:  10px 30px;
    border: 1px solid black;
    border-radius: 15px;
    margin: 30px;
    .fieldName {
        font-size: 30px;
        font-weight: 700;
        text-transform: uppercase;
        position: relative;
        padding: 10px 0;
        &::after {
            content: "";
            background-color: rgb(115, 83, 234);
            height: 5px;
            position: absolute;
            left: 0;
            width: 150px;
            bottom: 0;
        }
    }
`