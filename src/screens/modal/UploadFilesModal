import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Modal, Button, Divider, Typography, Upload, message } from "antd";

const { Title } = Typography;
const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text"
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  progress: {
    strokeColor: {
      "0%": "#108ee9",
      "100%": "#87d068"
    },
    strokeWidth: 3,
    format: (percent) => `${parseFloat(percent.toFixed(2))}%`
  }
};
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
    }, 250);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          style={{
            borderRadius: 30
          }}
          footer={null}
          centered={true}
          visible={visible}
        >
          <Title level={3}>Subir Archivo</Title>

          <Button
            block={true}
            key="link"
            type="text"
            size="large"
            loading={loading}
            onClick={null}
          >
            <Upload {...props}>
              <Button type="text" block={true}>
                Subir archivo
              </Button>
            </Upload>
          </Button>
          <Divider />
          <Button
            style={{
              backgroundColor: "#4C17BF",
              borderRadius: 10
            }}
            block={true}
            key="link"
            type="primary"
            size="large"
            loading={loading}
            onClick={this.handleOk}
          >
            Aceptar
          </Button>
        </Modal>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));