/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from "react-redux";
import addNotesAction from "./boilerplate/actions";
import notesStore from "./boilerplate/store";
import { useState } from "react";
import { useEffect } from "react";

function DeleteComponent() {
  const { dispatch } = notesStore;


  return (
    <div>
      <h1>Delete demo</h1>

      <button> Todo: Remove a particular note. </button>
    </div>
  );
}

export default DeleteComponent;
