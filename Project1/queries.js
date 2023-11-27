const data = await User.aggregate([
  {
    $match: { _id: userId },
  },
  {
    $lookup: {
      from: 'events', // Assuming your events collection is named 'events'
      let: { followingEventIds: '$FollowingEvents' },
      pipeline: [
        {
          $match: {
            $expr: { $in: ['$_id', '$$followingEventIds'] },
            StartDate: { $gte: startDate, $lte: endDate },
          },
        },
        {
          $project: {
            Name: 1,
            StartDate: 1,
            EndDate: 1,
            Banner : 1 ,
            // Add other fields you want to retrieve
          },
        },
      ],
      as: 'followingEventsData',
    },
  },
  {
    $unwind: '$followingEventsData',
  },
  {
    $project: {
      followingEventsData: 1,
      followingNumber : { $size: '$FollowingEvents' }
    },
  },

]);

/*
this query to get all events that the user following and filter them by month 
*/
