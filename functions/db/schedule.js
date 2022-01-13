const _ = require('lodash');
const convertSnakeToCamel = require('../lib/convertSnakeToCamel');

const addSchedule = async (client, pillId, userId, start, end, cycle, date, specific, day, time) => {
  const { rows } = await client.query(
    `
      INSERT INTO "schedule"
      (pill_id, user_id, start_date, end_date, schedule_cycle, schedule_date, schedule_specific, schedule_day, schedule_time)
      VALUES
      ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *
      `,
    [pillId, userId, start, end, cycle, date, specific, day, time],
  );
  return convertSnakeToCamel.keysToCamel(rows);
};

const findCalendarByMemberId = async (client, memberId, startDate, endDate) => {
  const { rows } = await client.query(
    `
    SELECT schedule_date
          , count(schedule_date) as schedule_count
          , count(case when is_check=true THEN  1 END ) as is_check_count
    FROM schedule
    WHERE user_id = $1 AND schedule_date BETWEEN $2 AND $3
    GROUP BY schedule_date;

  `,
    [memberId, startDate, endDate],
  );
  return convertSnakeToCamel.keysToCamel(rows);
};

const findScheduleByMemberId = async (client, memberId, date, scheduleTime) => {
  const { rows } = await client.query(
    `
    SELECT schedule.id as schedule_id, pill_id, pill_name, schedule_time, is_check, color, sticker_img
    FROM schedule
    LEFT JOIN pill ON schedule.pill_id = pill.id
    LEFT JOIN like_schedule on schedule.id = like_schedule.schedule_id
    LEFT JOIN sticker on sticker_id = sticker.id
    WHERE schedule.user_id = $1 AND schedule_date = $2 AND schedule_time = $3

  `,
    [memberId, date, scheduleTime],
  );
  return convertSnakeToCamel.keysToCamel(rows);
};

const findScheduleTime = async (client, memberId, date) => {
  const { rows } = await client.query(
    `
    SELECT schedule_time FROM schedule
    WHERE user_id = $1 AND schedule_date = $2
    GROUP BY schedule_time;
    `,
    [memberId, date],
  );
  return convertSnakeToCamel.keysToCamel(rows);
};
module.exports = { addSchedule, findCalendarByMemberId, findScheduleByMemberId, findScheduleTime };
