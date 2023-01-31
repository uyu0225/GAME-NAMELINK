import { useState } from "react";
import { UpdateFormModal } from "./index";
import EditIcon from "@mui/icons-material/Edit";

const UpdateFormBtn = ({ list }) => {
  // フォームの表示管理変数
  const [show, setShow] = useState(false);

  // フォーム表示
  const openUpdateModal = () => {
    setShow(true);
  };

  return (
    <div>
      <button className="text-blue-500" onClick={openUpdateModal}>
        <EditIcon />
      </button>
      <UpdateFormModal show={show} setShow={setShow} list={list} />
    </div>
  );
};

export default UpdateFormBtn;
