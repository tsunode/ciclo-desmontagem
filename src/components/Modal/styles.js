import styled from "styled-components";

export const Container = styled.dialog`
    position: fixed;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100vh;
    inset: 0;
    background: rgba(0,0,0,0.5);

    .modal-box {
        background-color: #fff;
        padding: 30px;
        border-radius: 5px;
    }

`   