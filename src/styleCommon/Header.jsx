import styled from "styled-components"

export const Wrapper = styled.form`
    font-family: Noto Sans;
    background-color: white;
`
export const Container = styled.div`
    display: flex;
    align-items: center;

    margin-right: 3.5%;
    margin-left: 3.5%;

`
export const LogoWrapper = styled.div`
    cursor: pointer;
    margin-top: 10px;
    margin-right: 11%;
`
export const SearchWrapper = styled.div`
    min-width: 42%;
    margin-right: 10%;
`
export const SearchBarWapper = styled.div`
    display: flex;
    background-color: #efefef;
    height: 38px;
    width: 100%;
    border-radius: 50px;
    border: 1.5px solid #D9534F;
    padding: 10px;

    align-items: center;
    border-radius: 20px;
    border: 1px solid #C6C6C6;
    background: var(--light-grey-input-fiels-forms, #F6F6F6);

    form {
        display: flex;
        flex: 1;
    }

    input {
        background-color: transparent;
        border: none;
        width: 100%;
        margin-left: 5px;
        font-size: 15px
    }

    input:focus {
        outline: none;
    }
`
export const IconButton = styled.div`
    color: gray;
    cursor: pointer;
    padding-right: 6px;
`