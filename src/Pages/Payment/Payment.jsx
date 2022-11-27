import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "antd";
import "./Payment.scss";

function Payment() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOk = () => {
    navigate("/paymentDetail");
  };

  const handleCancel = () => {
    navigate("/home");
  };

  return (
    <div className="Payment">
      <div className="container">
        <div className="content">
          <div className="left">
            <img src="/src/assets/image/Group 46.png" alt="" />
          </div>
          <div className="right">
            <img src="/src/assets/image/Group 45.png" alt="" />
            <button onClick={() => setOpen(true)}>Xác nhận mua</button>
            <Modal
              open={open}
              title="Đặt hàng thành công!!!"
              onOk={handleOk}
              onCancel={handleCancel}
              footer={[
                <Button key="back" onClick={handleCancel}>
                  Return Home
                </Button>,
                <Button key="link" type="primary" onClick={handleOk}>
                  Detail
                </Button>,
              ]}
            >
              <p>sản phẩm sẽ được giao đến bạn từ 3 đến 5 ngày</p>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
