import styled from "styled-components";
import { ColumnFlexContainer, RowFlexContainer } from "./Styles/GlobalStyle";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useState } from "react";
import { useContext } from "react";
import { GlobalStateContext } from "../App";


const ItemWrapper = styled(RowFlexContainer)`
width: 90%;
gap: 5px;
`;

const DeleteItem = styled.div`

& :hover{
    cursor: pointer;
    color: #ff3c3c;
}

`;

const ItemContainer = styled.div`
width: 80%;
height: 200px;
border: 1px solid #979797;
margin-block: 10px;
padding-block: 8px;
box-shadow: 0 0 2.5px grey;
border-radius: 5px;
`;


const CartItemHead = styled(RowFlexContainer)`
width: 100%;
height: 30px;
/* background-color: #cdcdcd; */
border-bottom: 1px solid grey;

& h4{
  font-family: 'Poppins', sans-serif;
  font-weight: 100;
  margin-block: 5px;
  padding-inline: 5px;
}
`;

const ItemDetail = styled(RowFlexContainer)`
width: 60%;
margin-block:2px;
/* border: 1px solid red; */
`;
const ImageContainer = styled.div`
width: 110px;
height: 160px;
background: url(${props => props.imgLink});
background-repeat: no-repeat;
background-size:cover;
margin-inline: 5px;
margin-block: 2.5px;
`;

const BookDetails = styled(ColumnFlexContainer)`
align-items: center;
justify-content: left;
margin: 4px;

& h3{
    margin-block: 0px;
    font-weight: 400;
    font-size: 0.9rem;
}


& h4{
    margin-block: 0px;
    font-family: 'Poppins', sans-serif;
    font-weight: 100;
    font-size: 0.75rem;
}
`;

const Price = styled(ColumnFlexContainer)`
align-items: center;
justify-content: center;
width:20%;
`;

export const CartItem = (props) => {

    const [quantity, setQuantity] = useState(1);
    const { cart, setCart } = useContext(GlobalStateContext);


    const handleRemoveClick = () =>{
       const newCart =  cart.filter((eachBookData)=>{
            return (props.bookData.id !== eachBookData.id); //return only those item which do not have same id
        })

        setCart(newCart);
    }

    return (
        <ItemWrapper>
            <ItemContainer> 
                <CartItemHead>
                    <div style={{ width: "50%" }}>
                        <h4>Item Details</h4>
                    </div>
                    <div style={{ width: "30%", textAlign: "right" }}>
                        <h4>Quantity</h4>
                    </div>
                    <div style={{ width: "20%", textAlign: "right" }}>
                        <h4>Price</h4> 
                    </div>
                </CartItemHead>
                <RowFlexContainer>
                    <ItemDetail>
                        <ImageContainer imgLink = {props.bookData.bookImage} />
                        <BookDetails>
                            <h3>{props.bookData.bookName}</h3>
                            <h4>{props.bookData.author}</h4>
                        </BookDetails>
                    </ItemDetail>
                    <Quantity quantity={quantity}  setQuantity = {setQuantity}/>
                    <Price>
                     <h3> <span style={{fontFamily:'Roboto, sans-serif'}}>&#8377; </span>{Math.trunc(props.bookData.cost * quantity)}</h3>
                    </Price>
                </RowFlexContainer>
            </ItemContainer>
            <DeleteItem onClick={handleRemoveClick}>
                <DeleteForeverIcon style={{ fontSize: "2.5rem" }} color='disabled' />
            </DeleteItem>
        </ItemWrapper>
    );
};



const QuatityConatiner = styled(ColumnFlexContainer)`
align-items: center;
justify-content: center;
width: 20%;

& input{
    width: 50%;
    height: 30px;
    text-align: center;
    background-color: white;
    border: 1px solid #6c6c6ccc;
    border-radius: 10px;

}

& button{
        cursor: pointer;
        font-size: 0.1rem;
        border: none;
        border-radius: 30px;
}

& button:active{
    border: 1px solid grey;
}

.add{
    background-color: #00fd00c4;
}

.remove{
    background-color: #f14b4b;
}
`;

const Quantity = ({quantity,setQuantity}) => {

    const handleAdd = () => {
        setQuantity((prevItem) => (prevItem < 10) ? prevItem + 1 : prevItem );
    }

    const handleRemove = () => {
        setQuantity((prevItem) => (prevItem < 1) ? prevItem : prevItem - 1);
    }

    return (
        <QuatityConatiner>
            <ColumnFlexContainer style={{ gap: "10px" }}>
                <button className="add" onClick={handleAdd}> <AddIcon /> </button>
                <input type="text" value={quantity} />
                <button className="remove" onClick={handleRemove}> <RemoveIcon /> </button>
            </ColumnFlexContainer>
        </QuatityConatiner>
    );
};