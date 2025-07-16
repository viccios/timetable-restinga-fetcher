import { Router } from 'express';
import asyncWrapper from '../utils/async-wrapper.js';
import {
  getPeriods,
  getSubjects,
  getTeachers,
  getClasses,
  getClassrooms,
  getClassSchedule,
  getTeachersSchedule,
  getClassroomsSchedule,
  // Funções de busca com query parameters
  searchPeriods,
  searchSubjects,
  searchTeachers,
  searchClasses,
  searchClassrooms,
  searchClassSchedule,
  searchTeacherSchedule,
  searchClassroomSchedule,
} from '../controllers/timetable.controller.js';

const router = Router();

// Rotas originais (listar todos)
router.get('/periods', asyncWrapper(getPeriods));
router.get('/subjects', asyncWrapper(getSubjects));
router.get('/teachers', asyncWrapper(getTeachers));
router.get('/classes', asyncWrapper(getClasses));
router.get('/classrooms', asyncWrapper(getClassrooms));
router.get('/classhours', asyncWrapper(getClassSchedule));
router.get('/teachershours', asyncWrapper(getTeachersSchedule));
router.get('/classroomshours', asyncWrapper(getClassroomsSchedule));

// Rotas de busca com query parameters
router.get('/periods/search', asyncWrapper(searchPeriods));
router.get('/subjects/search', asyncWrapper(searchSubjects));
router.get('/teachers/search', asyncWrapper(searchTeachers));
router.get('/classes/search', asyncWrapper(searchClasses));
router.get('/classrooms/search', asyncWrapper(searchClassrooms));
router.get('/classhours/search', asyncWrapper(searchClassSchedule));
router.get('/teachershours/search', asyncWrapper(searchTeacherSchedule));
router.get('/classroomshours/search', asyncWrapper(searchClassroomSchedule));

export default router;
