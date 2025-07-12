import { fetchHorarioTurmas } from '../utils/fetchHorarioTurmas.js';

const {
  periodos,
  disciplinas,
  professores,
  turmas,
  salasDeAula,
  horarioTurmas,
  horarioProfessores,
  horarioSalasDeAula,
} = await fetchHorarioTurmas();

function getPeriods(_, res) {
  res.status(200).json(periodos);
}

function getSubjects(_, res) {
  res.status(200).json(disciplinas);
}

function getTeachers(_, res) {
  res.status(200).json(professores);
}

function getClasses(_, res) {
  res.status(200).json(turmas);
}

function getClassrooms(_, res) {
  res.status(200).json(salasDeAula);
}

function getClassSchedule(_, res) {
  res.status(200).json(horarioTurmas);
}

function getTeachersSchedule(_, res) {
  res.status(200).json(horarioProfessores);
}

function getClassroomsSchedule(_, res) {
  res.status(200).json(horarioSalasDeAula);
}

export {
  getPeriods,
  getSubjects,
  getTeachers,
  getClasses,
  getClassrooms,
  getClassSchedule,
  getTeachersSchedule,
  getClassroomsSchedule,
};
