import styled from "styled-components"

export const Wrapper = styled.form`
    display: flex;
    font-family: Noto Sans;
    justify-content: space-between;
    align-items: center;
    background-color: white;

    margin-left: 50px;
    margin-right: 50px;
`

export const LogoWrapper = styled.div`
    cursor: pointer;
    padding-top: 10px;
`

export const SearchBarWapper = styled.div`
    background-color: #efefef;
    display: flex;
    height: 38px;
    width: 100%
    border-radius: 50px;
    border: 1.5px solid #D9534F;

    width: 637px;
    padding: 10px;

    align-items: center;
    border-radius: 20px;
    border: 1px solid #C6C6C6;
    background: var(--light-grey-input-fiels-forms, #F6F6F6);

    form {
    display: flex;
    flex: 1;
    }

    form > input {
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