import React, { useState } from 'react'
import styled from 'styled-components'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ButtonContainer1 } from '../styleCommon/Button'


function ChangePass(onChangePass) {

    const [CurrentPassword, setCurrentPassword] = useState('')
    const [NewPassword, setNewPassword] = useState('')
    const [ReEnterPassword, setReEnterPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        onChangePass({ CurrentPassword });
    }

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    }

    return (
        <Wrapper onSubmit={handleSubmit}>
            <Label>
                <Label1>
                    <h1>Change Password</h1>
                </Label1>
                <HorizontalLine />
                <Notif>
                    <p>Once changed, your new password will be in effect next time you login.</p>
                </Notif>
            </Label>

            <FormGroup>
                <StyledInput
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Current password"
                    value={CurrentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    autoComplete="new-password"
                />
                <VisibilityIcon onClick={handleTogglePasswordVisibility}>
                </VisibilityIcon>
            </FormGroup>

            <FormGroup>
                <StyledConfirm
                    type={showPassword ? 'text' : 'password'}
                    placeholder="New password"
                    value={NewPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    autoComplete="new-password"
                />
                <VisibilityIcon onClick={handleTogglePasswordVisibility}>
                </VisibilityIcon>
            </FormGroup>

            <FormGroup>
                <StyledConfirm
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Re-enter new password"
                    value={ReEnterPassword}
                    onChange={(e) => setReEnterPassword(e.target.value)}
                    autoComplete="new-password"
                />
                <VisibilityIcon onClick={handleTogglePasswordVisibility}>
                </VisibilityIcon>
            </FormGroup>

            <ButtonContainer1>
                <Link to='/mainpage'>
                    <button className="cancel">Cancel</button>
                </Link>

                <Link to='/mainpage'>
                    <button>Save</button>
                </Link>
            </ButtonContainer1>

        </Wrapper>
    )
}
export default ChangePass


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 45vh;
    margin: 0 auto;
    border-radius: 20px;
    margin-bottom: 50px;
    padding: 20px 30px 25px 30px;
`

const Label = styled.div`
    width: 100%;
`

const Label1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;

    h1 {
        color: #000;
        text-align: center;
        font-size: 20px;
        font-weight: 600;
        flex: 1;
        margin-left: auto;
    }
`

const HorizontalLine = styled.div`
    border-top: 2px solid #D9D9D9;
    margin-bottom: 15px;
`

const Notif = styled.div`
    color: #3A3A3A;
    text-align: center;
    font-size: 14px;
    margin-bottom: 30px;
`

const FormGroup = styled(Form.Group)`
    display: flex;
    flex-wrap: wrap;
    width: 95%;
`

const CommonInput = `
    margin-bottom: 25px;
    margin-right: 15px;
    height: 40px;
    border-radius: 0px;
    border: none;
    border-bottom: 1px solid #C7C7C7;

    &:focus {
        outline: none;
        box-shadow: none;
        border-bottom: 1px solid gray;
    }
`

const StyledInput = styled(Form.Control)`
    flex: 1;
    ${ CommonInput }
`

const StyledConfirm = styled(Form.Control)`
    ${ CommonInput }
`

const VisibilityIcon = styled.div`
`
