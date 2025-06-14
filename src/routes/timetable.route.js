import { Router } from 'express';
import {
  getTeachers,
  getSubjects,
  getClassrooms,
  getClasses,
  getPeriods,
  getDayParts,
  getDates,
  getEventTypes,
} from '../controllers/timetable.controller.js';

const router = Router();

router.get('/teachers', getTeachers);
router.get('/subjects', getSubjects);
router.get('/classrooms', getClassrooms);
router.get('/classes', getClasses);
router.get('/periods', getPeriods);
router.get('/dayparts', getDayParts);
router.get('/dates', getDates);
router.get('/event_types', getEventTypes);

export default router;
