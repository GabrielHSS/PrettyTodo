import styled from 'styled-components'

export const Wrapper = styled.div`
  background: rgb(135, 154, 242);
  background: linear-gradient(127deg, #879af2 0%, #d3208b 54%, #fda000 100%);
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`
export const Card = styled.div`
  width: 600px;
  min-height: 400px;
  height: fit-content;
  background-color: #fff;
  padding: 6.4rem 4.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  margin: 0 40px;
  margin-top: 220px;
  position: relative;
  .title {
    font: 700 4.8rem Montserrat, 'Montserrat', sans-serif;
    margin-bottom: 32px;
  }
  .no-task-label {
    font: 400 2.4rem Montserrat, 'Montserrat', sans-serif;
    text-align: center;
    margin-top: 48px;
    color: grey;
  }
  @media screen and (max-width: 525px) {
    margin: 0 1rem;
    margin-top: 220px;
  }
`
export const AddButon = styled.button`
  position: absolute;
  top: -40px;
  right: 24px;
  width: 56px;
  height: 56px;
  background-color: hsla(220, 100%, 65%, 1);
  border-radius: 50%;
  color: #fff;
  margin: 1.2rem 0;
  border: none;
  font: 700 5.6rem Montserrat, 'Montserrat', sans-serif;
  text-transform: uppercase;
  :focus {
    outline: 0;
  }
  :active {
    background-color: hsla(220, 100%, 70%, 1);
  }
  @keyframes example {
    from {
      background-color: red;
    }
    to {
      background-color: yellow;
    }
  }
  ::before {
    content: '+';
    display: block;
    font: 700 54px/100% sans-serif;
    width: 57px;
    height: 57px;
  }
`
export const ListItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  .checkbox-wrapper {
    cursor: pointer;
    display: flex;
    align-items: flex-start;

    input[type='checkbox'] {
      display: none;
    }
    span.checkbox-inner {
      display: block;
      width: 3.2rem;
      height: 3.2rem;
      background-color: #fff;
      border: 2px solid grey;
      border-radius: 5px;
      margin-right: 12px;
      position: relative;
      flex-shrink: 0;
    }
    span.checkbox-label {
      font: 400 2.8rem Montserrat, 'Montserrat', sans-serif;
      color: hsl(0, 0%, 20%);
    }
    input[type='checkbox']:checked + span.checkbox-inner {
      border: 2px solid hsl(460, 60%, 60%);

      background-color: hsl(460, 60%, 60%);
      ::before {
        content: '✔️';
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 3rem;
        height: 3rem;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        color: white;
        font-size: 2.4rem;
      }
    }
    input[type='checkbox']:checked + span + span.checkbox-label {
      color: hsl(0, 0%, 80%);
      text-decoration: line-through;
      text-decoration-color: hsl(460, 60%, 60%);
    }
  }
  .delete-icon {
    display: block;
    width: 24px;
    height: 24px;
    font: 700 24px/100% sans-serif;
    color: hsl(4, 70%, 50%);
    cursor: pointer;
  }
`
export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`

export const StyledInput = styled.label`
  padding: 0 30px;
  width: 100%;
  span.input-label {
    display: block;
    color: hsl(0, 0%, 60%);
    font: 400 1.8rem/100% Montserrat, 'Montserrat', sans-serif;
    margin-bottom: 8px;
  }
  div.input-container {
    border: 1px solid hsl(0, 0%, 80%);
    width: 100%;
    height: 32px;
    padding: 4px 8px;
    border-radius: 5px;
    input {
      border: none;
      height: 100%;
      width: 100%;
      font: 400 1.4rem Montserrat, 'Montserrat', sans-serif;
      color: hsl(0, 0%, 20%);
      :focus {
        outline: 0;
      }
    }
  }
`

export const ModalCard = styled(Card)`
  border-radius: 4px;
  width: 500px;
  min-height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  .form-button {
    min-width: 15rem;
    min-height: 5rem;
    background-color: hsla(220, 100%, 65%, 1);
    border-radius: 5px;
    color: #fff;
    margin: 1.2rem 0;
    margin-top: 18px;
    border: none;
    font: 700 1.6rem Montserrat, 'Montserrat', sans-serif;
    text-transform: uppercase;
    :focus {
      outline: 0;
    }
    :active {
      background-color: hsla(220, 100%, 70%, 1);
    }
  }
`
