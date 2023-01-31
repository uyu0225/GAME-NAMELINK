import React, { useState } from "react";
import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";

const UpdateFormModal = ({ show, setShow, list }) => {
  const [twittername, setTwitterName] = useState(list.twittername);
  const [twitterid, setTwitterId] = useState(list.twitterid);
  const [psid, setPsId] = useState(list.psid);
  const [nickname, setNickName] = useState(list.nickname);

  // フォーム非表示
  const CloseModal = () => {
    setShow(false);
  };

  // 更新
  const handleUpdate = async (e) => {
    e.preventDefault();
    const listLef = doc(db, "lists", list.id);
    await updateDoc(listLef, {
      twittername: twittername,
      twitterid: twitterid,
      psid: psid,
      nickname: nickname,
    });
    setShow(false);
  };

  if (show) {
    return (
      <div
        className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex items-center justify-center"
        onClick={CloseModal}
      >
        <div
          className="z-10 w-1/2 p-4 bg-white text-black rounded-xl"
          onClick={(e) => e.stopPropagation()} //クリックイベント(closeModal)伝搬阻止
        >
          <p>編集</p>
          <form onSubmit={handleUpdate}>
            <div>
              <p>twitter</p>
              <input
                className=" w-full shadow appearance-none border rounded-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={twittername}
                onChange={(e) => setTwitterName(e.target.value)}
              />
            </div>
            <div>
              <p>twitterID</p>
              <input
                className=" w-full shadow appearance-none border rounded-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={twitterid}
                onChange={(e) => setTwitterId(e.target.value)}
              />
            </div>
            <div>
              <p>PSID</p>
              <input
                className=" w-full shadow appearance-none border rounded-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={psid}
                onChange={(e) => setPsId(e.target.value)}
              />
            </div>
            <div>
              <p>ニックネーム</p>
              <input
                className=" w-full shadow appearance-none border rounded-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={nickname}
                onChange={(e) => setNickName(e.target.value)}
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline block mt-3">
              更新
            </button>
          </form>
          <p>
            <button
              className="md:py-2 md:px-4 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-full mt-3"
              onClick={CloseModal}
            >
              キャンセル
            </button>
          </p>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default UpdateFormModal;
