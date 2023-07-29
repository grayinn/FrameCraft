import styled from 'styled-components'

// --- I. Button "Cancel" + "Save" - 
// --- (CreatePost - UserInforForm - ChangePass )

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


// ----- Button "For you" - "Following"
// ----- "Created" - "Favorites" (profilepage)
export const ButtonGroupCover = styled.div`
    display: none;
    position: absolute;
    bottom: 10px;
    right: 3.5%;
    font-size: 15px;

    .button {
        height: 35px;
        padding: 10px;
        border-radius: 20px;
        cursor: pointer;
        display: flex;
        align-items: center;
    }

    .remove {
        background-color: none;
        color: #C83B36;
        margin-right: 10px;
        border: 1.5px solid #C83B36;
    }

    .upload {
        background-color: none;
        color: rgba(58, 58, 58, 0.80);
        border: 1px solid rgba(58, 58, 58, 0.80);
    }

    .button:hover {
        background-color: #FFE4DE;
    }
`

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    margin: 1.5% 3.5% 2% 3.5%;
`

const CommonButton14 = `
    width: 10%;
    padding: 7px;
    // border-radius: 20px 0px 0px 20px;
    align-items: center;
    cursor: pointer;

    background-color: #D9534F;
    color: #fff;
    border: 1px solid #CF4C48;

    p {
        display: flex;
        justify-content: center;
        margin-bottom: 0;
    }

    &:hover {
        background-color: #EC5E5A; 
    }
`

export const Button1 = styled.div`
    ${ CommonButton14 }
    border-radius: 20px 0px 0px 20px;
`

const CommonButton23 = `
    width: 10%;
    padding: 7px;
    // border-radius: 0px 20px 20px 0px;
    cursor: pointer;

    background-color: white;
    color: rgba(58, 58, 58, 0.80);
    border: 1px solid rgba(58, 58, 58, 0.80);

    p {
        display: flex;
        justify-content: center;
        margin-bottom: 0;
    }

    &:hover {
        background-color: #EBEBEB;
    }

    a {
        text-decoration: none;
        color: rgba(58, 58, 58, 0.80);
    }
`

export const Button2 = styled.div`
    ${CommonButton23}
    border-radius: 0px 20px 20px 0px;
`

export const Button3 = styled.div`
    ${CommonButton23}
    border-radius: 20px 0px 0px 20px;
`

export const Button4 = styled.div`
    ${ CommonButton14 }
    border-radius: 0px 20px 20px 0px;
`