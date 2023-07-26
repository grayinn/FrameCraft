import styled from 'styled-components'
// I. Button "Cancel" + "Save" - (CreatePost - UserInforForm - ChangePass )


// - 
const CommonButton = `
    display: flex;
    justify-content: flex-end;

    button {
        font-weight: 600;
        border-radius: 20px;
        margin-left: 10px;
        background-color: #D9534F;
        color: #fff;
        width: 140px;
        height: 40px;
        border: #D9534F;

        &:hover {
            background-color: #EC5E5A; 
        }
    }

    button.cancel {
        background-color: white;
        color: rgba(58, 58, 58, 0.80);
        border: 2px solid rgba(58, 58, 58, 0.80);

        &:hover {
            background-color: #EBEBEB;
        }
    }
`

export const ButtonContainer = styled.div`
    ${CommonButton}
`

export const ButtonContainer1 = styled.div`
    ${CommonButton}
    width: 90%;
    margin-top: 5px;
`
