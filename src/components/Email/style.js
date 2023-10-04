import styled from 'styled-components'

export const StyledContactForm = styled.div`
  width: 600px;
  display: flex;
  justify-content: center;
  height: 100vh;

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: 16px;

    input {
      height: 35px;
      padding: 7px;
      outline: none;
      color: black;
      border-radius: 0px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    select{
      height: 35px;
      padding: 7px;
      outline: none;
      color: black;
      border-radius: 0px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    select option {
      color: black;
    }

    textarea {
      max-height: 100px;
      min-height: 130px;
      padding: 7px;
      outline: none;
      color: black;
      border-radius: 0px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      border-radius: 15px;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: black;
      border: none;
    }

      input[type="checkbox"] {
        width: 15%;
    }
  }
`
