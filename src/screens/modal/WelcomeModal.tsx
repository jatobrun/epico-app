import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Modal, Button, View } from "antd";

class App extends React.Component {
  state = {
    loading: false,
    visible: false
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 500);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Bienvenida
        </Button>
        <Modal
          style={{
            borderRadius: 30
          }}
          footer={null}
          centered={true}
          visible={visible}
        >
          <h1>Bienvenido a nuestro Centro de Emprendimiento Epico </h1>
          <p>
            Un espacio donde te ayudaremos a convertir tu idea en un modelo de
            negocios innovador y sostenible. Juntos, lo hacemos posible!.
          </p>
          <Button
            style={{
              backgroundColor: "#4C17BF",
              borderRadius: 10
            }}
            size="large"
            block={true}
            key="submit"
            type="primary"
            loading={loading}
            onClick={this.handleOk}
          >
            Entendido
          </Button>
          ,
          <Button
            size="large"
            block={true}
            key="link"
            href="https://www.youtube.com/watch?v=oHr6d_cfE-8"
            type="text"
            loading={loading}
          >
            Ver Video
          </Button>
        </Modal>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));