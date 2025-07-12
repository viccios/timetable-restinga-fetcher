import { Router } from 'express';
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
router.get('/periods', getPeriods);
router.get('/subjects', getSubjects);
router.get('/teachers', getTeachers);
router.get('/classes', getClasses);
router.get('/classrooms', getClassrooms);
router.get('/classhours', getClassSchedule);
router.get('/teachershours', getTeachersSchedule);
router.get('/classroomshours', getClassroomsSchedule);

// Rotas de busca com query parameters
router.get('/periods/search', searchPeriods);
router.get('/subjects/search', searchSubjects);
router.get('/teachers/search', searchTeachers);
router.get('/classes/search', searchClasses);
router.get('/classrooms/search', searchClassrooms);
router.get('/classhours/search', searchClassSchedule);
router.get('/teachershours/search', searchTeacherSchedule);
router.get('/classroomshours/search', searchClassroomSchedule);

export default router;
