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
and get the number the total user following events 
*/

/////////////////////////////////////////////////////////////////////////////////////////


const result = await Venue.aggregate([
  {
    $facet: {
      featured: [
        {
          $match: {
            Featured: true,
          },
        },
        {
          $project: {
            Latitude: 0,
            Longitude: 0,
            UpcomingEvent: 0,
            Followers: 0,
            Meeting_space: 0,
            FlagedEvents: 0,
            OverviewImages: 0,
            Images: 0,
          },
        },
      ],
      notFeatured: [
        {
          $match: {
            Featured: false,
          },
        },
        {
          $project: {
            Latitude: 0,
            Longitude: 0,
            UpcomingEvent: 0,
            Followers: 0,
            Meeting_space: 0,
            FlagedEvents: 0,
            OverviewImages: 0,
            Images: 0,
          },
        },
      ],
    },
    
  },
  {
    $limit : parseInt(req.query.limit) ,
  },
]);

