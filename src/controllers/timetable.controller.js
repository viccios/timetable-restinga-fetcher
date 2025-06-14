import process from 'node:process';

async function fetchTimetable() {
  try {
    const response = await fetch(process.env.TIMETABLE_DATABASE_URL, {
      method: 'POST',
      body: process.env.TIMETABLE_REQUEST_PAYLOAD,
    });

    const json = await response.json();

    return json;
  } catch (error) {
    throw new Error(error);
  }
}

const schedule = await fetchTimetable();

function getTeachers(_, res) {
  const teachers = schedule.r.tables[0].data_rows;
  res.status(200).json(teachers);
}

function getSubjects(_, res) {
  const subjects = schedule.r.tables[1].data_rows;
  res.status(200).json(subjects);
}

function getClassrooms(_, res) {
  const classrooms = schedule.r.tables[2].data_rows;
  res.status(200).json(classrooms);
}

function getClasses(_, res) {
  const classes = schedule.r.tables[3].data_rows;
  res.status(200).json(classes);
}

function getPeriods(_, res) {
  const periods = schedule.r.tables[6].data_rows;
  res.status(200).json(periods);
}

function getDayParts(_, res) {
  const dayParts = schedule.r.tables[7].data_rows;
  res.status(200).json(dayParts);
}

function getDates(_, res) {
  const dates = schedule.r.tables[8].data_rows;
  res.status(200).json(dates);
}

function getEventTypes(_, res) {
  const eventTypes = schedule.r.tables[10].data_rows;
  res.status(200).json(eventTypes);
}

export {
  getTeachers,
  getSubjects,
  getClassrooms,
  getClasses,
  getPeriods,
  getDayParts,
  getDates,
  getEventTypes,
};
