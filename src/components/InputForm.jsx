import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { db, auth } from "../firebase";

const InputForm = () => {
  const [twittername, setTwitterName] = useState();
  const [twitterid, setTwitterId] = useState();
  const [psid, setPsId] = useState();
  const [nickname, setNickName] = useState();

  // googleアイコン画像取得
  const loginUser = auth.currentUser;
  const photoURL = loginUser.photoURL;

  // リスト追加
  const handleAddList = async (e) => {
    e.preventDefault();
    const { uid } = auth.currentUser;
    const listData = collection(db, "lists");
    await addDoc(listData, {
      twittername: twittername,
      twitterid: twitterid,
      psid: psid,
      nickname: nickname,
      timestamp: serverTimestamp(),
      uid,
    });
    setTwitterName("");
    setTwitterId("");
    setPsId("");
    setNickName("");
  };

  return (
    <div className="mb-4">
      <div className="flex">
        <img
          className=" max-h-12 rounded-full ml-4 mr-4"
          src={photoURL}
          alt=""
          referrerPolicy="no-referrer"
        />
        <h2 className="text-xl flex items-center">フレンドを追加</h2>
      </div>
      <form
        className="lg:flex lg:justify-around container mx-auto items-end"
        onSubmit={handleAddList}
      >
        <div>
          <label className="block" htmlFor="twitterlabel">
            twitter:
          </label>
          <input
            className=" w-full shadow appearance-none rounded-xl py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setTwitterName(e.target.value)}
            type="text"
            name="twittername"
            placeholder=" twitter名"
            id="twitterlabel"
            value={twittername}
            required
          />
        </div>
        <div>
          <label className="block" htmlFor="twitteridlabel">
            twitterID（URL）:
          </label>
          <input
            className=" w-full shadow appearance-none rounded-xl py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setTwitterId(e.target.value)}
            type="text"
            name="twitterid"
            placeholder=" https://twitter.com/"
            id="twitteridlabel"
            value={twitterid}
          />
        </div>
        <div>
          <label className="block" htmlFor="pslabel">
            PSID:
          </label>
          <input
            className=" w-full shadow appearance-none rounded-xl py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setPsId(e.target.value)}
            type="text"
            name="psid"
            placeholder=" ps名"
            id="pslabel"
            value={psid}
            required
          />
        </div>
        <div>
          <label className="block" htmlFor="nicknamelabel">
            ニックネーム:
          </label>
          <input
            className=" w-full shadow appearance-none rounded-xl py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setNickName(e.target.value)}
            type="text"
            name="nickname"
            placeholder=" あだ名"
            id="nicknamelabel"
            value={nickname}
            required
          />
        </div>
        <div>
          <input
            className="bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline block m-auto mt-3"
            type="submit"
            name="send-btn"
            value="フレンド追加"
          />
        </div>
      </form>
    </div>
  );
};

export default InputForm;
