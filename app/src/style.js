import styled from "styled-components";

const Wrapper = styled.div`
  background: #ededed;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .content-chat {
    background: #fff;
    border-radius: 5px;
    box-shadow: 2px 2px 10px #ddd;

    .header {
      background: rgb(71, 111, 82);
      color: #fff;

      padding: 20px 10px;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
    .body-chat {
      padding: 20px 10px;
      height: 500px;
      overflow-y: auto;
      width: 500px;
      display: flex;
      flex-direction: column;

      .chat-left {
        align-items: flex-start;
      }
      .chat-right {
        align-items: flex-end;
      }

      .item-chat {
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;

        .message {
          background: #ddd;
          border-radius: 5px;
          padding: 10px;
        }

        strong {
          margin: 10px 0;
        }
      }
    }

    .loading {
      display: flex;
      justify-content: center;
    }

    .footer {
      padding: 20px 10px;
      display: flex;
      align-items: center;

      input {
        padding: 10px;
        border: 1px solid #ddd;
        flex: 1;
        border-radius: 5px;
      }

      button {
        margin-left: 10px;
        border-radius: 50%;
        background: rgb(71, 111, 82);
        color: #fff;
        width: 30px;
        height: 30px;
        border: none;
        box-shadow: 1px 1px 10px #ddd;
        cursor: pointer;
      }
    }
  }
`;

export default Wrapper;
