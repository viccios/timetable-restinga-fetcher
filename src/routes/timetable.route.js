import { Router } from 'express';
import {
  getTeachers,
  getPeriods,
  getSubjects,
  getClasses,
  getClassrooms,
  getClassSchedule,
  getTeachersSchedule,
  getClassroomsSchedule,
} from '../controllers/timetable.controller.js';

const router = Router();

router.get('/teachers', getTeachers);
router.get('/periods', getPeriods);
router.get('/subjects', getSubjects);
router.get('/classes', getClasses);
router.get('/classrooms', getClassrooms);
router.get('/class_schedule', getClassSchedule);
router.get('/teachers_schedule', getTeachersSchedule);
router.get('/classrooms_schedule', getClassroomsSchedule);

export default router;
