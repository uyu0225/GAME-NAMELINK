import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  onSnapshot,
  where,
  query,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useAuthContext } from "../context/AuthContext";
import { UpdateFormBtn } from "./index";
import DeleteIcon from "@mui/icons-material/Delete";
import TwitterIcon from "@mui/icons-material/Twitter";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const NameList = () => {
  const [lists, setLists] = useState([]);
  const { user } = useAuthContext();

  // タスクの削除
  const handleDelete = async (id) => {
    const listDataRef = doc(db, "lists", id);
    await deleteDoc(listDataRef);
  };

  useEffect(() => {
    //データベースからデータを取得
    const listData = query(
      collection(db, "lists"),
      where("uid", "==", `${user.uid}`)
    );

    getDocs(listData).then((querySnapshot) => {
      setLists(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          // ドキュメントのidを一意なキーに設定
          id: doc.id,
        }))
      );
    });

    // リアルタイムで取得
    onSnapshot(listData, (querySnapshot) => {
      setLists(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {lists.map((list) => (
        <div
          key={list.id}
          className="flex border-b mb-3 pb-1 md:justify-center"
        >
          <div className=" text-blue-500 mr-2">
            <TwitterIcon />
            <a href={list.twitterid}>{list.twittername}</a>
          </div>
          <div className="mr-2">
            <SportsEsportsIcon />
            {list.psid}
          </div>
          <div className="mr-8">
            <AccountBoxIcon />
            {list.nickname}
          </div>
          <button className="mr-1" onClick={() => handleDelete(list.id)}>
            <DeleteIcon className=" text-blue-500" />
          </button>
          <UpdateFormBtn list={list} /> {/* propsでlistの受け渡し */}
        </div>
      ))}
    </div>
  );
};

export default NameList;
