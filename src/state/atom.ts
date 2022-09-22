import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";

export const listaDeEventosState = atom<IEvento[]>({
  key: 'listaDeEventosState',
  default: [{
    "descricao": "Estudar React",
    "inicio": new Date("2022-09-22T14:00"),
    "fim": new Date("2022-09-15T16:00"),
    "completo": false,
    "id": 1642342747
  },
  {
    "descricao": "Estudar Recoil",
    "inicio": new Date("2022-09-23T15:00"),
    "fim": new Date("2022-09-16T17:00"),
    "completo": false,
    "id": 1642342959
  }]
})